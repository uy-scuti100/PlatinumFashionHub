"use client";
// import { Button } from "@/components/ui/button";
import ArrowLeft from "@/providers/Icons/ArrowLeft";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { FiArrowLeft, FiArrowLeftCircle, FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
   const [currentSlide, setCurrentSlide] = useState(0);

   const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % carousel.length);
   };

   const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + carousel.length) % carousel.length);
   };
   const carousel = [
      {
         img: "/slider41.jpg",
         text: "our beautiful 2 piece",
      },
      {
         img: "/5701f61d78d5391b5018196334637925.jpg",
         text: "male Premium trousers",
      },
      {
         img: "/arno-senoner-oCXVxwTFwqE-unsplash.jpg",
         text: "top quality bags",
      },
      {
         img: "/slider2.jpg",
         text: "affordable cozy hoodies",
      },
      {
         img: "/slider3.jpg",
         text: "female cargo pants",
      },
      {
         img: "/fineshoe.jpg",
         text: "male and female shoes",
      },
   ];
   return (
      <section
         style={{ minHeight: `calc( 100vh - 50px)` }}
         className="w-full relative overflow-x-hidden">
         <div
            className="flex w-[600vw] h-full transition-all duration-500 ease overflow-x-hidden"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
            {carousel.map((slide, index) => (
               <div className="relative w-[100vw] h-[100vh]">
                  <span className=" absolute inset-0 bg-black/30" />

                  <Image
                     key={index}
                     src={slide.img}
                     alt={`hero-pic-${index + 1}`}
                     className="w-[100vw] h-[100vh] object-cover"
                     width={500}
                     height={500}
                     priority
                  />
                  <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2  flex justify-center flex-col space-y-8 -translate-y-1/2">
                     <h1 className=" whitespace-nowrap text-3xl uppercase text-white gara italic">
                        {slide.text}
                     </h1>
                     <div className="flex justify-center itemns-center">
                        <Link
                           href="/"
                           className="px-10 py-8 rounded-none hover:bg-custom/70 bg-custom  md:w-auto w-[200px] duration-500 transition-colors ease-in-out text-center text-white flex justify-center items-center uppercase font-bold text-opacity-80 tracking-widest">
                           SHOP NOW
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className="flex justify-between gap-10 items-center space-x-3 pt-12 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="text-white cursor-pointer" onClick={prevSlide}>
               <ArrowLeft />
            </button>
            <button className="text-white cursor-pointer" onClick={nextSlide}>
               <ArrowLeft className="rotate-180" />
            </button>
         </div>
      </section>
   );
}
