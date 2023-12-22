"use client";
import { DoubleView, SingleView } from "@/providers/Icons/ViewButtons";
import { useState } from "react";
import Filter from "@/components/globalcomponents/filter";
import { useRouter } from "next/navigation";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { FiFilter } from "react-icons/fi";

interface ProductViewControlsProps {
   setMobileView: (view: string) => void;
   mobileView: string;
}

export const MobileControls: React.FC<ProductViewControlsProps> = ({
   setMobileView,
   mobileView,
}: ProductViewControlsProps) => {
   const sortOptions = [
      { name: "Newest", value: "/products/?date=desc" },
      { name: "Oldest", value: "/products/?date=asc" },
      { name: "Price, low to high", value: "/products/?price=asc" },
      { name: "Price, high to low", value: "/products/?price=desc" },
   ];

   const [showFilter, setShowFilter] = useState(false);

   const router = useRouter();

   return (
      <>
         <div className="flex justify-between md:hidden  border-b items-center py-4 my-10">
            <div className="flex space-x-4">
               <DoubleView
                  setView={() => setMobileView("double")}
                  view={mobileView}
               />
               <SingleView
                  setView={() => setMobileView("single")}
                  view={mobileView}
               />
            </div>

            <div className="flex items-center gap-5">
               <div className="relative inline-flex">
                  <Select onValueChange={(value) => router.push(value)}>
                     <SelectTrigger  className="sm:w-[180px]">
                        <SelectValue placeholder="SORT BY" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           {sortOptions.map((option, i) => (
                              <SelectItem
                                 key={option.name}
                                 value={option.value}>
                                 <SelectLabel>{option.name}</SelectLabel>
                              </SelectItem>
                           ))}
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
               <button onClick={() => setShowFilter((prev) => !prev)}>
                  <FiFilter size={20} />
               </button>
            </div>
         </div>

         <div>
            <Filter />
         </div>
      </>
   );
};
