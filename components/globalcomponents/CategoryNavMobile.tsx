// import close icon
import { FiX } from "react-icons/fi";

const CategoryNavMobile = () => {
   const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };
   return (
      <nav className="w-full md:w-[500px] h-full bg-white p-8 xl:hidden">
         <div className="float-right mb-8 cursor-pointer">
            <FiX size={24} className="bg-accent-hover text-white rounded" />
         </div>

         <div className="my-10 flex items-center justify-center border-b pb-3">
            <a href="/">
               <div>
                  <img src="/logo.png" alt="logo" className="w-[100px]" />
               </div>
            </a>
         </div>

         <div className="flex flex-col gap-y-8">
            {/* {data?.map((category) => {
               return (
                  <Link
                     className="cursor-pointer transition-all uppercase hover:bg-red-100/60 hover:rounded-md hover:px-1"
                     key={category.id}
                     to={`products/${category.id}`}
                     onClick={handleClick}>
                     <div className="flex justify-between items-center w-full">
                        {category?.attributes.name}
                        <img
                           src={`${imageUrl}${category?.attributes.image.data.attributes.url}`}
                           alt="category image"
                           className="w-[50px] h-[50px] rounded object-cover"
                        />
                     </div>
                  </Link>
               );
            })} */}
         </div>
      </nav>
   );
};

export default CategoryNavMobile;
