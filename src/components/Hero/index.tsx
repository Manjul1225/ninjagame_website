"use client"

import React, {useEffect} from "react"
import { Container,ExploreBtn, SectionH2 } from "../Styles/Section";
import mountain6 from "/images/background/Background6.png";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  useEffect(() => {
    let mountain = document.getElementsByClassName("mountain") as HTMLCollectionOf<HTMLElement>;

    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      if(mountain.length >= 4){
        mountain[4].style.top = value * -0.2 + "px";
        mountain[3].style.top = value * -0.4 + "px";
        mountain[2].style.top = value * -0.6 + "px";
        mountain[1].style.top = value * -0.8 + "px";
        mountain[0].style.top = value * -1 + "px";
      }
    });
  });

  return (
    <>

      <div id="home" className="flex flex-col">
        <Container>
          <Image src="/images/background/Background1.png" width={2000} height={2000} id="mountain1" alt="" className="mountain z-50 w-full h-full"/>
          <Image src="/images/background/Background2.png" width={2000} height={2000} id="mountain2" alt="" className="mountain z-40 w-full h-full"/>
          <Image src="/images/background/Background3.png" width={2000} height={2000} id="mountain3" alt="" className="mountain z-30 w-full h-full"/>
          <Image src="/images/background/Background4.png" width={2000} height={2000} id="mountain4" alt="" className="mountain z-20 w-full h-full"/>
          <Image src="/images/background/Background5.png" width={2000} height={2000} id="mountain5" alt="" className="mountain z-10 w-full h-full"/>
          <Image src="/images/background/Background6.png" width={2000} height={2000} id="mountain6" alt="" className="z-0 w-full h-full"/>
        </Container>
    
        <Image src="/images/hero/NinjaText.svg"
            alt="Text_Ninja"
            width={700}
            height={200}
            className="z-10 p-10 mt-20 absolute"
        />
        <Link href='/game' className="pointer-events-auto cursor-pointer rounded-lg bg-[#FA9F4E] font-bold px-4 py-3 text-[12px] lg:text-[16px] text-[#3F2E4E] hover:text-white transition duration-300 hover:bg-opacity-90 bottom-16 md:bottom-16 left-8 z-[70] fixed">
          Play Now
        </Link>
        <div className='pointer-events-auto cursor-pointer font-bold px-4 py-3 text-base text-[#3F2E4E] hover:text-white transition duration-300 hover:bg-opacity-90 bottom-4 md:bottom-10 right-2 md:right-8 z-[70] fixed'>
          <div className="flex flex-col align-middle justify-center">
            <Image src="images/svgs/chart.svg" alt='' width={81} height={81}/>
            <span className="text-[12px] lg:text-[20px] text-[#FA9F4E] text-center">Chart</span>
          </div>
        </div>
        <div className="m-0 px-4 flex flex-col justify-center items-center gap-6 mb-20 z-[60]">
          <p className="text-[#FA9F4E] text-[16px] lg:text-[32px] font-bold">How To Play the Game</p>
          <p className="text-white text-[12px] lg:text-[24px] lg:mx-[120px] md:mx-[60px] mx-[10px]">
            1.  Players will have to interact with this red box/structure/booth.<br />
            2.  This opens a window that shows how much each player is going to wage.<br />
            3.	Window will display the username of the person that has interacted with the same red box. <br />
            4.	Points are entered manually and MUST be equal, otherwise the game cannot start, the box “Points are not equal” will appear flashing, to remind both players that they need to type in the same number of points.<br />
            5.	Once the same number of points are entered, both players must click the confirm button, for the game to start.<br />
            6.	If any player changes the point value after one player has confirmed, the confirm buttons will reset and it will require both players to confirm again, after seeing the new point value.<br />
            7.	If player 1 clicks confirm, it will show “Player 2 pending confirmation” until player 2 clicks his confirm button also.<br />
            8.	Once both sides have confirmed, the window will close, and both players characters will be AUTOMATICALLY teleported into the game area, as shown below. <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
