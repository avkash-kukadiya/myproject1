import React, { useState } from 'react'
import { HOC } from '../componnets/HOC'
import { FiEdit2, FiTrash2, FiSearch } from "react-icons/fi";
import img23 from '../assets/img/applew2.png';
interface ProductType {
  id: number;
  image: string;
  name: string;
  category: string;
  price: string;
  piece: number;
  colors: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    image: img23,
    name: "Apple Watch Series 4",
    category: "Digital Product",
    price: "$690.00",
    piece: 63,
    colors: ["#000", "#e11d48", "#71717a", "#fca5a5"],
  },
  {
    id: 2,
    image: img23,
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    colors: ["#000", "#334155", "#2563eb", "#fbbf24"],
  },
  {
    id: 3,
    image: img23,
    name: "Women's Dress",
    category: "Fashion",
    price: "$640.00",
    piece: 635,
    colors: ["#dc2626", "#ea580c", "#1e40af", "#3b82f6"],
  },
];

const ProductStock:React.FC = () => {
    const [search, setSearch] = useState("");
  return (
    <div>
      <div className="p-6 bg-gray-100 h-screen">
      {/* Title + Search */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold">Product Stock</h1>

        <div className="relative w-72">
          <FiSearch className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search product name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-white rounded-lg border focus:outline-none focus:ring focus:ring-blue-300 text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
        <table className="w-full text-sm">
          <thead className=" border-b text-gray-600 font-medium">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Product Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Piece</th>
              <th className="p-4 text-left">Available Color</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">
                  <img
                    src={item.image}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </td>

                <td className="p-4 font-medium">{item.name}</td>

                <td className="p-4">{item.category}</td>

                <td className="p-4 font-semibold">{item.price}</td>

                <td className="p-4">{item.piece}</td>

                <td className="p-4">
                  <div className="flex gap-2">
                    {item.colors.map((color, index) => (
                      <span
                        key={index}
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button className="p-2 rounded-lg border hover:bg-gray-100 text-gray-600">
                      <FiEdit2 size={16} />
                    </button>
                    <button className="p-2 rounded-lg border hover:bg-red-100 text-red-500">
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
       
      </div>
       <div className="bg-gray-100 border-0 flex justify-between items-center p-4 text-gray-600 text-sm  ">
          <span>Showing 1–9 of 78</span>

          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-lg border hover:bg-gray-100">
              {"<"}
            </button>
            <button className="px-3 py-1 rounded-lg border hover:bg-gray-100">
              {">"}
            </button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default  HOC(ProductStock) 
