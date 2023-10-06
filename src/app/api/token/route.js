import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT({ email: "hayat@gmail.com" })
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setIssuer("http://localhost:3000/")
    .setExpirationTime("2h")
    .sign(secret);

  cookies().set({
    name: "token2",
    value: token,
    httpOnly: true,
    path: "/",
  });

  return NextResponse.json(
    {
      msg: "success",
      data: {
        token,
      },
    }
    // {
    //   status: 200,
    //   headers: {
    //     "Set-Cookie": "token=" + token,
    //   },
    // }
  );
}
