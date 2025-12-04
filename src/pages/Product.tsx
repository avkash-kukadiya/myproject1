import React from 'react'
import { HOC } from '../componnets/HOC'
import watchimg from '../assets/img/Image.png'

import { FaStar } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
interface productProps { }
const Product: React.FC<productProps> = () => {
  return (
    <div className='px-10 pb-5  productspage'>
      <h2 className='text-xl py-2 fbold'>Products</h2>
      <div className='w-full  '>

        <div className="relative w-full z-0 bg-blue-500 overflow-hidden rounded-lg flex items-center  px-6 py-2 md:py-10">
          {/* Background Texture */}


          {/* Left Arrow */}
          <button className="absolute left-3 md:left-5  bg-white/50 hover:bg-white text-gray-700 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Text Content */}
          <div className="relative z-10 max-w-xl text-white  md:text-left space-y-2 ms-20  md:ms-25">
            <p className="text-xs md:text-[13px] font-medium">September 12–22</p>

            <h1 className="text-xl md:text-3xl font-bold leading-snug md:leading-tight">
              Enjoy free home <br />
              delivery in this summer
            </h1>

            <p className="text-sm md:text-[13px] opacity-80">
              Designer Dresses – Pick from trendy Designer Dress.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-1.5 md:px-6 md:py-3 rounded-lg font-semibold mt-2">
              Get Started
            </button>
          </div>

          {/* Right Arrow */}
          <button className="absolute right-3 md:right-5 z-20 bg-white/50 hover:bg-white text-gray-700 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className='mt-5 flex justify-content-around  '>

         

          <div className=' pe-5 '>
            <div className=''><img src={watchimg} alt="" className='w-full' /></div>
            <div className='p-5 bg-white relative '>
              {/* Wishlist Icon */}
              <button className="absolute right-3 top-3 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <AiOutlineHeart className="text-gray-700 text-lg" />
              </button>
              <h2 className="text-lg font-semibold text-gray-900">Apple Watch serirs 4</h2>
              <p className='text-blue-600 font-semibold mt-1'>$120.00</p>
              <div className='flex  gap-1 mt-2  items-center '><FaStar color='gold' />
                <FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><span className='opacity-50 text-[13px] ps-2' >(131)</span></div>
              <button className="mt-4 px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 font-medium">
                Edit Product
              </button>
            </div>
          </div>
          <div className=' pe-5 '>
            <div className=''><img src={watchimg} alt="" className='w-full' /></div>
            <div className='p-5 bg-white relative '>
              {/* Wishlist Icon */}
              <button className="absolute right-3 top-3 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <AiOutlineHeart className="text-gray-700 text-lg" />
              </button>
              <h2 className="text-lg font-semibold text-gray-900">Apple Watch serirs 4</h2>
              <p className='text-blue-600 font-semibold mt-1'>$120.00</p>
              <div className='flex  gap-1 mt-2  items-center '><FaStar color='gold' />
                <FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><span className='opacity-50 text-[13px] ps-2' >(131)</span></div>
              <button className="mt-4 px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 font-medium">
                Edit Product
              </button>
            </div>
          </div>
          <div className='  '>
            <div className=''><img src={watchimg} alt="" className='w-full' /></div>
            <div className='p-5 bg-white relative '>
              {/* Wishlist Icon */}
              <button className="absolute right-3 top-3 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <AiOutlineHeart className="text-gray-700 text-lg" />
              </button>
              <h2 className="text-lg font-semibold text-gray-900">Apple Watch serirs 4</h2>
              <p className='text-blue-600 font-semibold mt-1'>$120.00</p>
              <div className='flex  gap-1 mt-2  items-center '><FaStar color='gold' />
                <FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><span className='opacity-50 text-[13px] ps-2' >(131)</span></div>
              <button className="mt-4 px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 font-medium">
                Edit Product
              </button>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default HOC(Product) 