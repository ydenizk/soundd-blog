import { NextResponse } from "next/server";
import { prisma } from "@/utils/prismaDb";

export async function GET(req, { params }) {
  try {
    const catName = params.catName;
    const posts = await prisma.category.findUnique({
      where: { catName },
      include: {
        posts: { include: { author: true }, orderBy: { createdAt: "desc" } },
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "sth went wrong for post catName and id." }
    );
  }
}
 