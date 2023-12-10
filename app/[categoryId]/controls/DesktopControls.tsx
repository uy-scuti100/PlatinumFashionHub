"use client";
import * as React from "react";

import {
   FourGridView,
   ThreeGridView,
   TwoGridView,
} from "@/providers/Icons/ViewButtons";
import { Button } from "@/components/ui/button";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
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
            {numProducts} products
         </div>
         <div className="relative inline-flex">
            <Select>
               <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="SORT BY" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Fruits</SelectLabel>
                     <SelectItem value="apple">Apple</SelectItem>
                     <SelectItem value="banana">Banana</SelectItem>
                     <SelectItem value="blueberry">Blueberry</SelectItem>
                     <SelectItem value="grapes">Grapes</SelectItem>
                     <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
         </div>
      </div>
   );
};
