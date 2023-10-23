import React from "react";
import Image from "next/image";

function SignInPage() {
  return (
    <div className="flex justify-center items-center py-24 ">
      <div className="w-full max-w-xs  p-2 flex flex-col justify-center items-center">
        <h1 className="mb-2 font-bold tracking-wide">Sign In</h1>
        <button className="flex justify-evenly border-slate-400 items-center border m-2 p-2 w-full rounded-full">
          <Image
            src="/github.png"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1>Sing in with Github </h1>
        </button>
        <button className="flex justify-evenly  border-slate-400  items-center border m-2 mb-6 p-2 w-full rounded-full">
          <Image
            src="/google.png"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1>Sing in with Github </h1>
        </button>

        <form className="w-full">
          <div className="mb-2 w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full border  border-slate-400  outline-none p-2  text-blackk "
            />
          </div>
          <div className="mb-2 w-full">
            <input
              type="Password"
              placeholder="About"
              className="w-full  border outline-none p-2  border-slate-400  text-blackk "
            />
          </div>
        </form>
        <button className="w-full p-2 font-semibold text-white transition hover:bg-slate-800  border-slate-400  tracking-wide bg-blackk">
          Login
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
