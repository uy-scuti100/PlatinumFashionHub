"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchForm from "./searchForm";
import { Cart } from "./cart";
import Menu from "./menu";
import { Navigation } from "@/app/(homeComponents)/NavigationBar";
import { usePathname } from "next/navigation";

export default function Navbar() {
   const [isAboveLimit, setIsAboveLimit] = useState(false);
   const pathname = usePathname();
   // console.log(pathname);
   const halfPage = typeof window !== "undefined" ? window.innerHeight / 2 : 0;

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition =
            typeof window !== "undefined"
               ? window.scrollY || document.documentElement.scrollTop
               : 0;

         if (scrollPosition > halfPage) {
            setIsAboveLimit(true);
         } else {
            setIsAboveLimit(false);
         }
      };
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", handleScroll);

         return () => {
            window.removeEventListener("scroll", handleScroll);
         };
      }
   }, [halfPage]);
   return (
      <nav className="fixed pb-6 w-full top-0 z-40">
         <div className="bg-black w-full text-center text-white py-2 text-xs">
            <p>FREE DELIVERY AVAILABLE ON ORDERS above #50,000</p>
         </div>
         <div
            className={`container mx-auto pt-5 xl:pt-10 xl:pb-5 xl:border-b ${
               isAboveLimit && pathname === "/"
                  ? "bg-white duration-700 transition-colors ease-in-out border border-b"
                  : pathname !== "/"
                  ? "bg-white duration-700 transition-colors ease-in-out"
                  : "bg-none duration-700 transition-colors ease-in-out"
            }`}>
            <div className="flex flex-row gap-4 items-center justify-between mb-4 xl:mb-0 ">
               {/* menu */}
               <div className="text-3xl xl:hidden cursor-pointer">
                  <Menu isAboveLimit={isAboveLimit} pathname={pathname} />
               </div>

               <Link href="/" className="backdrop-blur-sm p-1">
                  <img src="/logo1.png" alt="Logo" className="w-[200px]" />
               </Link>
               {/* searchform for desktop only */}
               <div className="hidden pb-5 w-full xl:flex xl:max-w-[734px] ">
                  <SearchForm isAboveLimit={isAboveLimit} />
               </div>
               <div className="flex items-center gap-x-[10px]">
                  {/* cart icon */}
                  <div>
                     <Cart isAboveLimit={isAboveLimit} pathname={pathname} />
                  </div>
               </div>
            </div>
            <div className="hidden xl:flex">
               <Navigation />
            </div>
            {/* search form for mobile only*/}
            <div className="xl:hidden pb-5">
               <SearchForm isAboveLimit={isAboveLimit} />
            </div>
         </div>
      </nav>
   );
}
