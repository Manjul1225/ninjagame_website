"use client"
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Admin from "@/components/Admin";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { useEffect, useState } from "react";
import Game from "@/components/Game";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner/spinner";

export default function Home() {
  const router = useRouter();
  const [entityToken, setEntityToken] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('entity_token')
    setEntityToken(token)
  }, []);
  return (
    <>
      <div className="w-full h-full absolute">
        <Hero/>
      </div>  
      {/* <ScrollUp />
      <Hero />
      <Video />
      <Brands />  
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
      <Contact /> */}
    </>
  );
}


