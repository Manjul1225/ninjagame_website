"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Spinner from "@/components/Spinner/spinner";
import { Providers } from "./providers";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);
  
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Ninja Studios</title>
      </head>
      <body className={`bg-[#1D1019]`}>
        <Providers>
          { loading ?<Spinner/>:(
          <>
            <Header/>
            {children}
          </>
          )}
          {/* <Footer /> */}
          {/* <ScrollToTop /> */}
        </Providers>
      </body>
    </html>
  );
}



