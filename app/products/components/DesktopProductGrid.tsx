"use client";
import MemoizedFilter from "@/components/globalcomponents/filter";
import { DesktopControls } from "../controls/DesktopControls";

import { formatPriceInNaira } from "@/lib/utils";
import ImageProvider from "@/providers/ImageProvider";

import { useState } from "react";
import Image from "next/image";
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

export default function DesktopProductGrid({
   products,
   blurDataurl,
}: ProductGridProps) {
   const [desktopView, setDesktopView] = useState("quadruple");
   return (
      <section className="hidden md:block">
         <div>
            <DesktopControls
               numProducts={products?.length}
               setDesktopView={setDesktopView}
               desktopView={desktopView}
            />
         </div>
         <div className="flex gap-10">
            <div className="w-full basis-1/5 border-r pr-5">
               <MemoizedFilter />
            </div>
            <div className="basis-4/5">
               <div
                  className={`${
                     desktopView === "double"
                        ? "grid-cols-2"
                        : desktopView === "tripple"
                        ? "grid-cols-3"
                        : "grid-cols-4"
                  } grid  gap-5`}>
                  {products &&
                     products.length > 0 &&
                     products.map((product, i) => {
                        const { _id, name, images, price, base64 } = product;

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
            </div>
         </div>
      </section>
   );
}

{
   /* <div className="basis-4/5">
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
</div>; */
}
