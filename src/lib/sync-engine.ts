import {
  CityMetrics,
  Participant,
  ParticipantScore,
  SubmissionRecord,
  WorkshopSession,
  SharedCityMetrics,
} from "@/types/game";
import {
  INITIAL_CITY_METRICS,
  INITIAL_SHARED_CITY_METRICS,
  calculateCityMetrics,
  calculateCollectiveCityMetrics,
} from "./city-health";
import { calculateParticipantScore, INITIAL_SCORE } from "./scoring";
import { MISSIONS } from "./game-data";

export const DEFAULT_PIN = "ECO2045";

export interface GameState {
  session: WorkshopSession;
  participants: Participant[];
  submissions: SubmissionRecord[];
}

const DEFAULT_SESSION: WorkshopSession = {
  id: "session-demo-01",
  pin: DEFAULT_PIN,
  title: "Nova City Sustainability Summit 2045",
  status: "in_progress",
  currentMission: 1,
  consequencesRevealed: false,
  allowResubmission: false,
  registrationOpen: true,
  createdAt: new Date().toISOString(),
  sharedCityMetrics: { ...INITIAL_SHARED_CITY_METRICS },
};

const SAMPLE_PARTICIPANTS: Participant[] = [
  {
    id: "part-aria-01",
    workshopId: "session-demo-01",
    fullName: "Aria Vance",
    teamName: "CleanEdge Dynamics",
    joinedAt: new Date(Date.now() - 360000).toISOString(),
    connectionStatus: "online",
    currentMission: 1,
    hasSubmittedCurrentMission: false,
    score: { ...INITIAL_SCORE },
    cityMetrics: { ...INITIAL_CITY_METRICS },
    decisions: {},
  },
  {
    id: "part-kaelen-02",
    workshopId: "session-demo-01",
    fullName: "Kaelen Chen",
    teamName: "ZeroEwaste Lab",
    joinedAt: new Date(Date.now() - 300000).toISOString(),
    connectionStatus: "online",
    currentMission: 1,
    hasSubmittedCurrentMission: false,
    score: { ...INITIAL_SCORE },
    cityMetrics: { ...INITIAL_CITY_METRICS },
    decisions: {},
  },
  {
    id: "part-mira-03",
    workshopId: "session-demo-01",
    fullName: "Dr. Mira Soren",
    teamName: "GreenGrid AI",
    joinedAt: new Date(Date.now() - 240000).toISOString(),
    connectionStatus: "online",
    currentMission: 1,
    hasSubmittedCurrentMission: false,
    score: { ...INITIAL_SCORE },
    cityMetrics: { ...INITIAL_CITY_METRICS },
    decisions: {},
  },
  {
    id: "part-tarek-04",
    workshopId: "session-demo-01",
    fullName: "Tarek Al-Mansoor",
    teamName: "RoboCivic",
    joinedAt: new Date(Date.now() - 180000).toISOString(),
    connectionStatus: "online",
    currentMission: 1,
    hasSubmittedCurrentMission: false,
    score: { ...INITIAL_SCORE },
    cityMetrics: { ...INITIAL_CITY_METRICS },
    decisions: {},
  },
  {
    id: "part-elena-05",
    workshopId: "session-demo-01",
    fullName: "Elena Rostova",
    teamName: "EcoSync Autonomous",
    joinedAt: new Date(Date.now() - 120000).toISOString(),
    connectionStatus: "online",
    currentMission: 1,
    hasSubmittedCurrentMission: false,
    score: { ...INITIAL_SCORE },
    cityMetrics: { ...INITIAL_CITY_METRICS },
    decisions: {},
  },
];

const STORAGE_KEY = "ecomind_gamestate_v2";
let broadcastChannel: BroadcastChannel | null = null;

if (typeof window !== "undefined" && "BroadcastChannel" in window) {
  try {
    broadcastChannel = new BroadcastChannel("ecomind_realtime_channel");
  } catch {
    broadcastChannel = null;
  }
}

export function loadGameState(): GameState {
  if (typeof window === "undefined") {
    return {
      session: DEFAULT_SESSION,
      participants: SAMPLE_PARTICIPANTS,
      submissions: [],
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.session && parsed.participants) {
        if (!parsed.session.sharedCityMetrics) {
          parsed.session.sharedCityMetrics = { ...INITIAL_SHARED_CITY_METRICS };
        }
        return parsed;
      }
    }
  } catch (err) {
    console.warn("Could not parse saved game state:", err);
  }

  const initial: GameState = {
    session: DEFAULT_SESSION,
    participants: SAMPLE_PARTICIPANTS,
    submissions: [],
  };
  saveGameState(initial);
  return initial;
}

