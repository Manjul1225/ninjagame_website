"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Game from "@/components/Game";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black `}>
        <Game/>
        {/* <Providers> */}
          {/* <Header /> */}
          {/* {children} */}
          {/* <Footer /> */}
          {/* <ScrollToTop /> */}
        {/* </Providers> */}
      </body>
    </html>
  );
}

import { Providers } from "./providers";
