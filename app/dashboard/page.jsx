import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import Link from "next/link";
//import Card from "../components/card/card";

async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="w-full max-w-2xl flex flex-col justify-center items-center my-8 ">
        <div className=" w-full flex justify-between items-center my-8">
          <h1 className="text-lg font-semibold w-48 text-left border-b border-slate-400">
            My Posts
          </h1>
          <div className="flex justify-center text-sm items-center">
            <Link
              href="/create"
              className="flex whitespace-nowrap justify-center w-5 items-center"
            >
              <div
                className="border-2 text-green-900 border-green-900 rounded-full
               w-[18px] h-[18px] text-center leading-3 transition hover:bg-slate-200"
              >
                +
              </div>
            </Link>
            <p className="ml-1 whitespace-nowrap pt-[1px] font-semibold">
              Create New
            </p>
          </div>
        </div>

        <div>carddd</div>
      </div>
    </div>
  );
}

export default DashboardPage;
