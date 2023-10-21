import React from "react";
import Image from "next/image";
import data from "@/app/maninData";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

function SideCard() {
  return (
    <div className=" h-auto w-84 pl-2 border-l border-slate-300 ">
      <div className="leading-5 mb-6">
        <h3 className="text-sm">Check out</h3>
        <h1 className="uppercase font-bold">Top Posts</h1>
      </div>

      {data.map((dt) => {
        const { id, details, category, name, color } = dt;
        return (
          <div
            key={id}
            className="flex gap-4 w-full my-2    transition-all
    shadow-lg   duration-500 p-3  "
          >
            <Image
              src={details[1].img}
              width={135}
              height={60}
              className="border-2 rounded opacity-80 "
            />
            <div className="w-48">
              <h3 className="text-xs mb-1">{details[1].title}</h3>
              <h1 className=" pb-2 text-xs  ">
                Posted by:{details[1].author}
                <span className="font-bold tracking-wide">YdKurt</span>{" "}
                {details[1].date}
                <Link href={`/categories/${category}/${details[1].title}`}>
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
    </div>
  );
}

export default SideCard;
