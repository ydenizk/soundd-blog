import React from "react";
import Image from "next/image";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

async function SinglePostPage({ params }) {
  const singlePost = await getData(params.id);

  return (
    <div className="flex justify-content items-center py-16 ">
      <div className="w-full max-w-3xl h-auto  flex flex-col gap-12 items-center mx-auto">
        {singlePost.img ? (
          <Image
            src={singlePost.img}
            width={540}
            height={240}
            className="  object-cover opacity-90 "
            alt="pic"
          />
        ) : (
          <Image
            src="/sound.jpg"
            width={540}
            height={240}
            alt="pic"
            className="opacity-90 contrast-200"
          />
        )}
        <div className="text-center p-4">
          <h1 className="uppercase text-3xl font-semibold tracking-wider">
            {singlePost.bandName}{" "}
          </h1>

          <h3 className="italic font-serif text-lg   font-extralight my-6  ">
            {singlePost.about}
          </h3>

          <h3 className="text-xl">~ </h3>

          <h2 className="font-serif tracking-wider my-6 text-sm">
            by
            <span className="text-base font-serif capitalize ml-1 font-semibold">
              {singlePost.authorEmail.slice(0, 5)}{" "}
            </span>
          </h2>
          <h3 className="text-xl ">~ </h3>

          <p className="my-8 font-light font-serif  tracking-wide leading-7 text-left">
            {singlePost.desc.slice(0, 200)}
          </p>
          <Image src="/single.jpg" width={720} height={514} alt="pic"/>
          <p className="my-8 opacity-90 font-light font-serif  tracking-wide leading-7 text-left">
            {singlePost.desc.slice(200)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
