import { createClient, SupabaseClient } from "@supabase/supabase-js";
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
import { ServerRoomState, DEFAULT_PIN } from "./server-state";

let supabaseServerClient: SupabaseClient | null = null;

export function isSupabaseServerConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return !!(url && key && url.trim().length > 0 && key.trim().length > 0);
}

export function getSupabaseServerClient(): SupabaseClient | null {
  if (!isSupabaseServerConfigured()) return null;
  if (!supabaseServerClient) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const key = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)!;
    supabaseServerClient = createClient(url, key, {
      auth: { persistSession: false },
    });
  }
  return supabaseServerClient;
}

export async function getSupabaseRoom(pin: string = DEFAULT_PIN): Promise<ServerRoomState | null> {
  const client = getSupabaseServerClient();
  if (!client) return null;

  const cleanPin = pin.trim().toUpperCase() || DEFAULT_PIN;

  try {
    // 1. Fetch workshop session
    const { data: workshop, error: wError } = await client
      .from("workshops")
      .select("*")
      .eq("session_pin", cleanPin)
      .single();

    if (wError || !workshop) {
      return null;
    }

    // 2. Fetch participants
    const { data: participants, error: pError } = await client
      .from("participants")
      .select("*")
      .eq("workshop_id", workshop.id);

    // 3. Fetch submissions
    const { data: submissions, error: sError } = await client
      .from("submissions")
      .select("*")
      .eq("workshop_id", workshop.id);

    const session: WorkshopSession = {
      id: workshop.id,
      pin: workshop.session_pin,
      title: workshop.title,
      status: workshop.status,
      currentMission: workshop.current_mission,
      consequencesRevealed: workshop.consequences_revealed,
      allowResubmission: workshop.allow_resubmission,
      registrationOpen: workshop.registration_open,
      timerSecondsRemaining: workshop.timer_seconds_remaining,
      activeSurpriseEvent: workshop.active_surprise_event,
      createdAt: workshop.created_at,
      sharedCityMetrics: workshop.shared_city_metrics || { ...INITIAL_SHARED_CITY_METRICS },
    };

    const mappedParticipants: Participant[] = (participants || []).map((p) => ({
      id: p.id,
      workshopId: p.workshop_id,
      fullName: p.full_name,
      teamName: p.team_name,
      joinedAt: p.joined_at,
      connectionStatus: p.connection_status,
      currentMission: p.current_mission || session.currentMission,
      hasSubmittedCurrentMission: !!p.has_submitted_current_mission,
      score: p.score || { ...INITIAL_SCORE },
      cityMetrics: p.city_metrics || { ...INITIAL_CITY_METRICS },
      inventory: p.inventory || [],
      discoveredClueIds: p.discovered_clues || [],
      decisions: p.decisions || {},
    }));

    const mappedSubmissions: SubmissionRecord[] = (submissions || []).map((s) => ({
      id: s.id,
      workshopId: s.workshop_id,
      participantId: s.participant_id,
      participantName: s.participant_name,
      teamName: s.team_name,
      missionNumber: s.mission_number,
      optionKey: s.option_key as "A" | "B",
      optionTitle: s.option_title,
      isSustainable: s.is_sustainable,
      submittedAt: s.submitted_at,
    }));

    return {
      session,
      participants: mappedParticipants,
      submissions: mappedSubmissions,
    };
  } catch (err) {
    console.warn("Supabase getRoom error, falling back:", err);
    return null;
  }
}

export async function createSupabaseRoom(
  pin: string,
  title?: string
): Promise<ServerRoomState | null> {
  const client = getSupabaseServerClient();
  if (!client) return null;

  const cleanPin = pin.trim().toUpperCase();

  try {
    const { data, error } = await client
      .from("workshops")
      .insert({
        session_pin: cleanPin,
        title: title?.trim() || `Nova City Campaign — Room ${cleanPin}`,
        status: "in_progress",
        current_mission: 1,
        consequences_revealed: false,
        allow_resubmission: false,
        registration_open: true,
        shared_city_metrics: { ...INITIAL_SHARED_CITY_METRICS },
      })
      .select()
      .single();

    if (error || !data) {
      // If already exists, return existing
      return getSupabaseRoom(cleanPin);
    }

    return {
      session: {
        id: data.id,
        pin: data.session_pin,
        title: data.title,
        status: data.status,
        currentMission: data.current_mission,
        consequencesRevealed: data.consequences_revealed,
        allowResubmission: data.allow_resubmission,
        registrationOpen: data.registration_open,
        createdAt: data.created_at,
        sharedCityMetrics: data.shared_city_metrics,
      },
      participants: [],
      submissions: [],
    };
  } catch (err) {
    console.warn("Supabase createRoom error:", err);
    return null;
  }
}

