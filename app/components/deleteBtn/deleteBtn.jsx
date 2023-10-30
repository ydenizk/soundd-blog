"use client";

import React from "react";
import { useRouter } from "next/navigation";

function DeleteBtn({ id }) {

const router=useRouter()

  const handleClick = async () => {

    const confirmed = window.confirm("Are you sure to delete this article ");

    if (confirmed) {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        });
        if (res.ok) {
          console.log("Article deleted..");
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
