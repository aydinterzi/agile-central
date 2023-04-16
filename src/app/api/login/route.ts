import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.email === "admin@gmail.com" && body.password === "admin") {
    const token = await new SignJWT({ username: body.username })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: "token",
      value: token,
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ success: false });
}
