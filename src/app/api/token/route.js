import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const { email } = await req.json();
    const getUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ id: getUser.id })
      .setProtectedHeader({
        alg: "HS256",
        typ: "JWT",
      })
      .setIssuedAt()
      .setIssuer("http://localhost:3000/")
      .setExpirationTime("2h")
      .sign(secret);

    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
    });
    return NextResponse.json({
      msg: "success",
      data: {
        token,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      msg: "failed",
      data: error,
    });
  }
}
