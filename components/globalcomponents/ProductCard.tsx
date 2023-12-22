import { formatPriceInNaira } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface ProductProp {
   image: any;
   name: string;
   price: number;
   desc: string;
}
export default function ProductCard({ info }: { info: ProductProp }) {
   console.log(info);
   const { image, name, price, desc } = info;
   return (
      <div>
         <div className="relative flex-grow h-[310px] w-auto">
            <Image
               src={image}
               alt="category"
               fill
               className="object-cover"
               placeholder="blur"
            />
         </div>

         <div className="mt-5 flex items-start flex-col gap-3">
            <div className="text-lg md:text-xl font-bold ">{name}</div>
            <div className="hidden md:block md:text-sm text-[#777777] font-bold ">
               {info.desc}
            </div>
            <div className="text-xs ">₦{formatPriceInNaira(price)}</div>
         </div>
      </div>
   );
}
