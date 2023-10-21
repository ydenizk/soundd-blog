import React from "react";
import data from "@/app/maninData";
import Image from "next/image";
import Link from "next/link";
import { HiPlay } from "react-icons/hi2";
import SideCard from "../sideCard/sideCard";

function Card() {
  return (
    <section className="w-full  bg-white flex justify-center items-center ">
      <div className="w-full max-w-6xl p-6 flex justify-between ">
        {/* main Card..... */}
        <div>
          {data.map((dt) => {
            const { id, details, category, name, color } = dt;
            return (
              <div
                key={id}
                className=" w-[580px] h-auto py-6  mb-8 bg-white transition
                shadow-lg   hover:bg-customWhite  hover:shadow-none duration-500 "
              >
                <h1 className="px-5 pb-2 text-sm ">
                  Posted by:
                  <span className="font-bold tracking-wide capitalize pl-1">
                    {details[0].author}
                  </span >
                  {details[0].date}
                </h1>
                <Link href={`/categories/${category}/${details[0].title}`}>
                  <Image
                    src={details[0].img}
                    width={540}
                    height={240}
                    className="mx-auto rounded opacity-80 "
                  />
                </Link>

                <div className="px-4 pt-2">
                  <Link
                    href={`/categories/${category}`}
                    className={`text-xs uppercase p-1 ${color} text-white rounded`}
                  >
                    {category}
                  </Link>
                  <h1 className="mt-4 font-bold text-xl leading-6 ">
                    {details[0].about}
                  </h1>
                  <p className="text-sm capitalize my-3">
                    {details[0].desc.slice(0, 200)}...
                    <Link
                      href={`/categories/${category}/${details[0].title}`}
                      className="font-semibold transition hover:text-red-700 "
                    >
                      READ MORE
                    </Link>
                  </p>
                  <HiPlay className="text-2xl" />
                  <span></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* main card............. */}

        <SideCard />
      </div>
    </section>
  );
}

export default Card;
