import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const holiday = await prisma.holiday.delete({
    where: {
      id: +params.id,
    },
  });
  return NextResponse.json(holiday);
}
