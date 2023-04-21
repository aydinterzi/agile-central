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

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const holiday = await prisma.holiday.create({
    data: {
      holidayDate: body.holidayDate,
      user: {
        connect: {
          id: body.userId,
        },
      },

      sprint: {
        connect: {
          id: body.sprintId,
        },
      },
    },
  });
  return NextResponse.json(holiday);
}
