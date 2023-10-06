import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(req, res) {
  const headerList = new Headers(req.headers);
  const cookie = cookies();
  const getCookie = cookie.get("Cookie");
  const token = headerList.get("token");
  return NextResponse.json({
    msg: "success",
    data: {
      name: "hayat",
      header: token,
      getCookie,
    },
  });
}

export async function POST(req, res) {
  //   const body = await req.json();
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  return NextResponse.json({
    msg: "success",
    data: {
      name,
      email,
    },
  });
}
