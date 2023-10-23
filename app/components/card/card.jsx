import React from "react";
//import data from "@/app/maninData";
import Image from "next/image";
import Link from "next/link";
import { HiPlay } from "react-icons/hi2";
//import SideCard from "../sideCard/sideCard";

function Card({ dt }) {
  return (
    <div>
      <div
        className=" w-[580px] h-auto py-6  mb-8  transition
                shadow-lg    duration-500 "
      >
        <h1 className="px-5 pb-2 text-sm ">
          Posted by:
          <span className="font-bold tracking-wide capitalize pl-1">
            {dt.details[0].author}
          </span>
          {dt.details[0].date}
        </h1>
        <Link href={`/categories/${dt.category}/${dt.details[0].url}`}>
          {dt.details[0].img && (
            <Image
              src={dt.details[0].img}
              width={540}
              height={240}
              className="mx-auto rounded opacity-80 "
            />
          )}
        </Link>

        <div className="px-4 pt-2">
          <div className="flex justify-between items-center">
            <Link
              href={`/categories/${dt.category}`}
              className={`text-xs uppercase p-1 ${dt.color} text-white rounded`}
            >
              {dt.category}
            </Link>
 
            {/* <div className="flex justify-center items-center gap-2">
              <Link
                href="/editCard"
                className="text-xs capitalize p-1 bg-blue-500 rounded text-white"
              >
                Edit
              </Link>
              <Link
                href="/deleteCard"
                className="text-xs capitalize p-1 bg-red-700 rounded text-white"
              >
                Delete
              </Link>
            </div> */}
          </div>

          <h1 className="mt-4 font-bold text-xl leading-6 ">
            {dt.details[0].about}
          </h1>
          <p className="text-sm capitalize my-3">
            {dt.details[0].desc.slice(0, 200)}...
            <Link
              href={`/categories/${dt.category}/${dt.details[0].url}`}
              className="font-semibold transition hover:text-red-700 "
            >
              READ MORE
            </Link>
          </p>
          <Link
            href={`https://www.youtube.com/results?search_query=${dt.details[0].url}`}
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
