import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DeleteBtn from "../deleteBtn/deleteBtn";

async function  EditDeleteBtns({post}) {

const session = await getServerSession(authOptions)
const isEditable = session && session?.user?.email === post.authorEmail;

  return (
    <div>

        {isEditable && (
      <div className="flex justify-center items-center gap-2">
        <Link
          href={`/editPost/${post.id}`}
          className="text-xs capitalize p-1 bg-blue-500 rounded text-white"
        >
          Edit
        </Link>
  <DeleteBtn id={post.id} />
      </div> 
    )}
    </div>
  
  );
}

export default EditDeleteBtns;
