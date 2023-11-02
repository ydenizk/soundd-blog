import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiPlay } from "react-icons/hi2";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

import EditDeleteBtns from "../editDeleteBtns/editDeleteBtns";

async function Card({ post }) {
  const session = await getServerSession(authOptions);

  const isEditable = session && session?.user?.email === post.authorEmail;

  return (
    <div className="mmd:flex mmd:flex-col mmd:justify-center mmd:items-center">
      <div
        className=" w-[580px] h-auto py-6  mb-8  transition
                shadow-lg    duration-500  sm:w-[480px] xs:w-[400px]"
          >
        <h1 className="px-5 pb-2 text-sm ">
          Posted by:
          <span className="font-bold tracking-wide capitalize pr-1">
            {post.author.name}
          </span>
          at {post.createdAt.slice(0, 10)}
        </h1>
        <Link href={`${process.env.NEXTAUTH_URL}/posts/${post.id}`}>
          {post.img ? (
            <div className="w-[540px] h-[240px] relative mx-auto sm:w-[470px] xs:w-[390px]">
              <Image
                src={post.img}
                fill
                className="mx-auto rounded  absolute object-cover opacity-90 "
                alt="pic"
              />
            </div>
          ) : (
            <Image
              src="/sound.jpg"
              width={540}
              height={240}
              className="mx-auto rounded opacity-90 "
              alt="pic"
            />
          )}
        </Link>

        <div className="px-4 pt-2">
          <div className="flex justify-between items-center">
            <Link
              href={`/categories/${post.catName}`}
              className="text-xs uppercase p-1  text-white rounded bg-slate-600"
            >
              {post.catName}
            </Link>
            <EditDeleteBtns post={post} />
          </div>

          <h1 className="mt-4 font-bold text-xl leading-6 ">{post.about}</h1>
          <p className="text-sm capitalize my-3">
            {post.desc.slice(0, 200)}...
            <Link
              href={`${process.env.NEXTAUTH_URL}/posts/${post.id}}`}
              className="font-semibold transition hover:text-red-700 "
            >
              READ MORE
            </Link>
          </p>
          <Link
            href={`https://www.youtube.com/results?search_query=${post.bandName}`}
            target="_blank"
            className="
        font-semibold "
          >
            <HiPlay className="text-2xl transition duration-300 hover:text-red-700  " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
