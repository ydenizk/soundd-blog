"use client";

import React, { useEffect, useState } from "react";
import { banner } from "./data.js";

import Link from "next/link";

function Slider() {
  const [imgIndex, setImgIndex] = useState(0);

  const prev = () => {
    setImgIndex((index) => {
      if (index === 0) return banner.length - 1;

      return index - 1;
    });
  };
  const next = () => {
    setImgIndex((index) => {
      if (index === banner.length - 1) return 0;
      return index + 1;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      next();
    }, 7000);
  }, [imgIndex]);

  return (
    <div className="flex flex-col justify-center items-center py-8 ">
      <div
        className="w-full max-w-6xl flex items-center px-6 
       relative overflow-hidden h-[420px]"
      >
        {banner.map((dt) => {
          const { id, title, desc, img, lnk, genre } = dt;

          return (
            <div
              className="flex justify-center items-center w-full max-w-6xl  gap-8 mx-auto px-6  h-96   
              transition-transform duration-500 "
              key={id}
              style={{ transform: `translateX(-${imgIndex * 100}%)` }}
            >
              <div
                className="bg-cover bg-center w-[590px] h-[380px] flex-2 mmd:flex-1 "
                style={{ backgroundImage: `url(${img})` }}
              ></div>

              <div className=" w-[540px] p-2 flex-1 sm:hidden ">
                <h1 className="text-2xl font-extrabold  uppercase tracking-wide  ">
                  {title}{" "}
                </h1>
                <p className=" w-full tracking-wide font-light pr-4 my-2 mb-6 ">
                  {desc}{" "}
                </p>

                <Link
                  href={lnk}
                  className="  p-3  bg-slate-700 transition hover:bg-slate-600 
                  duration-300 text-customWhite"
                >
                  Go to {`${genre}`}{" "}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="  flex -bottom-10 right-16   text-blackk  z-10">
        {banner.map((b, inx) => {
          return (
            <button
              onClick={() => setImgIndex(inx)}
              key={inx}
              className={`text-xl mx-1 w-3 h-3 
            rounded-full  transition duration-300 ${
              inx === imgIndex ? "bg-slate-700" : "bg-slate-500"
            }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export {Slider}
