import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
export async function POST(req: NextRequest) {
  const { description, statusId, sprintId, userId } = await req.json();
  console.log(description, statusId, sprintId, userId);
  const report = await prisma.report.create({
    data: {
      description,
      status: {
        connect: {
          id: statusId,
        },
      },
      sprint: {
        connect: {
          id: sprintId,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return NextResponse.json(report);
}
