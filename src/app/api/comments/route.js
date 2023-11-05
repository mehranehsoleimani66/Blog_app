import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(rec.url);
  const postSlug = searchParams.get("postSlug");
  try {
    const comment = await prisma.comment.findMany({
      where: {
        ...(postSlug && postSlug)
      },
      include: { user: true }
    });

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
