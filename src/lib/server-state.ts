import fs from "fs";
import path from "path";
import {
  WorkshopSession,
  Participant,
  SubmissionRecord,
  SharedCityMetrics,
} from "@/types/game";
import { INITIAL_SCORE, calculateParticipantScore } from "./scoring";
import {
  INITIAL_CITY_METRICS,
  INITIAL_SHARED_CITY_METRICS,
  calculateCityMetrics,
  calculateCollectiveCityMetrics,
} from "./city-health";
import { MISSIONS } from "./game-data";
import {
  isSupabaseServerConfigured,
  getSupabaseRoom,
  createSupabaseRoom,
  registerSupabaseParticipant,
  submitSupabaseDecision,
  updateSupabasePresenterAction,
} from "./supabase-server";

export interface ServerRoomState {
  session: WorkshopSession;
  participants: Participant[];
  submissions: SubmissionRecord[];
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "multiplayer-rooms.json");

// In-memory room store (keyed by uppercase PIN)
const globalRoomStore: Map<string, ServerRoomState> = new Map();

function ensureDataDir(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch {
    // ignore
  }
}

function loadPersistedRooms(): void {
  try {
    ensureDataDir();
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      const parsed: Record<string, ServerRoomState> = JSON.parse(data);
      for (const [pin, room] of Object.entries(parsed)) {
        globalRoomStore.set(pin.toUpperCase(), room);
      }
    }
  } catch {
    // ignore
  }
}

function persistRooms(): void {
  try {
    ensureDataDir();
    const obj: Record<string, ServerRoomState> = {};
    for (const [pin, room] of globalRoomStore.entries()) {
      obj[pin] = room;
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(obj, null, 2), "utf-8");
  } catch {
    // ignore
  }
}

// Initial default demo room PIN
export const DEFAULT_PIN = "ECO2045";

// Track presence heartbeats (participantId -> timestamp)
const participantLastSeenMap: Map<string, number> = new Map();

export function touchParticipantPresence(pin: string, participantId?: string): void {
  const cleanPin = pin.trim().toUpperCase() || DEFAULT_PIN;
  const room = globalRoomStore.get(cleanPin);
  if (!room) return;

  const now = Date.now();
  if (participantId) {
    participantLastSeenMap.set(participantId, now);
    const p = room.participants.find((part) => part.id === participantId);
    if (p && p.connectionStatus !== "online") {
      p.connectionStatus = "online";
    }
  }

  // Mark participants who haven't pinged in 45 seconds as offline
  for (const p of room.participants) {
    const last = participantLastSeenMap.get(p.id);
    if (last && now - last > 45000 && p.connectionStatus === "online") {
      p.connectionStatus = "offline";
    }
  }
}

export function createServerRoom(
  customPin?: string,
  title?: string
): ServerRoomState {
  if (globalRoomStore.size === 0) {
    loadPersistedRooms();
  }

  let cleanPin = customPin?.trim().toUpperCase().replace(/[^A-Z0-9-]/g, "");
  if (!cleanPin) {
    let attempts = 0;
    do {
      const code = Math.floor(1000 + Math.random() * 9000);
      cleanPin = `ECO-${code}`;
      attempts++;
    } while (globalRoomStore.has(cleanPin) && attempts < 100);
  }

  const session: WorkshopSession = {
    id: `session-${cleanPin}`,
    pin: cleanPin,
    title: title?.trim() || `Nova City Campaign — Room ${cleanPin}`,
    status: "in_progress",
    currentMission: 1,
    consequencesRevealed: false,
    allowResubmission: false,
    registrationOpen: true,
    createdAt: new Date().toISOString(),
    sharedCityMetrics: { ...INITIAL_SHARED_CITY_METRICS },
  };

  const room: ServerRoomState = {
    session,
    participants: [],
    submissions: [],
  };

  globalRoomStore.set(cleanPin, room);
  persistRooms();
  return room;
}

export function getOrCreateRoom(pin: string = DEFAULT_PIN): ServerRoomState {
  if (globalRoomStore.size === 0) {
    loadPersistedRooms();
  }

  const cleanPin = pin.trim().toUpperCase() || DEFAULT_PIN;
  let room = globalRoomStore.get(cleanPin);

  if (!room) {
    const session: WorkshopSession = {
      id: `session-${cleanPin}`,
      pin: cleanPin,
      title: "Nova City 2045 — Robotics & AI Sustainability Workshop",
      status: "in_progress",
      currentMission: 1,
      consequencesRevealed: false,
      allowResubmission: false,
      registrationOpen: true,
      createdAt: new Date().toISOString(),
      sharedCityMetrics: { ...INITIAL_SHARED_CITY_METRICS },
    };

    room = {
      session,
      participants: [],
      submissions: [],
    };

    globalRoomStore.set(cleanPin, room);
    persistRooms();
  }

  return room;
}

