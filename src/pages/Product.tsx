
import React, { useEffect } from "react";
import { HOC } from "../componnets/HOC";
// import watchimg from "../assets/img/Image.png";
import { FaStar } from "react-icons/fa";
import FavoriteHeart from "../componnets/FavoriteHeart";
import { useAppSelctor , useAppDispatch} from "../redux/store";
import { toggleFav } from "../redux/slices/productSlice";

// interface ProductItem {
//   id: number;
//   title: string;
//   price: string;
//   ratingCount: number;
//   image: string;
//   fav: boolean;
// }

// const products: ProductItem[] = [
//   {
//     id: 1,
//     title: "Apple Watch serirs 4",
//     price: "$120.00",
//     ratingCount: 131,
//     image: watchimg,
//   },
//   {
//     id: 2,
//     title: "Apple Watch serirs 4",
//     price: "$120.00",
//     ratingCount: 131,
//     image: watchimg,
//   },
//   {
//     id: 3,
//     title: "Apple Watch serirs 4",
//     price: "$120.00",
//     ratingCount: 131,
//     image: watchimg,
//   },
// ];
    
const Product: React.FC = () => {

  const dispatch = useAppDispatch();
  const state = useAppSelctor(state => state.product);
  useEffect(()=>{
    console.log(state.product);
  },[state])


  return (
    <div className="px-10 pb-5 productspage">
      <h2 className="text-2xl py-2 fbold">Products</h2>

      {/* Banner */}
      <div className="relative w-full z-0 bg-blue-500 overflow-hidden rounded-lg flex items-center px-6 py-2 md:py-10">
        <button className="absolute left-3 md:left-5 bg-white/50 hover:bg-white text-gray-700 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow">
          ❮
        </button>

        <div className="relative z-10 max-w-xl text-white space-y-2 ms-20 md:ms-25">
          <p className="text-xs md:text-[13px] font-medium">September 12–22</p>
          <h1 className="text-xl md:text-3xl font-bold">
            Enjoy free home <br /> delivery in this summer
          </h1>
          <p className="text-sm md:text-[13px] opacity-80">
            Designer Dresses – Pick from trendy Designer Dress.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-1.5 md:px-6 md:py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>

        <button className="absolute right-3 md:right-5 bg-white/50 hover:bg-white text-gray-700 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow">
          ❯
        </button>
      </div>

      {/* Products */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {state.product.map((item) => (
          <div key={item.id} className="bg-white rounded-xl">
            <img src={item.image} alt={item.title} className="w-full" />

            <div className="p-5  relative ">
              {/* Wishlist */}
              <div className="absolute right-3 top-3 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <FavoriteHeart fav={item.fav}  onClick={() => dispatch(toggleFav(item.id))}/>
              </div>

              <h2 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h2>

              <p className="text-blue-600 font-semibold mt-1">
                {item.price}
              </p>

              <div className="flex gap-1 mt-2 items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} color="gold" />
                ))}
                <span className="opacity-50 text-[13px] ps-2">
                  ({item.rating})
                </span>
              </div>

              <button className="mt-4 px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 font-medium">
                Edit Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HOC(Product);
