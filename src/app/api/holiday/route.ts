import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request: NextRequest) {
  const holidays = await prisma.holiday.findMany({
    include: {
      user: true,
      sprint: true,
    },
  });
  return NextResponse.json(holidays);
}
