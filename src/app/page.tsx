"use client"

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Game from "@/components/Game";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { useEffect, useState } from "react";


export default function Home() {
  const [entityToken, setEntityToken] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('entity_token')
    setEntityToken(token)
  });
  return (
    <>
      <ScrollUp />
      <Hero />
      {
        entityToken ? <Game /> : null
      }
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
