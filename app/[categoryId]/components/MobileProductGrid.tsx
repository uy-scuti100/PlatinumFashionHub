"use client";

import { DesktopControls } from "@/app/[categoryId]/controls/DesktopControls";
import { MobileControls } from "@/app/[categoryId]/controls/MobileControls";
import Image from "next/image";
import { useState } from "react";

export default function MobileProductGrid() {
   const [mobileView, setMobileView] = useState("double");

   return (
      <section className="md:hidden">
         <div>
            <MobileControls setMobileView={setMobileView} />
         </div>
         <div
            className={`${
               mobileView === "double" ? "grid-cols-2" : "grid-cols-1"
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
      </section>
   );
}
