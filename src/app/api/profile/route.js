import { myFunc } from "@/helper/tokendecode";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req, res) {
  try {
    const decode = await myFunc(req.cookies.get("token")?.value);
    const id = decode?.data?.payload?.id;
    const retrieve = await prisma.profile.findUnique({
      where: {
        user: {
          id: id,
        },
      },
    });
    return NextResponse.json({
      msg: "success",
      data: retrieve,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      data: error,
    });
  }
}

export async function POST(req, res) {
  try {
    const decode = await myFunc(req.cookies.get("token")?.value);
    const id = decode?.data?.payload?.id;
    const insert = await prisma.profile.create({
      data: {
        ...req.body,
        user: {
          connect: {
            id: id,
          },
        },
      },
    });
    return NextResponse.json({
      msg: "success",
      data: insert,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      data: error,
    });
  }
}

export async function PATCH(req, res) {
  try {
    const params = new URL(req.url).searchParams;
    const id = params.get("id");
    const updateOne = await prisma.profile.update({
      where: {
        id: id,
      },
      data: {
        ...req.body,
      },
    });
    return NextResponse.json({
      msg: "success",
      data: updateOne,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      data: error,
    });
  }
}

export async function DELETE(req, res) {
  try {
    const params = new URL(req.url).searchParams;
    const id = params.get("id");
    const deleteOne = await prisma.profile.delete({
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
