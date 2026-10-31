import { NextRequest, NextResponse } from "next/server";
import { createServerRoomAsync } from "@/lib/server-state";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { customPin, title, passcode } = body;

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
        { success: false, error: "Unauthorized: Invalid Presenter Passcode." },
        { status: 401 }
      );
    }

    const room = await createServerRoomAsync(customPin, title);

    return NextResponse.json({
      success: true,
      pin: room.session.pin,
      session: room.session,
      participants: room.participants,
      submissions: room.submissions,
      message: `Room ${room.session.pin} created successfully.`,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to create room." },
      { status: 500 }
    );
  }
}
