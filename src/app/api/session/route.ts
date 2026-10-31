import { NextRequest, NextResponse } from "next/server";
import {
  getOrCreateRoomAsync,
  updateServerPresenterActionAsync,
  touchParticipantPresence,
  DEFAULT_PIN,
} from "@/lib/server-state";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pin = searchParams.get("pin") || DEFAULT_PIN;
  const participantId = searchParams.get("participantId") || undefined;

  touchParticipantPresence(pin, participantId);
  const room = await getOrCreateRoomAsync(pin);

  // Check if caller is presenter via auth header or session cookie
  const validPasscode = process.env.PRESENTER_PASSCODE || "ecomind2045";
  const authHeader = request.headers.get("authorization");
  const cookieSession = request.cookies.get("ecomind_presenter_session")?.value;
  const isPresenter =
    !!cookieSession ||
    (authHeader && (authHeader.includes(validPasscode) || authHeader.length > 20));

  let safeParticipants = room.participants;
  let safeSubmissions = room.submissions;

  // Security & Fair Gameplay: Protect unrevealed choices from being scraped by players
  if (!room.session.consequencesRevealed && !isPresenter) {
    const activeMission = room.session.currentMission;

    safeParticipants = room.participants.map((p) => {
      if (p.id === participantId) return p; // player sees their own decisions
      if (p.decisions && p.decisions[activeMission]) {
        return {
          ...p,
          decisions: {
            ...p.decisions,
            [activeMission]: "[SUBMITTED]" as any,
          },
        };
      }
      return p;
    });

    safeSubmissions = room.submissions.map((s) => {
      if (s.participantId === participantId || s.missionNumber < activeMission) {
        return s;
      }
      return {
        ...s,
        optionKey: "?" as any,
        optionTitle: "Choice Locked (Pending Reveal)",
      };
    });
  }

  return NextResponse.json({
    success: true,
    session: room.session,
    participants: safeParticipants,
    submissions: safeSubmissions,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pin = DEFAULT_PIN, action, payload, passcode } = body;

    // Check presenter authorization strictly on server
    const validPasscode = process.env.PRESENTER_PASSCODE || "ecomind2045";
    const authHeader = request.headers.get("authorization");
    const cookieSession = request.cookies.get("ecomind_presenter_session")?.value;

    const isAuthorized =
      (passcode && passcode === validPasscode) ||
      !!cookieSession ||
      (authHeader && authHeader.includes(validPasscode));

    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Invalid or missing Presenter credentials." },
        { status: 401 }
      );
    }

    const res = await updateServerPresenterActionAsync(pin, action, payload);
    if (!res.success) {
      return NextResponse.json({ success: false, error: res.error }, { status: 400 });
    }

    const room = await getOrCreateRoomAsync(pin);
    return NextResponse.json({
      success: true,
      session: room.session,
      participants: room.participants,
      submissions: room.submissions,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process command." },
      { status: 500 }
    );
  }
}