export function registerServerParticipant(
  pin: string,
  fullName: string,
  teamName?: string
): { success: boolean; participant?: Participant; error?: string } {
  const room = getOrCreateRoom(pin);
  const trimmedName = fullName.trim();

  if (!trimmedName) {
    return { success: false, error: "Participant name cannot be blank." };
  }

  // Check if participant already exists in room (reconnect scenario)
  const existing = room.participants.find(
    (p) => p.fullName.toLowerCase() === trimmedName.toLowerCase()
  );

  if (existing) {
    existing.connectionStatus = "online";
    persistRooms();
    return { success: true, participant: existing };
  }

  if (!room.session.registrationOpen && room.session.status === "completed") {
    return { success: false, error: "Workshop registration is closed for this session." };
  }

  const newPart: Participant = {
    id: `cadet-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    workshopId: room.session.id,
    fullName: trimmedName,
    teamName: teamName?.trim() || "Alpha Vanguard",
    joinedAt: new Date().toISOString(),
    connectionStatus: "online",
    currentMission: room.session.currentMission,
    hasSubmittedCurrentMission: false,
    score: { ...INITIAL_SCORE },
    cityMetrics: { ...INITIAL_CITY_METRICS },
    decisions: {},
  };

  room.participants.push(newPart);
  persistRooms();
  return { success: true, participant: newPart };
}

export function submitServerDecision(
  pin: string,
  participantId: string,
  missionNumber: number,
  optionKey: "A" | "B"
): { success: boolean; error?: string; participant?: Participant; session?: WorkshopSession } {
  const room = getOrCreateRoom(pin);
  const participant = room.participants.find((p) => p.id === participantId);

  if (!participant) {
    return { success: false, error: "Participant not found in this workshop session." };
  }

  if (room.session.status === "paused") {
    return { success: false, error: "Mission is currently paused by Command Center." };
  }

  // Check if already submitted and resubmission is disabled
  if (
    participant.decisions[missionNumber] &&
    !room.session.allowResubmission
  ) {
    return { success: false, error: "Decision already submitted for this mission." };
  }

  const mission = MISSIONS.find((m) => m.number === missionNumber);
  const option = mission?.options.find((opt) => opt.key === optionKey);

  if (!option) {
    return { success: false, error: "Invalid mission option." };
  }

  // Record participant decision
  participant.decisions[missionNumber] = optionKey;
  participant.hasSubmittedCurrentMission = true;

  // Record submission record
  const subIndex = room.submissions.findIndex(
    (s) => s.participantId === participantId && s.missionNumber === missionNumber
  );

  const record: SubmissionRecord = {
    id: `sub-${participantId}-${missionNumber}`,
    workshopId: room.session.id,
    participantId: participant.id,
    participantName: participant.fullName,
    teamName: participant.teamName,
    missionNumber,
    optionKey,
    optionTitle: option.title,
    isSustainable: option.isSustainable,
    submittedAt: new Date().toISOString(),
  };

  if (subIndex >= 0) {
    room.submissions[subIndex] = record;
  } else {
    room.submissions.push(record);
  }

  // Update participant score and individual city metrics
  participant.score = calculateParticipantScore(participant.decisions);
  participant.cityMetrics = calculateCityMetrics(participant.decisions);

  // Recalculate room's collective shared city metrics
  room.session.sharedCityMetrics = calculateCollectiveCityMetrics(
    room.submissions,
    room.session.currentMission,
    room.session.consequencesRevealed
  );

  persistRooms();
  return { success: true, participant, session: room.session };
}

// Presenter Controls (Protected)
export function updateServerPresenterAction(
  pin: string,
  action: string,
  payload?: any
): { success: boolean; session?: WorkshopSession; error?: string } {
  const room = getOrCreateRoom(pin);

  switch (action) {
    case "start_campaign":
      room.session.status = "in_progress";
      room.session.currentMission = 1;
      room.session.consequencesRevealed = false;
      break;

    case "set_mission": {
      const num = Math.min(20, Math.max(1, Number(payload?.missionNumber || 1)));
      room.session.currentMission = num;
      room.session.consequencesRevealed = false;
      room.session.status = "in_progress";
      room.participants.forEach((p) => {
        p.currentMission = num;
        p.hasSubmittedCurrentMission = !!p.decisions[num];
      });
      break;
    }

    case "reveal_consequences":
      room.session.consequencesRevealed = true;
      // Recalculate all scores
      room.participants.forEach((p) => {
        p.score = calculateParticipantScore(p.decisions);
        p.cityMetrics = calculateCityMetrics(p.decisions);
      });
      room.session.sharedCityMetrics = calculateCollectiveCityMetrics(
        room.submissions,
        room.session.currentMission,
        true
      );
      break;

    case "advance_mission": {
      if (room.session.currentMission < 20) {
        room.session.currentMission += 1;
        room.session.consequencesRevealed = false;
        room.participants.forEach((p) => {
          p.currentMission = room.session.currentMission;
          p.hasSubmittedCurrentMission = !!p.decisions[room.session.currentMission];
        });
      } else {
        room.session.status = "completed";
      }
      break;
    }

    case "toggle_pause":
      room.session.status = room.session.status === "paused" ? "in_progress" : "paused";
      break;

    case "toggle_registration":
      room.session.registrationOpen = !room.session.registrationOpen;
      break;

    case "toggle_resubmission":
      room.session.allowResubmission = !room.session.allowResubmission;
      break;

    case "set_timer":
      room.session.timerSecondsRemaining = payload?.seconds !== undefined ? payload.seconds : null;
      break;

    case "trigger_surprise_event": {
      const event = payload?.event || null;
      room.session.activeSurpriseEvent = event;
      if (event && event.affectedMetric) {
        // Apply delta to shared metric
        const metricKey = event.affectedMetric as keyof SharedCityMetrics;
        if (typeof room.session.sharedCityMetrics[metricKey] === "number") {
          (room.session.sharedCityMetrics as any)[metricKey] = Math.max(
            5,
            Math.min(100, (room.session.sharedCityMetrics as any)[metricKey] + event.delta)
          );
        }
      }
      break;
    }

    case "clear_surprise_event":
      room.session.activeSurpriseEvent = null;
      break;

    case "reset_room":
      room.session.currentMission = 1;
      room.session.consequencesRevealed = false;
      room.session.status = "in_progress";
      room.session.sharedCityMetrics = { ...INITIAL_SHARED_CITY_METRICS };
      room.participants.forEach((p) => {
        p.decisions = {};
        p.currentMission = 1;
        p.hasSubmittedCurrentMission = false;
        p.score = { ...INITIAL_SCORE };
        p.cityMetrics = { ...INITIAL_CITY_METRICS };
      });
      room.submissions = [];
      break;

    case "create_room": {
      const customPin = payload?.pin || payload?.customPin;
      const title = payload?.title;
      const created = createServerRoom(customPin, title);
      return { success: true, session: created.session };
    }

    case "close_room":
      room.session.status = "completed";
      room.session.registrationOpen = false;
      break;

    default:
      return { success: false, error: `Unknown presenter action: ${action}` };
  }

  persistRooms();
  return { success: true, session: room.session };
}

// ---------------------------------------------------------------------------
// Hybrid Storage Async API Bridge (Supabase PostgreSQL + Local JSON Fallback)
// ---------------------------------------------------------------------------

export async function getOrCreateRoomAsync(pin: string = DEFAULT_PIN): Promise<ServerRoomState> {
  if (isSupabaseServerConfigured()) {
    try {
      const supa = await getSupabaseRoom(pin);
      if (supa) return supa;
      const created = await createSupabaseRoom(pin);
      if (created) return created;
    } catch (err) {
      console.warn("Supabase room lookup failed, falling back to local:", err);
    }
  }
  return getOrCreateRoom(pin);
}

export async function createServerRoomAsync(
  customPin?: string,
  title?: string
): Promise<ServerRoomState> {
  let cleanPin = customPin?.trim().toUpperCase().replace(/[^A-Z0-9-]/g, "");
  if (!cleanPin) {
    const code = Math.floor(1000 + Math.random() * 9000);
    cleanPin = `ECO-${code}`;
  }

  if (isSupabaseServerConfigured()) {
    try {
      const created = await createSupabaseRoom(cleanPin, title);
      if (created) return created;
    } catch (err) {
      console.warn("Supabase room creation failed, falling back to local:", err);
    }
  }
  return createServerRoom(cleanPin, title);
}

export async function registerServerParticipantAsync(
  pin: string,
  fullName: string,
  teamName?: string
): Promise<{ success: boolean; participant?: Participant; error?: string }> {
  if (isSupabaseServerConfigured()) {
    try {
      const supa = await registerSupabaseParticipant(pin, fullName, teamName);
      if (supa.success) return supa;
    } catch (err) {
      console.warn("Supabase registration failed, falling back to local:", err);
    }
  }
  return registerServerParticipant(pin, fullName, teamName);
}

export async function submitServerDecisionAsync(
  pin: string,
  participantId: string,
  missionNumber: number,
  optionKey: "A" | "B"
): Promise<{ success: boolean; error?: string; participant?: Participant; session?: WorkshopSession }> {
  if (isSupabaseServerConfigured()) {
    try {
      const supa = await submitSupabaseDecision(pin, participantId, missionNumber, optionKey);
      if (supa.success) return supa;
    } catch (err) {
      console.warn("Supabase submission failed, falling back to local:", err);
    }
  }
  return submitServerDecision(pin, participantId, missionNumber, optionKey);
}

export async function updateServerPresenterActionAsync(
  pin: string,
  action: string,
  payload?: any
): Promise<{ success: boolean; session?: WorkshopSession; error?: string }> {
  if (isSupabaseServerConfigured()) {
    try {
      const supa = await updateSupabasePresenterAction(pin, action, payload);
      if (supa.success) return supa;
    } catch (err) {
      console.warn("Supabase action update failed, falling back to local:", err);
    }
  }
  return updateServerPresenterAction(pin, action, payload);
}
