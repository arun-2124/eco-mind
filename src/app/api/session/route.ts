import { NextRequest, NextResponse } from "next/server";
import { getOrCreateRoom, updateServerPresenterAction, DEFAULT_PIN } from "@/lib/server-state";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pin = searchParams.get("pin") || DEFAULT_PIN;
  const room = getOrCreateRoom(pin);

  return NextResponse.json({
    success: true,
    session: room.session,
    participants: room.participants,
    submissions: room.submissions,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pin = DEFAULT_PIN, action, payload, passcode } = body;

    // Check presenter authorization
    const validPasscode = process.env.PRESENTER_PASSCODE || "ecomind2045";
    if (passcode && passcode !== validPasscode) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Invalid Presenter Passcode." },
        { status: 401 }
      );
    }

    const res = updateServerPresenterAction(pin, action, payload);
    if (!res.success) {
      return NextResponse.json({ success: false, error: res.error }, { status: 400 });
    }

    const room = getOrCreateRoom(pin);
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
