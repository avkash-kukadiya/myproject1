import React, { useEffect, useState } from 'react'
import { HOC } from '../componnets/HOC'
import w2img from '../assets/img/applew2.png'
// import { AiOutlineHeart } from "react-icons/ai";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import FavoriteHeart from '../componnets/FavoriteHeart';
import { toggleFav } from '../redux/slices/productSlice';
import { useAppDispatch, useAppSelctor } from '../redux/store';
// import { json } from 'stream/consumers';

interface Product {
  id: number;
  title: string;
  price: string;
  reviews: number;
  rating: number;
  image: string;
  fav:boolean;
}

const products1: Product[] = [
  {
    id: 1,
    title: "Apple Watch Series 4",
    price: "$120.00",
    reviews: 131,
    rating: 4.5,
    image: w2img,
    fav:false,
  },
  {
    id: 2,
    title: "Air-Max-270",
    price: "$60.00",
    reviews: 64,
    rating: 4.5,
    image: w2img,
    fav:false,
  },
  {
    id: 3,
    title: "Minimal Chair Tool",
    price: "$24.59",
    reviews: 63,
    rating: 4.5,
    image: w2img,
    fav:false,
  },
  {
    id: 4,
    title: "Amazfit Vip",
    price: "$52.00",
    reviews: 42,
    rating: 4.5,
    image: w2img,
    fav:false,
  },
  {
    id: 5,
    title: "Gumbo Mouse",
    price: "$40.00",
    reviews: 70,
    rating: 4.5,
    image: w2img,
    fav:false,
  },
  {
    id: 6,
    title: "Camera Tripod",
    price: "$99.00",
    reviews: 110,
    rating: 4.5,
    image: w2img,
    fav:false
  },
];
interface favoritesProps { }
const Favorites: React.FC<favoritesProps> = () => {
   const dispatch = useAppDispatch();
    const state = useAppSelctor(state => state.product);
  const [Data,setData] = useState<Product[]>([]);
  useEffect(() => {
    localStorage.setItem('product', JSON.stringify(products1));
     
     setData(JSON.parse(localStorage.getItem('product')||"[]")) 
    
    console.log("Component mounted");
  }, []);
  return (
    <div className='w-full p-5 md:p-10 bg-[#F2F3F7]'>
      <h1 className="text-2xl font-semibold mb-6">Favorites</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

        {state.product?.filter(item => item.fav === true).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow  p-4 hover:shadow-lg transition relative"
          >
            {/* FAVORITE HEART BUTTON */}
            <div className="absolute right-4 top-73 bg-white p-2 rounded-full shadow hover:bg-gray-200">
              <FavoriteHeart fav={item.fav} onClick={() => dispatch(toggleFav(item.id))} />
              {/* <AiOutlineHeart className="text-pink-500 text-lg" /> */}
            </div>

            {/* IMAGE + SIDE ARROWS */}
            <div className="relative w-full flex items-center justify-center">
              <button className="absolute left-1 bg-gray-100 py-2 w-[41px] rounded-full shadow hover:bg-gray-200">
                ❮
              </button>

              <img
                src={item.image}
                alt={item.title}
                className="w-full  mx-auto"
              />

              <button className="absolute right-1 bg-gray-100 py-2 w-[41px] rounded-[50%] shadow hover:bg-gray-200">
                ❯
              </button>
            </div>

            {/* TEXT SECTION */}
            <h2 className="text-lg font-medium mt-4">{item.title}</h2>

            <p className="text-blue-500 font-bold mt-1">{item.price}</p>

            {/* RATING */}
            <div className="flex items-center gap-1 text-orange-400 mt-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />

              <span className="text-gray-500 text-sm ml-1">
                ({item.reviews})
              </span>
            </div>

            {/* BUTTON */}
            <button className="mt-4  bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 font-medium">
              Edit Product
            </button>
          </div>
        ))}

      </div>
    </div>

  )
}

export default HOC(Favorites)
