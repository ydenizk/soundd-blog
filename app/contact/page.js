import React from "react";
import ContactForm from "../components/contactForm/contactForm";





function ContactPage() {
  return (
    <main className=" w-full max-w-screen-lg flex justify-center items-center  ">
      <div className="w-full max-w-[520px] p-4 my-16 flex  flex-col justify-center items-center  gap-10 ">
        <div className=" w-full text-left">
          <h1 className="text-3xl font-semibold text-left pl-3  w-full ">
            Please ask or share anything with us...{" "}
          </h1>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}

export default ContactPage;
