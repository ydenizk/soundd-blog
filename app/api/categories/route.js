import { NextResponse } from "next/server";
import { prisma } from "@/utils/prismaDb";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();

    return  NextResponse.json(categories)
  } catch (error) {
    console.log(error);
    return  NextResponse.json("sth went wrong...")
  }
}
