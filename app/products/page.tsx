import { Product } from "@/types";
import { client } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import MobileProductGrid from "./components/MobileProductGrid";
import DesktopProductGrid from "./components/DesktopProductGrid";
import getBase64 from "@/lib/getBase64";

interface Props {
   searchParams: {
      date?: string;
      price?: string;
   };
}
async function fetchAllProducts(order: any): Promise<Product[] | undefined> {
   try {
      const products = await client.fetch<Product[]>(
         groq`*[_type == "Product"] ${order} { 
            _id,
            name,
            price, 
            isNew, 
            onSale, 
            inStock, 
            discountedPrice, 
            _createdAt,
            "images": images[].asset->url, 
            "bagTypes": bagTypes[]->name, 
            "clotheTypes": clotheTypes[]->name, 
            "accessoryTypes": accessoryTypes[]->name, 
            "colors": colors[]->{name, value}, 
            "accessorySizes": accessorySizes[]->name, 
            "bagSizes": bagSizes[]->name, 
            "shoeSizes": shoeSizes[]->name, 
            "clotheSizes": clotheSizes[]->name
         }`
      );

      // Fetch base64 data for each image
      const productsWithBase64 = await Promise.all(
         products.map(async (product) => {
            const base64 = await getBase64(product.images[0]);
            return { ...product, base64 };
         })
      );

      console.log(productsWithBase64);
      return productsWithBase64;
   } catch (error) {
      console.error("Error fetching products:", error);
   }
}

export default async function page({ searchParams }: Props) {
   const { date = "desc", price } = searchParams;
   const priceOrder = price ? `| order(price ${price})` : "";
   const dateOrder = date ? `| order(_createdAt ${date})` : "";
   const order = `${dateOrder}${priceOrder}`;

   const products = await fetchAllProducts(order);

   if (!products) {
      return <div className="text-center gara text-4xl pt-56">loading...</div>;
   }
   if (products.length === 0) {
      return (
         <div className="text-center gara text-4xl pt-56"> no products</div>
      );
   }

   return (
      <section className="container pt-44 xl:pt-52">
         <div className="text-center gara text-4xl pt-10">All Products</div>

         <div>
            <MobileProductGrid products={products} />
            <DesktopProductGrid products={products} />
         </div>
      </section>
   );
}

// bagTypes[]->{
//    name,
//    _id,
// },
// clotheTypes[]->{
//    name,
//    _id,
// },
// accessoryTypes[]->{
//    name,
//    _id,
// },
// colors[]->{
//     name,
//     value
// },

// discountedPrice,
// accessorySizes[]->{
//    name,
//    _id,
// },
// bagSizes[]->{
//    name,
//    _id,
// },
// shoeSizes[]->{
//    name,
//    _id,
// },
// clotheSizes[]->{
//    name,
//    _id,
// },
