import { jwtVerify } from "jose";

export async function verifyJwtToken(token) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
    );
    return payload;
  } catch (error) {
    return null;
  }
}