export async function registerSupabaseParticipant(
  pin: string,
  fullName: string,
  teamName?: string
): Promise<{ success: boolean; participant?: Participant; error?: string }> {
  const client = getSupabaseServerClient();
  if (!client) return { success: false, error: "Database unavailable" };

  const room = await getSupabaseRoom(pin);
  if (!room) {
    return { success: false, error: "Workshop room not found." };
  }

  const trimmed = fullName.trim();
  const existing = room.participants.find(
    (p) => p.fullName.toLowerCase() === trimmed.toLowerCase()
  );

  if (existing) {
    // Reconnection
    await client
      .from("participants")
      .update({ connection_status: "online", last_seen_at: new Date().toISOString() })
      .eq("id", existing.id);
    existing.connectionStatus = "online";
    return { success: true, participant: existing };
  }

  if (!room.session.registrationOpen && room.session.status === "completed") {
    return { success: false, error: "Registration is closed for this session." };
  }

  const newId = `cadet-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
  const newPart: Participant = {
    id: newId,
    workshopId: room.session.id,
    fullName: trimmed,
    teamName: teamName?.trim() || "Alpha Vanguard",
    joinedAt: new Date().toISOString(),
    connectionStatus: "online",
    currentMission: room.session.currentMission,
    hasSubmittedCurrentMission: false,
    score: { ...INITIAL_SCORE },
    cityMetrics: { ...INITIAL_CITY_METRICS },
    inventory: [],
    discoveredClueIds: [],
    decisions: {},
  };

  try {
    const { error } = await client.from("participants").insert({
      id: newPart.id,
      workshop_id: room.session.id,
      full_name: newPart.fullName,
      team_name: newPart.teamName,
      connection_status: "online",
      current_mission: newPart.currentMission,
      has_submitted_current_mission: false,
      score: newPart.score,
      city_metrics: newPart.cityMetrics,
      inventory: [],
      discovered_clues: [],
      decisions: {},
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, participant: newPart };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function submitSupabaseDecision(
  pin: string,
  participantId: string,
  missionNumber: number,
  optionKey: "A" | "B"
): Promise<{ success: boolean; error?: string; participant?: Participant; session?: WorkshopSession }> {
  const client = getSupabaseServerClient();
  if (!client) return { success: false, error: "Database unavailable" };

  const room = await getSupabaseRoom(pin);
  if (!room) return { success: false, error: "Workshop room not found." };

  const participant = room.participants.find((p) => p.id === participantId);
  if (!participant) return { success: false, error: "Participant not found in workshop." };

  if (room.session.status === "paused") {
    return { success: false, error: "Mission is currently paused by Command Center." };
  }

  if (participant.decisions[missionNumber] && !room.session.allowResubmission) {
    return { success: false, error: "Decision already submitted for this mission." };
  }

  const mission = MISSIONS.find((m) => m.number === missionNumber);
  const option = mission?.options.find((opt) => opt.key === optionKey);
  if (!option) return { success: false, error: "Invalid mission option." };

  participant.decisions[missionNumber] = optionKey;
  participant.hasSubmittedCurrentMission = true;
  participant.score = calculateParticipantScore(participant.decisions);
  participant.cityMetrics = calculateCityMetrics(participant.decisions);

  const subId = `sub-${participantId}-${missionNumber}`;
  const record: SubmissionRecord = {
    id: subId,
    workshopId: room.session.id,
    participantId,
    participantName: participant.fullName,
    teamName: participant.teamName,
    missionNumber,
    optionKey,
    optionTitle: option.title,
    isSustainable: option.isSustainable,
    submittedAt: new Date().toISOString(),
  };

  try {
    // 1. Upsert submission
    await client.from("submissions").upsert({
      id: record.id,
      workshop_id: room.session.id,
      participant_id: participantId,
      participant_name: participant.fullName,
      team_name: participant.teamName,
      mission_number: missionNumber,
      option_key: optionKey,
      option_title: option.title,
      is_sustainable: option.isSustainable,
    });

    // 2. Update participant state
    await client
      .from("participants")
      .update({
        decisions: participant.decisions,
        has_submitted_current_mission: true,
        score: participant.score,
        city_metrics: participant.cityMetrics,
      })
      .eq("id", participantId);

    // 3. Recalculate room metrics
    const updatedSubmissions = [...room.submissions.filter((s) => s.id !== subId), record];
    const newMetrics = calculateCollectiveCityMetrics(
      updatedSubmissions,
      room.session.currentMission,
      room.session.consequencesRevealed
    );

    await client
      .from("workshops")
      .update({ shared_city_metrics: newMetrics, last_active_at: new Date().toISOString() })
      .eq("id", room.session.id);

    room.session.sharedCityMetrics = newMetrics;

    return { success: true, participant, session: room.session };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function updateSupabasePresenterAction(
  pin: string,
  action: string,
  payload?: any
): Promise<{ success: boolean; session?: WorkshopSession; error?: string }> {
  const client = getSupabaseServerClient();
  if (!client) return { success: false, error: "Database unavailable" };

  const room = await getSupabaseRoom(pin);
  if (!room) return { success: false, error: "Room not found." };

  try {
    switch (action) {
      case "start_campaign":
        await client
          .from("workshops")
          .update({ status: "in_progress", current_mission: 1, consequences_revealed: false })
          .eq("id", room.session.id);
        room.session.status = "in_progress";
        room.session.currentMission = 1;
        room.session.consequencesRevealed = false;
        break;

      case "set_mission": {
        const num = Math.min(20, Math.max(1, Number(payload?.missionNumber || 1)));
        await client
          .from("workshops")
          .update({ current_mission: num, consequences_revealed: false, status: "in_progress" })
          .eq("id", room.session.id);
        await client
          .from("participants")
          .update({ current_mission: num, has_submitted_current_mission: false })
          .eq("workshop_id", room.session.id);
        room.session.currentMission = num;
        room.session.consequencesRevealed = false;
        break;
      }

      case "reveal_consequences": {
        const updatedMetrics = calculateCollectiveCityMetrics(
          room.submissions,
          room.session.currentMission,
          true
        );
        await client
          .from("workshops")
          .update({ consequences_revealed: true, shared_city_metrics: updatedMetrics })
          .eq("id", room.session.id);
        room.session.consequencesRevealed = true;
        room.session.sharedCityMetrics = updatedMetrics;
        break;
      }

      case "advance_mission": {
        if (room.session.currentMission < 20) {
          const nextMission = room.session.currentMission + 1;
          await client
            .from("workshops")
            .update({ current_mission: nextMission, consequences_revealed: false })
            .eq("id", room.session.id);
          await client
            .from("participants")
            .update({ current_mission: nextMission, has_submitted_current_mission: false })
            .eq("workshop_id", room.session.id);
          room.session.currentMission = nextMission;
          room.session.consequencesRevealed = false;
        } else {
          await client.from("workshops").update({ status: "completed" }).eq("id", room.session.id);
          room.session.status = "completed";
        }
        break;
      }

      case "toggle_pause": {
        const newStatus = room.session.status === "paused" ? "in_progress" : "paused";
        await client.from("workshops").update({ status: newStatus }).eq("id", room.session.id);
        room.session.status = newStatus;
        break;
      }

      case "toggle_registration": {
        const newReg = !room.session.registrationOpen;
        await client.from("workshops").update({ registration_open: newReg }).eq("id", room.session.id);
        room.session.registrationOpen = newReg;
        break;
      }

      case "toggle_resubmission": {
        const newResub = !room.session.allowResubmission;
        await client.from("workshops").update({ allow_resubmission: newResub }).eq("id", room.session.id);
        room.session.allowResubmission = newResub;
        break;
      }

      case "set_timer": {
        const seconds = payload?.seconds !== undefined ? payload.seconds : null;
        await client.from("workshops").update({ timer_seconds_remaining: seconds }).eq("id", room.session.id);
        room.session.timerSecondsRemaining = seconds;
        break;
      }

      case "reset_room": {
        await client
          .from("workshops")
          .update({
            current_mission: 1,
            consequences_revealed: false,
            status: "in_progress",
            shared_city_metrics: { ...INITIAL_SHARED_CITY_METRICS },
          })
          .eq("id", room.session.id);
        await client.from("submissions").delete().eq("workshop_id", room.session.id);
        await client
          .from("participants")
          .update({
            decisions: {},
            current_mission: 1,
            has_submitted_current_mission: false,
            score: { ...INITIAL_SCORE },
            city_metrics: { ...INITIAL_CITY_METRICS },
          })
          .eq("workshop_id", room.session.id);
        room.session.currentMission = 1;
        room.session.consequencesRevealed = false;
        room.session.status = "in_progress";
        room.session.sharedCityMetrics = { ...INITIAL_SHARED_CITY_METRICS };
        break;
      }

      default:
        return { success: false, error: `Unknown action: ${action}` };
    }

    return { success: true, session: room.session };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
