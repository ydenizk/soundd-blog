import React from "react";
import SideCard from "@/app/components/sideCard/sideCard";
import Image from "next/image";
import Link from "next/link";
import { HiPlay } from "react-icons/hi2";
import EditDeleteBtns from "@/app/components/editDeleteBtns/editDeleteBtns";

const getData = async (catName) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/categories/${catName}`,
    { cache: "no-store" }
  );

  if (res.ok) {
    const categories = await res.json();
    const posts = categories.posts;
    return posts;
  }
};

async function CategoryPage({ params }) {
  const category = params.catName;
  const posts = await getData(category);

  return (
    <div className="flex justify-center items-center py-10 ">
      <div className="w-full max-w-6xl">
        <div className="  border-b border-blackk mb-10">
          <h1
            className="w-full max-w-6xl text-center mb-10 text-white   
            py-2 tracking-wide uppercase text-lg font-bold rounded mx-auto  bg-[#9A4444]"
          >
            {category}
          </h1>
          <div className="flex justify-center items-start gap-10 my-16 mx-4">
            {posts.length > 0 ? (
              <>
                {posts[0].img ? (
                  <Image
                    src={posts[0].img} /* src="/sound.jpg" */
                    width={540}
                    height={240}
                    alt="pic"
                    className="opacity-70 contrast-200"
                  />
                ) : (
                  <Image
                    src="/sound.jpg" /* src="/sound.jpg" */
                    width={540}
                    height={240}
                    alt="pic"
                    className="opacity-70 contrast-200"
                  />
                )}
                <h1
                  className="tracking-wide capitalize font-bold  mt-8 
               text-4xl"
                >
                  {posts[0].about}...
                </h1>
              </>
             ) : (
              <>
                <Image
                  src="/sound.jpg"
                  width={540}
                  height={240}
                  alt="pic"
                  className="opacity-70 contrast-200"
                />
                <h1
                  className="tracking-wide capitalize font-bold  mt-8 
              text-4xl"
                >
                  {` New Music news and album  Reviews  about ${category} genre`}
                </h1>
              </>
            )}
          </div>
        </div>

        {/* alt taraf */}
        <div className="flex justify-between py-12  px-6">
          <div>
{posts.length>0 ? (posts.map((post) => {
              const {
                id,
                bandName,
                about,
                desc,
                img,
                catName,
                author,
                createdAt,
                publicId,
              } = post;
              return (
                <div
                  key={id}
                  className=" w-[580px] h-auto py-6 mb-8   
                     transition-all shadow-lg   duration-500 "
                >
                  <h1 className="px-5 pb-2 text-sm ">
                    Posted by:
                    <span className="font-bold tracking-wide capitalize px-1">
                      {post.author.name}
                    </span>
                    {createdAt.slice(0, 10)}
                  </h1>
                  <Link href={`/posts/${id}`}>
                    {img === !"" ? (
                      <Image
                        src={img}
                        width={540}
                        height={240}
                        className="mx-auto rounded opacity-80 "
                        alt="pic"
                      />
                    ) : (
                      <Image
                        src="/sound.jpg"
                        width={540}
                        height={240}
                        className="mx-auto rounded opacity-80 "
                        alt="pic"
                      />
                    )}
                  </Link>
                  <div className="px-4 pt-2 flex justify-between items-center">
                    <button className="text-xs uppercase p-1  text-white rounded bg-slate-600">
                        {catName}
                    </button>
                    <EditDeleteBtns post={post} />
                  </div>

                  <div className="px-4 pt-2">
                    <h1 className="mt-4 font-bold text-xl leading-6 ">
                      {about}
                    </h1>
                    <p className="text-sm capitalize my-3">
                      {desc.slice(0, 200)}...
                      <Link
                        href={`/posts/${id}`}
                        className="font-semibold transition hover:text-red-700 "
                      >
                        READ MORE
                      </Link>
                    </p>
                    <HiPlay className="text-2xl" />
                  </div>
                </div>
              );
            })


):(
<div className="w-full ">
<h1 className="font-semibold text-xl capitalize text-center tracking-wide text-slate-500">No article available about this genre yet..</h1>
    </div>
)

}

            








          </div>

          <SideCard />
        </div>

        {/* alt taraf END */}
      </div>
    </div>
  );
}

export default CategoryPage;
