import { DoubleView, SingleView } from "@/providers/Icons/ViewButtons";
import { useState } from "react";

export const MobileControls = ({
   setMobileView,
}: {
   setMobileView: (view: string) => void;
}) => {
   return (
      <div className="flex justify-between md:hidden  border items-center p-4 my-10">
         <div className="flex space-x-4">
            <DoubleView setView={() => setMobileView("double")} />
            <SingleView setView={() => setMobileView("single")} />
         </div>
         <button>FILTER</button>
         <button>SORT BY</button>
      </div>
   );
};
