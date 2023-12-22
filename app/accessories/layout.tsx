export const revalidate = 0;
export const dynamic = "force-dynamic";

import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Accessories | Platunum Hub",
   description:
      "Luxurious accessories for both male and female #FashionForward #PlatinumStyle",
};

export default function AccessoriesLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return <main>{children}</main>;
}
