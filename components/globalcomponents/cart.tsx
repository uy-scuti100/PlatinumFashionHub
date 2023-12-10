import { Button } from "@/components/ui/button";
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import { FiShoppingBag } from "react-icons/fi";
import { cn } from "@/lib/utils";

export function Cart({
   isAboveLimit,
   pathname,
}: {
   isAboveLimit: boolean;
   pathname: string;
}) {
   return (
      <Sheet>
         <SheetTrigger asChild>
            <div className="relative cursor-pointer">
               <FiShoppingBag
                  size={24}
                  className={cn(
                     `${isAboveLimit ? "text-black" : "text-white"}`,
                     pathname !== "/" && "text-black",
                     "duration-500 transition-colors ease-in-out"
                  )}
               />
               {/* cart count */}
               <div className="bg-custom p-2 text-white absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]">
                  0
               </div>
            </div>
         </SheetTrigger>
         <SheetContent>
            <div className="flex flex-col gap-y-5 items-center h-full w-full mt-5">
               <SheetTitle>YOUR BASKET IS EMPTY 😏</SheetTitle>
               <div>
                  <IoCartOutline size={25} />
               </div>
            </div>
         </SheetContent>
      </Sheet>
   );
}
