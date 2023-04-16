import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(request: NextRequest) {
  const holidays = await prisma.holiday.findMany();
  console.log(holidays);
  return NextResponse.json(holidays);
}
