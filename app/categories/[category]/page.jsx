import React from "react";
import data from "@/app/maninData";
import Image from "next/image";
import Link from "next/link";
import { HiPlay } from "react-icons/hi2";
import SideCard from "@/app/components/sideCard/sideCard";

export const generateStaticParams = async () => {
  const n = data.map((d) => ({ id: d.category.toString() }));
  return n;
};

function CategoryPage({ params }) {
  const id = params.category;
  const singleCategory = data.find((d) => d.category.toString() === id);
  if (!singleCategory) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center py-10 ">
      <div className="w-full max-w-6xl">
        <div className="  border-b border-blackk mb-10">
          <h1
            className={`w-full max-w-6xl text-center mb-10 text-white   
        py-2 tracking-wide uppercase text-lg font-bold rounded mx-auto ${singleCategory.color}`}
          >
       
            {params.category}{" "}
          </h1>
          <div className="flex justify-center items-start gap-10 my-16 mx-4">
            <Image
              src={`${singleCategory.details[1].img}`}
              width={540}
              height={240}
              alt="pic"
              className="opacity-70 contrast-200"
            />
            <h1
              className="tracking-wide capitalize font-bold  mt-8 
          text-4xl"
            >
       
              {singleCategory.details[1].about}...{" "}
            </h1>
          </div>
        </div>

        {/* alt taraf */}
        <div className="flex justify-between py-12  px-6">
          <div>
            {singleCategory.details.map((single) => {
              const { id, date, author, title, about, desc, img } = single;
              return (
                <div
                  key={id}
                  className=" w-[580px] h-auto py-6 mb-8   
         transition-all shadow-lg   duration-500 "
                >
                  <h1 className="px-5 pb-2 text-sm ">
                    Posted by:
                    <span className="font-bold tracking-wide capitalize px-1">
                      {single.author}
                    </span>
                    {single.date}
                  </h1>
                  <Link href={`/categories/${params.category}/${single.title}`}>
                    <Image
                      src={single.img}
                      width={540}
                      height={240}
                      className="mx-auto rounded opacity-80   "
                    />
                  </Link>

                  <div className="px-4 pt-2">
                    <h1 className="mt-4 font-bold text-xl leading-6 ">
                      {single.about}
                    </h1>
                    <p className="text-sm capitalize my-3">
                      {single.desc.slice(0, 200)}...
                      <Link
                        href={`/categories/${params.category}/${single.title}`}
                        className="font-semibold transition hover:text-red-700 "
                      >
                        READ MORE
                      </Link>
                    </p>
                    <HiPlay className="text-2xl" />
                  </div>
                </div>
              );
            })}
          </div>

          <SideCard />
        </div>

        {/* alt taraf END */}
      </div>
    </div>
  );
}

export default CategoryPage;
