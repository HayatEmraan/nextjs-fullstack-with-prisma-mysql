import { NextResponse } from "next/server";
import { myFunc } from "./helper/tokendecode";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/")) {
    const decode = await myFunc(req.cookies.get("token")?.value);
    if (decode.msg === "success") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config = {
  matcher: ["/"],
};
