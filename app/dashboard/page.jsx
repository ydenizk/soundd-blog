import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { HiPlay } from "react-icons/hi2";

import EditDeleteBtns from "../components/editDeleteBtns/editDeleteBtns";

//import Card from "../components/card/card";

const getData = async (email) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`, {
    cache: "no-store",
  });
  const { posts } = await res.json();
  if (!res.ok) {
    throw new Error("dashboard fetch failed..");
  }

  return posts;
};

async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  let posts = [];

  if (!session) {
    redirect("/sign-in");
  }

  if (email) {
    posts = await getData(email);
  }

  return (
    <div className="w-full  flex justify-center items-center mx-auto">
      <div className="w-full max-w-2xl flex flex-col justify-center items-center my-8 mx-auto">
        <div className=" w-full flex justify-between items-center my-8 mmd2:px-4">
          <h1 className="text-lg font-semibold w-48 text-left border-b border-slate-400">
            My Posts
          </h1>
          <div className="flex justify-center text-sm items-center">
            <Link
              href="/create"
              className="flex whitespace-nowrap justify-center w-5 items-center"
            >
              <div
                className="border-2 text-green-900 border-green-900 rounded-full
               w-[18px] h-[18px] text-center leading-3 transition hover:bg-slate-200"
              >
                +
              </div>
            </Link>
            <p className="ml-1 whitespace-nowrap pt-[1px] font-semibold">
              Create New
            </p>
          </div>
        </div>
        {/* Card START */}
        <div className="w-full justify-center items-center gap-8 mx-auto">
          {posts.length < 1 ? (
            <div className="p-16 flex justify-center items-center">
              <h1 className="font-semıibold uppercase text-xl ">
                you do not have any post yet...{" "}
              </h1>
            </div>
          ) : (
            posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className=" w-[580px] h-auto py-6  mb-8  transition
                     shadow-lg mx-auto   duration-500  sm:w-[480px] xs:w-[400px]"
                 >
                  <h1 className="px-5 pb-2 text-sm  whitespace-nowrap">
                    Posted by:
                    <span className="font-bold tracking-wide  px-1 text-red-700 ">
                   You
                    </span>
                    at {post.createdAt.slice(0, 10)} 

                    <span className="text-right w-full ml-[180px] sm:ml-16 xs:ml-2">
                      <span className="text-green-900 font-semibold">Updated at: </span>
                       {post.updatedAt.slice(0,10)} </span>
                  </h1>
                  <Link href={`/api/posts/${post.id}}`}>
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
                        alt="pic"
                        width={540}
                        height={240}
                        className="mx-auto rounded opacity-90 "
                      />
                    )}
                  </Link>

                  <div className="px-4 pt-2">
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/api/categories/${post.catName}`}
                        className="text-xs uppercase p-1  text-white rounded bg-slate-600"
                      >
                        {post.catName}
                      </Link>
                      <EditDeleteBtns post={post} />
                    </div>

                    <h1 className="mt-4 font-bold text-xl leading-6 ">
                      {post.about}
                    </h1>
                    <p className="text-sm capitalize my-3">
                      {post.desc.slice(0, 200)}...
                      <Link
                        href={`/api/posts/${post.id}}`}
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
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
