"use client";

import React from "react";
import { useRouter } from "next/navigation";

function DeleteBtn({ id }) {

const router=useRouter()

  const handleClick = async () => {

    /* cloudinary delete kısmı */

const deleteImg=async (publicId)=>{
  const res=await fetch("/api/removeImage",{
method:"POST",
headers: { "Content-type": "application/json" },
body: JSON.stringify({ publicId }),


  })

}

    /* cloudinary delete END */

    const confirmed = window.confirm("Are you sure to delete this article ");

    if (confirmed) {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        });
        if (res.ok) {
          console.log("Article deleted..");
          //asağıgısı cloudinary
          const post=await res.json()
          const {publicId}=post
          await deleteImg(publicId)
          router.refresh()
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <button
        className="text-xs capitalize p-1 bg-red-700 rounded text-white"
        onClick={handleClick}
      >
        Delete
      </button>
    </>
  );
}

export default DeleteBtn;
