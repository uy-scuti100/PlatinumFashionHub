// import { Product } from "@/types";
import { client } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import MobileProductGrid from "@/app/[categoryId]/components/MobileProductGrid";
import DesktopProductGrid from "@/app/[categoryId]/components/DesktopProductGrid";

interface Product {
   images: any[];
   name: string;
   price: number;
}
async function fetchAllProducts(): Promise<Product[] | undefined> {
   try {
      const products = await client.fetch<Product[]>(groq`
      *[_type == "Product" && categories == "Accessories"]`);

      return products;
   } catch (error) {
      console.error("Error fetching products:", error);
   }
}

export default async function page() {
   const products = await fetchAllProducts();

   if (!products) {
      return <div>loading...</div>;
   }
   if (products.length === 0) {
      return <div>no products</div>;
   }

   return (
      <section className="min-h-screen container pt-44 xl:pt-52">
         <h1 className="text-center gara text-4xl pt-10">Accessories</h1>

         <div>
            <MobileProductGrid products={products} />
            <DesktopProductGrid products={products} />
         </div>
      </section>
   );
}
