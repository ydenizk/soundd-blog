"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";

function CreateCard() {
  const [bandName, setBandName] = useState("");
  const [about, setAbout] = useState("");
  const [desc, setDesc] = useState("");

  const [img, setImg] = useState("");
  const [publicId, setPublicId] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("api/categories");

      const catNames = await res.json();
      setCategories(catNames);
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bandName || !desc) {
      setError("Band name and desciption are required !!");
      return;
    }

    try {
      const res = await fetch("api/posts/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          bandName,
          about,
          desc,
          selectedCategory,
          img,
          publicId,
        }),
      });

      if (res.ok) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* Clodinary setup .... */

  const handleUpload = (result) => {
    const imgData = result.info;

    if ("secure_url" in imgData && "public_id" in imgData) {
      const url = imgData.secure_url;
      const public_id = imgData.public_id;
      setImg(url);
      setPublicId(public_id);
      console.log("url:", url);
      console.log("public_id:", public_id);
    }
  };

  const handleRemove = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/removeImage", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ publicId }),
      });
      if (res.ok) {
        setImg("");
        setPublicId("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* Clodinary END .... */

  return (
    <div className="flex flex-col justify-center items-center my-16">
      <h1 className="italic font-serif text-2xl   font-semibold my-4 ">
        SOUNDD New Music && Reviews
      </h1>
      <h3 className="text-xl mb-6">~ </h3>
      <div className="max-w-2xl w-full p-4 mx-auto border shadow rounded ">
        <div
          className="flex justify-between items-center bg-white p-2 tracking-wide font-sans
         my-8 border "
        >
          <h1 className="max-w-xs text-slate-700  font-extralight xs:pr-1">
            You can send your post below.After a short editorial check it will
            be published.
          </h1>
          <div className="flex justify-center text-sm items-center">
            <Link
              href="/create"
              className="flex whitespace-nowrap justify-center w-5 items-center"
            >
              <div
                className="border-2 text-green-900 border-green-900 rounded-full w-[18px] h-[18px] 
              text-center leading-3"
              >
                +
              </div>
            </Link>
            <p className="ml-1 whitespace-nowrap text-blackk   font-semibold">
              Create New
            </p>
          </div>
        </div>

        <form className=" w-full" onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Specify the related band name in your article "
              className="w-full border p-1 rounded outline-none text-blackk "
              //value={bandName}
              onChange={(e) => setBandName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Title"
              className="w-full  border p-1 outline-none rounded text-blackk "
              //value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <textarea
              className=" p-1 border outline-none rounded text-blackk w-full"
              placeholder="Description"
              rows="8"
              //value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          {/* clodinary upload part */}

          <CldUploadButton
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            className=" mb-2 w-full h-48 text-slate-700 
outline-none font-semibold bg-slate-300 py-2 rounded relative"
            onUpload={handleUpload}
          >
            Upload Image
            {img && (
              <Image
                src={img}
                fill
                className="absolute object-cover rounded "
                alt={bandName}
              />
            )}
          </CldUploadButton>
          {publicId && (
            <button
              onClick={handleRemove}
              className="p-1 px-2 mb-2 text-slate-100 text-sm font-extralight 
   bg-red-500 transition   rounded"
            >
              Remove Image
            </button>
          )}

          {/* clodinary upload part END*/}
          <div className="w-full flex justify-between items-center ">
            <select
              className="mb-2 appearance-none outline-none mt-1 bg-slate-300 text-right
              rounded p-1 px-4 text-slate-600"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select A Category</option>
              {categories.map((d) => (
                <option value={d.catName} key={d.id}> {d.catTitle} </option>
              ))}
            </select>
            <button
              type="submit"
              className="p-1 px-4 bg-blackk text-slate-100  hover:bg-slate-700 transition  border rounded"
            >
              Send
            </button>
          </div>
          {error && (
            <div className="text-red-700 text-sm   text-left"> {error} </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateCard;
