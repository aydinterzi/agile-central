import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
export async function POST(req: NextRequest) {
  const { description, status, sprintId, userId } = await req.json();

  const report = await prisma.report.create({
    data: {
      description,
      status: {
        connect: {
          id: status,
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

export async function GET(req: NextRequest) {
  const reports = await prisma.report.findMany({
    include: {
      status: true,
      sprint: true,
      user: true,
    },
  });

  return NextResponse.json(reports);
}
