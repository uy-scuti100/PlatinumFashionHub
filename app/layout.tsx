export const revalidate = 0;
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/globalcomponents/navbar";
import Footer from "@/components/globalcomponents/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Platinum Fashion Hub",
   description:
      "Discover unparalleled style at Platinum Fashion Hub, your go-to destination for cutting-edge fashion trends and timeless classics. Immerse yourself in a world where elegance meets innovation. Explore our curated collections and redefine your wardrobe with the latest must-haves. Elevate your fashion journey with Platinum Fashion Hub – where every click unveils a new dimension of style. Your fashion, your statement. #FashionForward #PlatinumStyle",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
