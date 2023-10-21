import React from "react";
import data from "@/app/maninData";
import Link from "next/link";

function CategoryBtns() {
  return (
    <div className="w-full flex justify-center items-center my-12">
      <div className="max-w-5xl w-full h-auto  ">
        <h1 className="text-2xl py-8 px-6 tracking-wide font-semibold">Most Popular Categories</h1> 

        <div className="max-w-2xl w-full flex justify-around  ">
          {data.map((dt) => {
            const { id, category, name, color } = dt;
            return (
              <div
                key={id}
                className="flex justify-between  items-center whitespace-nowrap bg-gray-700 transition
                 hover:bg-slate-600 rounded p-2 px-4"
              >
                    <div className={`w-3 h-3  rounded-full mr-2 ${color}`}></div>
                <Link href={`/categories/${category}`} className="text-customWhite text-sm tracking-wide"> {name} </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryBtns;
