import { urlFor } from "@/utils/sanity/client";
import Image from "next/image";

interface ImageProviderProps {
   image: any;
   alt: string;
   width?: number;
   height?: number;
   className?: string;
   fill?: boolean;
}

export default function ImageProvider({
   image,
   alt,
   width,
   height,
   className,
   fill,
}: ImageProviderProps) {
   return (
      <Image
         src={urlFor(image).url()!}
         alt={alt}
         width={width}
         height={height}
         className={className}
         fill={fill}
         sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 75vw,
         (max-width: 1060px) 50vw,
         33vw"
      />
   );
}
