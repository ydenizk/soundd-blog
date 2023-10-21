import React from "react";
import data from "@/app/maninData";
import { notFound } from "next/navigation";
import Image from "next/image";

export const generateStaticParams = async () => {
  const paths = data.flatMap((category) =>
    category.details.map((n) => ({
      title: n.title.toString(),
    }))
  );

  return paths;
};

function ProductPageTitle({ params }) {
  const title = params.title;
  const singleProduct = data
    .flatMap((category) => category.details)
    .find((n) => n.title.toString() === title);
  if (!singleProduct) {
    notFound();
  }

  return (
    <div className="flex justify-content items-center py-16 bg-white">
  
      
            <div className="w-full max-w-3xl h-auto  flex flex-col gap-12 items-center mx-auto">
        <Image
          src={singleProduct.img}
          width={540}
          height={240}
          alt="resim"
          className="opacity-80"
        />
        <div className="text-center p-4">
          <h1 className="uppercase text-3xl font-semibold tracking-wider">
            {" "}
            {singleProduct.title}{" "}
          </h1>

          <h3 className="italic font-serif text-lg   font-extralight my-6  ">
            {singleProduct.about}
          </h3>

          <h3 className="text-xl">~ </h3>

          <h2 className="font-serif tracking-wider my-6">
            {" "}
            {singleProduct.author}{" "}
          </h2>
          <h3 className="text-xl ">~ </h3>

          <p className="my-8 font-light font-serif text-blackk tracking-wide leading-7 text-left">
            {singleProduct.desc}
          </p>
          <Image src="/single.jpg" width={720} height={514} />
          <p className="my-8 opacity-90 font-light font-serif text-blackk tracking-wide leading-7 text-left">
            {singleProduct.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPageTitle;
