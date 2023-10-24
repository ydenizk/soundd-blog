import React from "react";
import { getServerSession } from "next-auth/next";
import CreateCard from "../components/createCard/createCard";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function CreateNew() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  return <CreateCard />;
}

export default CreateNew;
