import { NextResponse } from "next/server";

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
