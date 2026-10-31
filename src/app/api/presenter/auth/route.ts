import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { passcode } = body;

    const validPasscode = process.env.PRESENTER_PASSCODE || "ecomind2045";

    if (!passcode || typeof passcode !== "string" || passcode.trim() !== validPasscode) {
      return NextResponse.json(
        { success: false, error: "Invalid Presenter Access Passcode." },
        { status: 401 }
      );
    }

    // Generate a secure session token
    const token = Buffer.from(`presenter:${Date.now()}:${validPasscode.slice(0, 4)}`).toString("base64");

    const response = NextResponse.json({
      success: true,
      token,
      message: "Presenter authenticated successfully.",
    });

    // Set HttpOnly cookie for session validation
    response.cookies.set("ecomind_presenter_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 12, // 12 hours
      path: "/",
    });

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Authentication error." },
      { status: 500 }
    );
  }
}
