"use client"
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
      <div className="w-full h-auto">
          <Hero/>
        {/* <ScrollUp /> */}
      </div>  
      {/* 
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


