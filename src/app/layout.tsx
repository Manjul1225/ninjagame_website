"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Spinner from "@/components/Spinner/spinner";
import { Providers } from "./providers";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true)
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Ninja Studios</title>
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black `}>
        <Providers>
          {loading && <Spinner/>}
          <Header setLoading={setLoading}/>
          {children}
          {/* <Footer /> */}
          {/* <ScrollToTop /> */}
        </Providers>
      </body>
    </html>
  );
}



