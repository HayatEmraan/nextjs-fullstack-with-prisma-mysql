import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function DELETE() {
  try {
    const params = new URL(req.url).searchParams;
    const id = params.get("id");
    const deleteOne = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({
      msg: "success",
      data: deleteOne,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      data: error,
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const insert = await prisma.user.create({
      data: {
        ...body,
      },
    });
    return NextResponse.json({
      msg: "success",
      data: insert,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}
