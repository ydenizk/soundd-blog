import { prisma } from "@/utils/prismaDb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./../auth/[...nextauth]/route";


export async function POST(req) {
  const session =await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { bandName, publicId, about, desc, img, selectedCategory } =
    await req.json();

  //const authorEmail = "kartal@yahoo.com"; //geçici yazdık,sonra session dan gelecek.
  const authorEmail=session?.user?.email

  if (!bandName || !desc) {
    return NextResponse.json(
      { error: "bandName and description is required..." },
      { status: 500 }
    );
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        bandName,
        publicId,
        about,
        desc,
        img,
        catName: selectedCategory,
        authorEmail,
      },
    });
    console.log("Post ok..");
    return NextResponse.json(newPost);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "can not create post..." });
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany(/* {
      include: { author: { select: { name: true } } }, //user dakı name i alıoruz ,author user a bağlıydı
      orderBy: { createdAt: "desc" }, //bunu post ları yeniden eskıye göre sıralamsı için yazdık
    } */);
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json("sth went wrong about posts...", { status: 500 });
  }
}
