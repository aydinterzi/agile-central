import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user || user.password !== password) {
      return NextResponse.json({ success: false });
    }

    const token = await new SignJWT({ email })
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
  } catch (err) {
    return NextResponse.json({ success: false });
  }
}
