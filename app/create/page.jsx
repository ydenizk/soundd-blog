import React from "react";

import Link from "next/link";

function CreateNew() {
  return (
    <div className="flex flex-col justify-center items-center my-16">
      <h1 className="italic font-serif text-2xl   font-semibold my-4 text-">SOUNDD New Music && Reviews</h1>
      <h3 className="text-xl mb-6">~ </h3>
      <div className="max-w-2xl w-full p-4 mx-auto border shadow rounded ">
        <div className="flex justify-between items-center bg-white p-2 tracking-wide font-sans my-8 border ">
          <h1 className="max-w-xs text-slate-700  font-extralight ">
            You can send your post below.After a short editorial check it will
            be published.
          </h1>
          <div className="flex justify-center text-sm items-center">
            <Link
              href="/create"
              className="flex whitespace-nowrap justify-center w-5 items-center"
            >
              <div className="border-2 text-green-900 border-green-900 rounded-full w-[18px] h-[18px] text-center leading-3">
                +
              </div>
            </Link>
            <p className="ml-1 whitespace-nowrap text-blackk   font-semibold">Create New</p>
          </div>
        </div>

        <form className=" w-full">
          <div className="mb-2">
            <input
              type="text"
              placeholder="Title"
              className="w-full border p-1 rounded outline-none text-blackk "
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="About"
              className="w-full  border p-1 outline-none rounded text-blackk "
            />
          </div>
          <div className="mb-2">
        {/*     <input
              type="textarea"
              placeholder="Description"
              className="w-full h-32 border  p-1 rounded text-blackk "
            /> */}
            <textarea className=" p-1 border outline-none rounded text-blackk w-full" placeholder="Description"  rows="8"></textarea>
          </div>
          <div className="w-full flex justify-between items-center ">
            <select className="mb-2 appearance-none outline-none mt-1 bg-slate-300 text-right border rounded p-1 px-4">
              <option value="classic-rock">Classic Rock</option>
              <option value="indie">Indie</option>
              <option value="psychedelic">Psychedelic</option>
              <option value="hevay-metal">Heavy Metal</option>
    
            </select>
            <button className="p-1 px-4 bg-blackk text-slate-100  hover:bg-slate-700 transition  border rounded">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNew;