export function saveGameState(state: GameState): void {
  if (typeof window === "undefined") return;
  try {
    // Recalculate room's collective shared city metrics
    state.session.sharedCityMetrics = calculateCollectiveCityMetrics(
      state.submissions,
      state.session.currentMission,
      state.session.consequencesRevealed
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: "SYNC_STATE", state });
    }
    window.dispatchEvent(new CustomEvent("ecomind_sync_event", { detail: state }));
  } catch (err) {
    console.error("Failed to save state:", err);
  }
}

export function subscribeToSync(callback: (state: GameState) => void): () => void {
  if (typeof window === "undefined") return () => {};

  const handleCustomEvent = (e: Event) => {
    const custom = e as CustomEvent<GameState>;
    if (custom.detail) callback(custom.detail);
  };

  const handleBroadcast = (e: MessageEvent) => {
    if (e.data && e.data.type === "SYNC_STATE" && e.data.state) {
      callback(e.data.state);
    }
  };

  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        callback(parsed);
      } catch {
        // ignore
      }
    }
  };

  window.addEventListener("ecomind_sync_event", handleCustomEvent);
  window.addEventListener("storage", handleStorage);
  if (broadcastChannel) {
    broadcastChannel.addEventListener("message", handleBroadcast);
  }

  return () => {
    window.removeEventListener("ecomind_sync_event", handleCustomEvent);
    window.removeEventListener("storage", handleStorage);
    if (broadcastChannel) {
      broadcastChannel.removeEventListener("message", handleBroadcast);
    }
  };
}

// -------------------------------------------------------------
// Online Cross-Device Server API Sync
// -------------------------------------------------------------

export async function fetchRemoteRoom(pin: string = DEFAULT_PIN): Promise<GameState | null> {
  try {
    const res = await fetch(`/api/session?pin=${encodeURIComponent(pin)}`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.success && data.session) {
      const remoteState: GameState = {
        session: data.session,
        participants: data.participants || [],
        submissions: data.submissions || [],
      };
      saveGameState(remoteState);
      return remoteState;
    }
  } catch {
    // fallback to local state
  }
  return null;
}

export async function registerParticipantOnline(
  pin: string,
  fullName: string,
  teamName?: string
): Promise<{ success: boolean; participant?: Participant; error?: string }> {
  try {
    const res = await fetch("/api/session/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin, fullName, teamName }),
    });
    const data = await res.json();
    if (data.success && data.participant) {
      // also update local cache
      const state = loadGameState();
      if (!state.participants.some((p) => p.id === data.participant.id)) {
        state.participants.push(data.participant);
      }
      if (data.session) state.session = data.session;
      saveGameState(state);
      return { success: true, participant: data.participant };
    }
    return { success: false, error: data.error };
  } catch {
    // Fallback to local registration
    return registerParticipant(pin, fullName, teamName);
  }
}

export async function submitDecisionOnline(
  pin: string,
  participantId: string,
  missionNumber: number,
  optionKey: "A" | "B"
): Promise<{ success: boolean; error?: string; participant?: Participant }> {
  try {
    const res = await fetch("/api/session/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin, participantId, missionNumber, optionKey }),
    });
    const data = await res.json();
    if (data.success && data.participant) {
      // update local cache
      const state = loadGameState();
      const pIndex = state.participants.findIndex((p) => p.id === participantId);
      if (pIndex >= 0) {
        state.participants[pIndex] = data.participant;
      }
      if (data.session) state.session = data.session;
      saveGameState(state);
      return { success: true, participant: data.participant };
    }
    return { success: false, error: data.error };
  } catch {
    // Fallback to local submit
    return submitParticipantDecision(participantId, missionNumber, optionKey);
  }
}

export async function sendPresenterActionOnline(
  pin: string,
  action: string,
  payload?: any,
  passcode?: string
): Promise<GameState | null> {
  try {
    const res = await fetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin, action, payload, passcode }),
    });
    const data = await res.json();
    if (data.success && data.session) {
      const state: GameState = {
        session: data.session,
        participants: data.participants || [],
        submissions: data.submissions || [],
      };
      saveGameState(state);
      return state;
    }
  } catch {
    // local fallback
  }
  return null;
}

