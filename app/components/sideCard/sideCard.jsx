import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

async function SideCard() {
  const posts = await getData();

  return (
    <div className=" h-auto max-h-[660px] w-84 pl-2 border-l border-slate-300 ">
      <div className="leading-5 mb-6 border-b pb-2 border-b-slate-300">
        <h3 className="text-sm">Check out</h3>
        <h1 className="uppercase font-bold">Top Posts</h1>
      </div>
<>

{posts.slice(0,4).map((post) => {
        return (
          <div
            key={post.id}
            className="flex gap-4 w-full my-2    transition-all
         shadow   duration-500 p-3    "
          >
  
              {post.img === !"" ? (
              <Image
                src={post.img}
                width={135}
                height={60}
                alt="pic"
                className="opacity-80 contrast-200"
              />
            ) : (
              <Image
                src="/sound.jpg"
                width={135}
                height={60}
                alt="pic"
                className="opacity-80 contrast-200"
              />
            )}
            <div className="w-48">
              <h3 className="text-xs mb-1">{post.bandName}</h3>
              <h1 className=" pb-2 text-xs whitespace-nowrap ">
                Posted by:{post.authorEmail.slice(0,5)} 
                <br />
                <span className="font-bold tracking-wide">
                  {post.createdAt.slice(0, 10)}
                </span>
                <Link href={`/posts/${post.id}`}>
                  <AiOutlineArrowRight
                    className="pt-1 text-lg  bg-gray-400 transition
            hover:bg-gray-500 rounded p-1  mt-1 text-white l"
                  />
                </Link>
              </h1>
            </div>
          </div>
        );
      })}
</>
      
    </div>
  );
}

export default SideCard;
