import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
export async function GET(request: NextRequest) {
  const statuses = await prisma.status.findMany();
  return NextResponse.json(statuses);
}