// -------------------------------------------------------------
// Presenter Actions (Local + Optimistic)
// -------------------------------------------------------------

export function presenterStartWorkshop(pin: string = DEFAULT_PIN): GameState {
  sendPresenterActionOnline(pin, "start_campaign");
  const state = loadGameState();
  state.session.status = "in_progress";
  state.session.currentMission = 1;
  state.session.consequencesRevealed = false;
  state.session.registrationOpen = false;

  simulateBotDecisions(state, 1);
  saveGameState(state);
  return state;
}

export function presenterToggleRegistration(
  open: boolean,
  pin: string = DEFAULT_PIN
): GameState {
  sendPresenterActionOnline(pin, "toggle_registration");
  const state = loadGameState();
  state.session.registrationOpen = open;
  saveGameState(state);
  return state;
}

export function presenterStartMission(
  missionNumber: number,
  pin: string = DEFAULT_PIN
): GameState {
  sendPresenterActionOnline(pin, "set_mission", { missionNumber });
  const state = loadGameState();
  state.session.currentMission = missionNumber;
  state.session.consequencesRevealed = false;
  state.session.status = "in_progress";

  state.participants.forEach((p) => {
    p.currentMission = missionNumber;
    p.hasSubmittedCurrentMission = !!p.decisions[missionNumber];
  });

  simulateBotDecisions(state, missionNumber);
  saveGameState(state);
  return state;
}

export function presenterRevealConsequences(pin: string = DEFAULT_PIN): GameState {
  sendPresenterActionOnline(pin, "reveal_consequences");
  const state = loadGameState();
  state.session.consequencesRevealed = true;

  state.participants.forEach((p) => {
    p.score = calculateParticipantScore(p.decisions);
    p.cityMetrics = calculateCityMetrics(p.decisions);
  });

  saveGameState(state);
  return state;
}

export function presenterAdvanceMission(pin: string = DEFAULT_PIN): GameState {
  sendPresenterActionOnline(pin, "advance_mission");
  const state = loadGameState();
  if (state.session.currentMission < 20) {
    state.session.currentMission += 1;
    state.session.consequencesRevealed = false;
    state.participants.forEach((p) => {
      p.currentMission = state.session.currentMission;
      p.hasSubmittedCurrentMission = !!p.decisions[state.session.currentMission];
    });
    simulateBotDecisions(state, state.session.currentMission);
  } else {
    state.session.status = "completed";
    state.session.consequencesRevealed = true;
  }
  saveGameState(state);
  return state;
}

export function presenterTogglePause(
  pause: boolean,
  pin: string = DEFAULT_PIN
): GameState {
  sendPresenterActionOnline(pin, "toggle_pause");
  const state = loadGameState();
  state.session.status = pause ? "paused" : "in_progress";
  saveGameState(state);
  return state;
}

export function presenterToggleResubmission(
  allow: boolean,
  pin: string = DEFAULT_PIN
): GameState {
  sendPresenterActionOnline(pin, "toggle_resubmission");
  const state = loadGameState();
  state.session.allowResubmission = allow;
  saveGameState(state);
  return state;
}

export function presenterEndSession(pin: string = DEFAULT_PIN): GameState {
  sendPresenterActionOnline(pin, "advance_mission");
  const state = loadGameState();
  state.session.status = "completed";
  state.session.consequencesRevealed = true;
  saveGameState(state);
  return state;
}

export function presenterResetWorkshop(pin: string = DEFAULT_PIN): GameState {
  sendPresenterActionOnline(pin, "reset_room");
  const fresh: GameState = {
    session: {
      ...DEFAULT_SESSION,
      createdAt: new Date().toISOString(),
    },
    participants: SAMPLE_PARTICIPANTS.map((p) => ({
      ...p,
      decisions: {},
      hasSubmittedCurrentMission: false,
      currentMission: 1,
      score: { ...INITIAL_SCORE },
      cityMetrics: { ...INITIAL_CITY_METRICS },
    })),
    submissions: [],
  };
  saveGameState(fresh);
  return fresh;
}

// -------------------------------------------------------------
// Participant Actions
// -------------------------------------------------------------

