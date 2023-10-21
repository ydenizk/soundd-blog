import React from "react";

function ContactForm() {
  return (
    <>
      <form
        className="flex flex-col gap-4 justify-center items-center 
          w-full max-w-[480px] mx-auto  bg-customWhite  border border-slate-300 p-2 py-6 "
      >
        <div className=" w-[400px]">
          <input
            className="w-[400px] h-12 text-orange-950 text-lg rounded border-none outline-0 "
            type="text"
            id="name"
            required
          />
        </div>
        <div>
          <input
            required
            id="email"
            type="text"
            className="w-[400px] h-12 text-orange-950 text-lg rounded border-none outline-0 "
          />
        </div>
        <div className="lg:text-center">
          <textarea
            required
            id="message"
            cols="39"
            rows="8"
            className="rounded text-orange-950   "
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full max-w-[400px] rounded bg-blackk  hover:bg-slate-700 transition  py-2 tracking-wide text-xl cursor-pointer  text-stone-200"
        >
          Send
        </button>
      </form>
    </>
  );
}

export default ContactForm;
