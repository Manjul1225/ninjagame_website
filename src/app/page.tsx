"use client"
import Hero from "@/components/Hero";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { DataContext } from "./datacontext";

export default function Home() {
  const {isLoggedIn, setLoggedIn} = useContext(DataContext);
  const router = useRouter();
  // const [entityToken, setEntityToken] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(isLoggedIn) {
      setLoggedIn(false);
      toast.success("You are logged in Successfully");
    }
    const token = sessionStorage.getItem('entity_token')
    // setEntityToken(token)
  }, []);
  return (
    <>
      <div className="w-full h-auto">
          {/* <Hero/> */}
          <ToastContainer />
      </div>  
    </>
  );
}