"use client";

import { MobileControls } from "../controls/MobileControls";
import { formatPriceInNaira } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface Product {
   _id?: string;
   images: any[];
   name: string;
   price: number;
   isNew: boolean;
   onSale: boolean;
   inStock: boolean;
   discountedPrice?: number;
   _createdAt: any;
   base64?: string;
}

interface ProductGridProps {
   products: Product[];
   blurDataurl?: string;
}

export default function MobileProductGrid({
   products,
   blurDataurl,
}: ProductGridProps) {
   const [mobileView, setMobileView] = useState("double");

   return (
      <section className="md:hidden">
         <div>
            <MobileControls
               setMobileView={setMobileView}
               mobileView={mobileView}
            />
         </div>

         <p className="text-xs text-center">
            {products.length} product{products.length > 1 ? "s" : ""}
         </p>
         <div
            className={`${
               mobileView === "double" ? "grid-cols-2" : "grid-cols-1"
            } grid  gap-5 mt-5`}>
            {products &&
               products.length > 0 &&
               products.map((product, i) => {
                  const { _id, name, images, price, base64 } = product; // Destructure base64 from the product

                  return (
                     <div key={_id}>
                        <div className="relative group">
                           {images && images.length > 0 && (
                              <div className="relative h-[200px]">
                                 <Image
                                    src={images[0]}
                                    alt={`${name}-image`}
                                    fill
                                    className="object-cover w-full h-[200px]"
                                    placeholder="blur"
                                    blurDataURL={base64 || blurDataurl}
                                 />

                                 {images.length > 1 && (
                                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                       <Image
                                          src={images[1]}
                                          alt={`${name}-image`}
                                          width={500}
                                          height={500}
                                          className=" object-cover w-full h-[200px]"
                                       />
                                    </div>
                                 )}
                              </div>
                           )}
                        </div>
                        <h6 className="text-[#1c1c1c] text-xs font-[700] mt-5 uppercase">
                           {name}
                        </h6>
                        <h6 className="text-[#1c1c1c] text-xs font-medium mt-3 md:block">
                           {formatPriceInNaira(price)}
                        </h6>
                     </div>
                  );
               })}
         </div>
      </section>
   );
}
