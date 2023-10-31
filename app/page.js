import Slider from "./components/slider/slider";
import CategoryBtns from "./components/categoryBtns/categoryBtns";
import Card from "./components/card/card";
import Link from "next/link";
import Image from "next/image";
import { HiPlay } from "react-icons/hi2";

import SideCard from "./components/sideCard/sideCard";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

export default async function Home() {
  const posts = await getData();

  return (
    <main className="mx-auto overflow-x-hidden ">
      <Slider />
      <CategoryBtns />
      <section className="w-full  flex justify-between  max-w-6xl mx-auto mmd:items-center  ">
        <div className="w-full max-w-6xl p-6 flex flex-col justify-center  ">
          {/* stable single post.. */}

          <div
            className=" w-[580px] h-auto py-6  mb-8  transition
                shadow-lg    duration-500  sm:w-[480px] xs:w-[400px]"
          >
            <h1 className="px-5 pb-2 text-sm ">
              Posted by:
              <span className="font-bold tracking-wide capitalize pr-1">
                John Rokossky
              </span>
              at 15-10-2023
            </h1>
            <Link href="/categories/samplePost">
              <div className="w-[540px] h-[240px] relative mx-auto sm:w-[470px] xs:w-[390px]">
                <Image
                  src="/single.jpg"
                 fill
                  className="mx-auto rounded object-cover opacity-90 absolute "
                  alt="pic"
                />
              </div>
            </Link>

            <div className="px-4 pt-2">
              <div className="flex justify-between items-center">
                <Link
                  href="/categories/classic-rock"
                  className="text-xs uppercase p-1  text-white rounded bg-slate-600"
                >
                  Classic Rock
                </Link>
              </div>

              <h1 className="mt-4 font-bold text-xl leading-6 ">
                A short look back to the roots of rock music
              </h1>
              <p className="text-sm capitalize my-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
                qui atque. At reprehenderit itaque
                <Link
                  href="/categories/samplePost"
                  className="font-semibold transition hover:text-red-700 "
                >
                  ...READ MORE
                </Link>
              </p>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                className="
        font-semibold "
              >
                <HiPlay className="text-2xl transition duration-300 hover:text-red-700  " />
              </Link>
            </div>
          </div>

          {/* stable single post END.... */}
          {posts.slice(0, 4).map((post) => {
            return <Card post={post} key={post.id} />;
          })}
        </div>
        <SideCard />
      </section>
    </main>
  );
}
