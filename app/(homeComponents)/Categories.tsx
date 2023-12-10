import CategoryCard from "@/components/globalcomponents/CategoryCard";
import React from "react";
import { menCategories, wommenCategories } from "@/constants/categories";
import { newIn } from "@/constants/newIn";
import ProductCard from "@/components/globalcomponents/ProductCard";
import Link from "next/link";

interface ProductProp {
   image: any;
   name: string;
   price: number;
   desc: string;
}

interface InfoProp {
   image: string;
   text: string;
}
export default function Categories() {
   return (
      <section className="pt-40 ">
         <div className="container mx-auto">
            <div>
               <div className="text-center gara text-4xl">
                  Latest Collections
               </div>
               <div className="mt-20">
                  <div className="grid grid-cols-2 md:grid-cols-3  gap-5">
                     {newIn.map((info: ProductProp, index: number) => (
                        <ProductCard key={index} info={info} />
                     ))}
                  </div>
               </div>
               <div className="flex justify-center items-center mt-10 md:mt-16">
                  <Link
                     href="/"
                     className="bg-custom text-center py-6 px-8 w-[200px] text-white text-lg hover:bg-custom-hover duration-500 ease-in-out transition-colors uppercase font-bold text-opacity-80 tracking-widest">
                     See More
                  </Link>
               </div>
            </div>
            <div className="pt-40">
               <div className="text-center gara text-4xl">
                  Shop Men Categories
               </div>
               <div className="mt-20">
                  <div className="flex gap-5 flex-wrap ">
                     {menCategories.map((info: InfoProp, index: number) => (
                        <CategoryCard key={index} info={info} />
                     ))}
                  </div>
               </div>
            </div>
            <div className="pt-40">
               <div className="text-center gara text-4xl">
                  Shop Women Categories
               </div>
               <div className="mt-20">
                  <div className="flex gap-5 flex-wrap ">
                     {wommenCategories.map((info: InfoProp, index: number) => (
                        <CategoryCard key={index} info={info} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
