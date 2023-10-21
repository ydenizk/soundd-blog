import React from "react";

function ContactForm() {
  return (
    <>
      <form
        className="flex flex-col gap-4 justify-center items-center 
          w-full max-w-[480px] mx-auto     border border-blackk p-2 py-6 "
      >
        <div className=" w-[400px]">
          <input
            className="w-[400px] h-12 text-blackk text-lg border border-slate-500 rounded outline-none"
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
            className="w-[400px] h-12 text-blackk text-lg border border-slate-500 rounded  outline-none"
          />
        </div>
        <div className="lg:text-center">
          <textarea
            required
            id="message"
            cols="39"
            rows="8"
            className="rounded text-blackk outline-none border border-slate-500 "
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
