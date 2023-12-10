// const fetchAllProducts = async () => {
//    try {
//       const products = await client.fetch<Product[]>(
//          groq`*[_type == "Product"]`
//       );
//       // console.log(products);
//       return products;
//    } catch (error) {
//       console.error("Error fetching products:", error);
//    }

import MobileProductGrid from "../[categoryId]/components/MobileProductGrid";
import DesktopProductGrid from "../[categoryId]/components/DesktopProductGrid";

// };
export default async function page() {
   // const products = await fetchAllProducts();

   // if (!products) {
   //    return <div>loading...</div>;
   // }
   // if (products.length === 0) {
   //    return <div>no products</div>;
   // }

   return (
      <div className="min-h-scren container pt-44 xl:pt-52">
         <div className="text-center gara text-4xl">All Products</div>

         <div>
            <MobileProductGrid
            //  products={products}
            />
            <DesktopProductGrid />
         </div>

         <div>
            {/* {[]?.map((product) => (
               <div key={product._id}>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <ImageProvider
                     image={product.images[0]}
                     alt={product.name}
                     width={500}
                     height={500}
                  />
               </div>
            ))} */}
         </div>
      </div>
   );
}
