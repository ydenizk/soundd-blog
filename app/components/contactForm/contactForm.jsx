import React from "react";

function ContactForm() {
  return (
    <>
      <form
        className="flex flex-col gap-2 justify-center items-center 
          w-full max-w-[480px] mx-auto     border border-blackk p-2 py-6 "
      >
        <div className=" w-[400px]">
          <input
            className="w-[400px] h-12 p-1 text-blackk text-lg border border-slate-500 rounded outline-none"
            type="text"
            id="name"
            required
            placeholder="Name"
          />
        </div>
        <div>
          <input
            required
            id="email"
            type="email"
            placeholder="Email"
            className="w-[400px] h-12 p-1 text-blackk text-lg border border-slate-500 rounded  outline-none"
          />
        </div>
        <div className="lg:text-center">
          <textarea
            required
            id="message"
            cols="45"
            rows="8"
            placeholder="Message"
            className="rounded text-blackk p-1 outline-none border border-slate-500 "
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full max-w-[400px] rounded bg-slate-600  hover:bg-slate-700 transition duration-300  py-2 tracking-wide text-xl cursor-pointer  text-stone-200"
        >
          Send
        </button>
      </form>
    </>
  );
}

export default ContactForm;
