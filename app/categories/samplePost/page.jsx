import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SamplePost() {
  return (
    <div className="flex justify-content items-center py-16 ">
    <div className="w-full max-w-3xl h-auto  flex flex-col gap-12 items-center mx-auto">
     
    <div className="w-[540px] h-[240px] relative mx-auto sm:w-[470px] xs:w-[390px]">
                <Image
                  src="/single.jpg"
                 fill
                  className="mx-auto rounded object-cover opacity-90 absolute "
                  alt="pic"
                />
              </div>
 
      <div className="text-center p-4">
        <h1 className="uppercase text-3xl font-semibold tracking-wider">
      Roots of Rock&apos;n Roll
        </h1>

        <h3 className="italic font-serif text-lg   font-extralight my-6  ">
        A short look back to the roots of rock music
        </h3>

        <h3 className="text-xl">~ </h3>

        <h2 className="font-serif tracking-wider my-6 text-sm">
          by
          <span className="text-base font-serif capitalize ml-1 font-semibold">
          John Rokossky
          </span>
        </h2>
        <h3 className="text-xl ">~ </h3>

        <p className="my-8 font-light font-serif  tracking-wide leading-7 text-left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
                qui atque. At reprehenderit itaque Arcu felis bibendum ut tristique et egestas quis ipsum. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Et malesuada fames ac turpis egestas. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Pellentesque massa placerat duis ultricies lacus 
                sed turpis. Sed lectus vestibulum mattis ullamcorper velit sed Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
                qui atque. At reprehenderit itaque Arcu
        </p>
        <Image src="/single.jpg" width={720} height={514} alt='pic' />
        <p className="my-8 opacity-90 font-light font-serif  tracking-wide leading-7 text-left">
        Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
                qui atque. At reprehenderit itaque Arcu felis bibendum ut tristique et egestas quis ipsum. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Et malesuada fames ac turpis egestas. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Pellentesque massa placerat duis ultricies lacus 
                sed turpis. Sed lectus vestibulum mattis ullamcorper velit sed At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Duis at consectetur lorem donec massa sapien faucibus et. Lectus mauris ultrices eros in cursus. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.
        </p>
      </div>
    </div>
  </div>
  )
}

export default SamplePost