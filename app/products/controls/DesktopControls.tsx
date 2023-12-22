"use client";
import * as React from "react";

import {
   FourGridView,
   ThreeGridView,
   TwoGridView,
} from "@/providers/Icons/ViewButtons";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
interface ProductViewControlsProps {
   numProducts: number;
   setDesktopView: (view: string) => void;
   desktopView: string;
}

export const DesktopControls: React.FC<ProductViewControlsProps> = ({
   numProducts,
   setDesktopView,
   desktopView,
}) => {
   const router = useRouter();
   const sortOptions = [
      { name: "Newest", value: "/products/?date=desc" },
      { name: "Oldest", value: "/products/?date=asc" },
      { name: "Price, low to high", value: "/products/?price=asc" },
      { name: "Price, high to low", value: "/products/?price=desc" },
   ];
   return (
      <div className="md:flex justify-between  border items-center py-2 px-4 my-10 hidden ">
         <div className="flex space-x-4">
            <TwoGridView
               setView={() => setDesktopView("double")}
               view={desktopView}
            />

            <ThreeGridView
               setView={() => setDesktopView("tripple")}
               view={desktopView}
            />

            <FourGridView
               setView={() => setDesktopView("quadruple")}
               view={desktopView}
            />
         </div>
         <div className="flex-grow text-center uppercase">
            {numProducts} product{numProducts > 1 ? "s" : ""}
         </div>
         <div className="relative inline-flex">
            <div className="relative inline-flex">
               <Select onValueChange={(value) => router.push(value)}>
                  <SelectTrigger className="sm:w-[180px]">
                     <SelectValue placeholder="SORT BY" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        {sortOptions.map((option, i) => (
                           <SelectItem key={option.name} value={option.value}>
                              <SelectLabel>{option.name}</SelectLabel>
                           </SelectItem>
                        ))}
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         </div>
      </div>
   );
};
