import { NextRequest, NextResponse } from "next/server";
import {
  registerServerParticipantAsync,
  getOrCreateRoomAsync,
  DEFAULT_PIN,
} from "@/lib/server-state";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pin = DEFAULT_PIN, fullName, teamName } = body;

    const res = await registerServerParticipantAsync(pin, fullName, teamName);
    if (!res.success) {
      return NextResponse.json({ success: false, error: res.error }, { status: 400 });
    }

    const room = await getOrCreateRoomAsync(pin);
    return NextResponse.json({
      success: true,
      participant: res.participant,
      session: room.session,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to join session." },
      { status: 500 }
    );
  }
}
