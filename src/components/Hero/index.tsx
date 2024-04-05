"use client"

import React from "react"
import Link from "next/link";
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";
import { url } from "inspector";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="overflow-hidden bg-white dark:bg-gray-dark w-full h-full"
        style={{
          pointerEvents: "none", 
          background:`url("/images/hero/Background.jpg")`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
            src="/images/hero/NinjaText.svg"
            alt="Text_Ninja"
            width={700}
            height={200}
            className="z-10 p-10 mt-20"
        />
        <Link href='/game' className="pointer-events-auto cursor-pointer hidden md:block rounded-lg bg-[#FA9F4E] font-bold px-4 py-3 text-base text-[#3F2E4E] hover:text-white transition duration-300 hover:bg-opacity-90 bottom-16 left-8 z-10 absolute">
          Play Now
        </Link>
        <div className='pointer-events-auto cursor-pointer hidden md:block font-bold px-4 py-3 text-base text-[#3F2E4E] hover:text-white transition duration-300 hover:bg-opacity-90 bottom-10 right-8 z-10 absolute'>
          <div className="flex flex-col align-middle justify-center">
            <Image src="images/svgs/chart.svg" alt='' width={81} height={81}/>
            <span className="text-[20px] text-[#FA9F4E] text-center">Chart</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
