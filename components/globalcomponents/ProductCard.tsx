import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ProductProp {
   image: any;
   name: string;
   price: number;
   desc: string;
}
export default function ProductCard({ info }: { info: ProductProp }) {
   return (
      <div>
         <div className="relative flex-grow h-[310px] w-auto">
            <Image
               src={info.image}
               alt="category"
               fill
               className="object-cover"
               placeholder="blur"
            />
         </div>

         <div className="mt-5 flex items-start flex-col gap-3">
            <div className="text-lg md:text-xl font-bold ">{info.name}</div>
            <div className="hidden md:block md:text-sm text-[#777777] font-bold ">
               {info.desc}
            </div>
            <div className="text-xs ">#{info.price}</div>
         </div>
      </div>
   );
}
