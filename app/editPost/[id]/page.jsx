import EditForm from "@/app/components/editForm/editForm";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import React from "react";
import { redirect } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (res.ok) {
    const singlePost = await res.json();
    return singlePost;
  }
};

async function Editpage({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }
  const id = params.id;
  const singlePost = await getData(id);

  return <EditForm singlePost={singlePost} />;
}

export default Editpage;