export function registerParticipant(
  pin: string,
  fullName: string,
  teamName?: string
): { success: boolean; participant?: Participant; error?: string } {
  const state = loadGameState();

  if (pin.trim().toUpperCase() !== state.session.pin.toUpperCase()) {
    return { success: false, error: "Invalid Workshop Session PIN. Please check with the presenter." };
  }

  if (!state.session.registrationOpen && state.session.status === "completed") {
    return { success: false, error: "This workshop session has ended." };
  }

  const trimmedName = fullName.trim();
  if (!trimmedName) {
    return { success: false, error: "Participant name cannot be blank." };
  }

  const existing = state.participants.find(
    (p) => p.fullName.toLowerCase() === trimmedName.toLowerCase()
  );

  if (existing) {
    existing.connectionStatus = "online";
    saveGameState(state);
    return { success: true, participant: existing };
  }

  const newPart: Participant = {
    id: `part-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    workshopId: state.session.id,
    fullName: trimmedName,
    teamName: teamName?.trim() || "Alpha Vanguard",
    joinedAt: new Date().toISOString(),
    connectionStatus: "online",
    currentMission: state.session.currentMission,
    hasSubmittedCurrentMission: false,
    score: { ...INITIAL_SCORE },
    cityMetrics: { ...INITIAL_CITY_METRICS },
    decisions: {},
  };

  state.participants.push(newPart);
  saveGameState(state);
  return { success: true, participant: newPart };
}

export function submitParticipantDecision(
  participantId: string,
  missionNumber: number,
  optionKey: "A" | "B"
): { success: boolean; error?: string; participant?: Participant } {
  const state = loadGameState();
  const participant = state.participants.find((p) => p.id === participantId);

  if (!participant) {
    return { success: false, error: "Participant not found." };
  }

  if (state.session.status === "paused") {
    return { success: false, error: "Workshop is currently paused by presenter." };
  }

  if (
    participant.hasSubmittedCurrentMission &&
    participant.decisions[missionNumber] &&
    !state.session.allowResubmission
  ) {
    return { success: false, error: "Decision already submitted for this mission." };
  }

  const mission = MISSIONS.find((m) => m.number === missionNumber);
  const option = mission?.options.find((opt) => opt.key === optionKey);

  if (!option) {
    return { success: false, error: "Invalid decision choice." };
  }

  participant.decisions[missionNumber] = optionKey;
  participant.hasSubmittedCurrentMission = true;

  const subIndex = state.submissions.findIndex(
    (s) => s.participantId === participantId && s.missionNumber === missionNumber
  );
  const record: SubmissionRecord = {
    id: `sub-${participantId}-${missionNumber}`,
    workshopId: state.session.id,
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
    state.submissions[subIndex] = record;
  } else {
    state.submissions.push(record);
  }

  participant.score = calculateParticipantScore(participant.decisions);
  participant.cityMetrics = calculateCityMetrics(participant.decisions);

  saveGameState(state);
  return { success: true, participant };
}

export function awardParticipantBonus(
  participantId: string,
  bonusPoints: number = 50
): { success: boolean; participant?: Participant } {
  const state = loadGameState();
  const participant = state.participants.find((p) => p.id === participantId);
  if (!participant) return { success: false };

  participant.score.total += bonusPoints;
  saveGameState(state);
  return { success: true, participant };
}

function simulateBotDecisions(state: GameState, missionNum: number): void {
  const mission = MISSIONS.find((m) => m.number === missionNum);
  if (!mission) return;

  state.participants.forEach((part, idx) => {
    if (SAMPLE_PARTICIPANTS.some((sp) => sp.fullName === part.fullName)) {
      // 80% choose sustainable Option A, 20% choose Option B
      const choice: "A" | "B" = (idx + missionNum) % 4 === 0 ? "B" : "A";
      part.decisions[missionNum] = choice;
      part.hasSubmittedCurrentMission = true;
      part.score = calculateParticipantScore(part.decisions);
      part.cityMetrics = calculateCityMetrics(part.decisions);

      const option = mission.options.find((o) => o.key === choice);
      if (!state.submissions.some((s) => s.participantId === part.id && s.missionNumber === missionNum)) {
        state.submissions.push({
          id: `sub-bot-${part.id}-${missionNum}`,
          workshopId: state.session.id,
          participantId: part.id,
          participantName: part.fullName,
          teamName: part.teamName,
          missionNumber: missionNum,
          optionKey: choice,
          optionTitle: option?.title || choice,
          isSustainable: option?.isSustainable ?? true,
          submittedAt: new Date().toISOString(),
        });
      }
    }
  });
}
