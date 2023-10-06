import { jwtVerify } from "jose";

export async function myFunc(token) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decode = await jwtVerify(token, secret);
    return {
      msg: "success",
      data: decode,
    };
  } catch (error) {
    return {
      msg: "failed",
      data: error,
    };
  }
}
