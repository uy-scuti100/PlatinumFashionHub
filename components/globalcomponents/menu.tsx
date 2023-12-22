import React from "react";
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
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Menu({
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
               <FiMenu
                  size={24}
                  className={cn(
                     `${isAboveLimit ? "text-black" : "text-white"}`,
                     pathname !== "/" && "text-black",
                     "duration-500 transition-colors ease-in-out"
                  )}
               />
            </div>
         </SheetTrigger>
         <SheetContent side="left" className="overflow-auto">
            <SheetHeader>
               <SheetTitle className="border border-black p-2 mt-8">
                  <Image
                     src="/logo1.png"
                     alt="logo"
                     width={300}
                     height={300}
                     className="h-[65px] w-[300px]"
                  />
               </SheetTitle>
               <SheetDescription className="font-bold uppercase p-2">
                  select your desired category
               </SheetDescription>
            </SheetHeader>

            <div className="mb-5">
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                     <AccordionTrigger>NEW IN</AccordionTrigger>
                     <AccordionContent>
                        {" "}
                        <ul className="flex flex-col gap-3 pl-5">
                           <Link href="/" className="pb-2">
                              MALE
                           </Link>
                           <Link href="/" className="pb-2">
                              FEMALE
                           </Link>
                        </ul>
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                     <AccordionTrigger>MALE</AccordionTrigger>
                     <AccordionContent>
                        <ul className="flex flex-col gap-3 pl-5">
                           <Link href="/" className="pb-2">
                              T-Shirts/Polo
                           </Link>
                           <Link href="/" className="pb-2">
                              Trousers
                           </Link>
                           <Link href="/" className="pb-2">
                              {" "}
                              Hoodies
                           </Link>
                           <Link href="/" className="pb-2">
                              Denim Jackets
                           </Link>
                           <Link href="/" className="pb-2">
                              Two Piece
                           </Link>
                           <Link href="/" className="pb-2">
                              Shorts
                           </Link>
                           <Link href="/" className="pb-2">
                              Shoes
                           </Link>
                        </ul>
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                     <AccordionTrigger>FEMALE</AccordionTrigger>
                     <AccordionContent>
                        <ul className="flex flex-col gap-3 pl-5">
                           <Link href="/" className="pb-2">
                              Tops
                           </Link>
                           <Link href="/" className="pb-2">
                              Trousers/Cargo Pants
                           </Link>
                           <Link href="/" className="pb-2">
                              {" "}
                              Gowns
                           </Link>
                           <Link href="/" className="pb-2">
                              Two Piece (Up and Down)
                           </Link>
                           <Link href="/" className="pb-2">
                              Denim Jackets
                           </Link>
                           <Link href="/" className="pb-2">
                              Shoes
                           </Link>
                           <Link href="/" className="pb-2">
                              Bikini
                           </Link>
                           <Link href="/" className="pb-2">
                              Lingerie
                           </Link>
                           <Link href="/" className="pb-2">
                              Bags
                           </Link>
                        </ul>
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                     <AccordionTrigger>
                        <Link href={"/accessories"}>ACESSSORIES</Link>
                     </AccordionTrigger>
                     <AccordionContent>
                        <ul className="flex flex-col gap-3 pl-5">
                           <Link href="/" className="pb-2">
                              Jewelleries
                           </Link>
                           <Link href="/" className="pb-2">
                              Other
                           </Link>
                        </ul>
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
               <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-4">
                     <AccordionTrigger>SALE</AccordionTrigger>
                     <AccordionContent>
                        {" "}
                        <ul className="flex flex-col gap-3 pl-5">
                           <Link href="/" className="pb-2">
                              MALE
                           </Link>
                           <Link href="/" className="pb-2">
                              FEMALE
                           </Link>
                        </ul>
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </div>

            <SheetFooter className="mt-20">
               <SheetClose asChild>
                  <Button
                     variant={"destructive"}
                     className="rounded-none w-full">
                     Close
                  </Button>
               </SheetClose>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   );
}
