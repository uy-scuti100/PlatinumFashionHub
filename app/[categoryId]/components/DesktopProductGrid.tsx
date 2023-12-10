"use client";
import { DesktopControls } from "@/app/[categoryId]/controls/DesktopControls";
import Image from "next/image";
import { useState } from "react";

export default function DesktopProductGrid() {
   const [desktopView, setDesktopView] = useState("tripple");
   return (
      <section className="hidden md:block">
         <div>
            <DesktopControls
               numProducts={78}
               setDesktopView={setDesktopView}
               desktopView={desktopView}
            />
         </div>
         <div className="flex gap-5 ">
            <div className="bg-blue-600 min-h-screen w-full basis-1/5"></div>
            <div className="basis-4/5">
               <div
                  className={`${
                     desktopView === "double"
                        ? "grid-cols-2"
                        : desktopView === "tripple"
                        ? "grid-cols-3"
                        : "grid-cols-4"
                  } grid  gap-5`}>
                  {Array(10)
                     .fill(null)
                     .map((_, i) => (
                        <div key={i}>
                           <div className="relative">
                              <Image
                                 src="/222piece.jpg"
                                 alt="product"
                                 width={500}
                                 height={500}
                                 className="object-cover h-[200px] w-full"
                              />
                           </div>
                           <div className="text-center text-2xl font-bold mt-5 hidden md:block">
                              Product Name
                           </div>
                           <div className="text-center text-xl font-bold mt-5 hidden md:block">
                              $ 100.00
                           </div>
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </section>
   );
}
