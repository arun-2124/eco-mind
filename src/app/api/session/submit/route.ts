import { NextRequest, NextResponse } from "next/server";
import {
  submitServerDecisionAsync,
  getOrCreateRoomAsync,
  DEFAULT_PIN,
} from "@/lib/server-state";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pin = DEFAULT_PIN, participantId, missionNumber, optionKey } = body;

    if (!participantId || !missionNumber || !optionKey) {
      return NextResponse.json(
        { success: false, error: "Missing required parameters (participantId, missionNumber, optionKey)." },
        { status: 400 }
      );
    }

    const res = await submitServerDecisionAsync(pin, participantId, Number(missionNumber), optionKey);
    if (!res.success) {
      return NextResponse.json({ success: false, error: res.error }, { status: 400 });
    }

    const room = await getOrCreateRoomAsync(pin);
    return NextResponse.json({
      success: true,
      participant: res.participant,
      session: room.session,
      submissionsCount: room.submissions.filter((s) => s.missionNumber === Number(missionNumber)).length,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to submit decision." },
      { status: 500 }
    );
  }
}
