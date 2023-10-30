import React from "react";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="flex justify-center items-center w-full max-w-5xl my-16 mx-auto">
      <div className="flex justify-center p-2 gap-10 mx-auto mmd:gap-6 mmd2:flex-col mmd2:items-center">
        <Image src="/single.jpg" width={540} height={386} />
        <div classname="w-full max-w-sm p-2  ">
          <h1 className="uppercase font-bold text-2xl text-left 
          tracking-wide mb-8  
          ">
            About Us
          </h1>
          <p className="font-serif tracking-wide">
            Soundd is a curious music journal and blog, founded in 2023.
            Showcasing writers from across the globe, in-depth look inside our
            favourite new music, via a combination of reviews, conversations,
            and unique mixes...
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
