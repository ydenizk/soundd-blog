import React from "react";
import data from "@/app/maninData";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }  
  return res.json();
};

async function CategoryBtns() {
  const categories = await getData();

  return (
    <div className="w-full flex justify-center items-center my-12">
      <div className="max-w-5xl w-full h-auto  ">
        <h1 className="text-2xl py-8 px-6 tracking-wide font-semibold">
          Most Popular Categories
        </h1>

        <div className="max-w-2xl w-full flex justify-around  ">
          {categories.map((dt) => {
            const { id, catTitle, catName } = dt;
            return (
              <div
                key={id}
                className="flex justify-between  items-center whitespace-nowrap bg-gray-700 transition
                 hover:bg-slate-600 rounded p-2 px-4 sm:px-2 sm:p-1"
              >
                <div className="w-3 h-3  rounded-full mr-2 xs:hidden bg-[#9A4444]"></div>
                <Link
                  href={`/categories/${catName}`}
                  className="text-customWhite text-sm tracking-wide xs:text-xs"
                >
             
                  {catTitle}{" "}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryBtns;
