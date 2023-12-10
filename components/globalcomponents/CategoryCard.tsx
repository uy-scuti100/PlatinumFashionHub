import Image from "next/image";
import Link from "next/link";

interface InfoProp {
   image: string;
   text: string;
}

export default function CategoryCard({ info }: { info: InfoProp }) {
   return (
      <Link
         href="/"
         className="relative flex-grow h-[310px] w-[207px] group overflow-hidden">
         <Image
            src={info.image}
            alt="category"
            fill
            placeholder="blur"
            className="transition-transform transform-gpu group-hover:scale-110 duration-700 ease-in-out object-cover"
         />
         <div className="group-hover:opacity-0 duration-300 transition-opacity ease-in-out absolute inset-0 bg-black/30 flex justify-center items-center bg-blend-darken">
            <div className="text-white text-2xl font-bold text-center  transition-opacity ease-in-out ">
               {info.text}
            </div>
         </div>
      </Link>
   );
}
