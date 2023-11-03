import { prisma } from "@/utils/prismaDb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req, { params }) {
  try {
    const id = params.id;
    const posts = await prisma.post.findUnique({
      where: { id },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "sth went wrong for post.." }
    );
  }
}




export async function PUT(req, { params }) {
  const session = getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { bandName, publicId, about, desc, img, selectedCategory } =
    await req.json();
  const id = params.id;

  try {
    const post = await prisma.post.update({
      where: { id },
      data: { bandName, publicId, about, desc, img, catName: selectedCategory },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "sth went wrong for EDiting.." },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const session = getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const id = params.id;
  try {
    const post = await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "sth went wrong for DELETE.." },
      { status: 500 }
    );
  }
}
