
import React, { useMemo, useState } from 'react';
import { HOC } from '../componnets/HOC';
import {
  
  FiTrash2,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiX
} from "react-icons/fi";
import img23 from '../assets/img/applew2.png';
import { FaRegEdit } from 'react-icons/fa';

/* ---------------- TYPES ---------------- */
interface ProductType {
  id: number;
  image: string;
  name: string;
  category: string;
  price: string;
  piece: number;
  colors: string[];
}

/* ---------------- INITIAL DATA ---------------- */
const INITIAL_PRODUCTS: ProductType[] = [
  { id: 1, image: img23, name: "Apple Watch Series 4", category: "Digital Product", price: "$690.00", piece: 63, colors: ["#000", "#9ca3af", "#fca5a5"] },
  { id: 2, image: img23, name: "Microsoft Headsquare", category: "Digital Product", price: "$190.00", piece: 13, colors: ["#000", "#fb7185", "#60a5fa", "#facc15"] },
  { id: 3, image: img23, name: "Women's Dress", category: "Fashion", price: "$640.00", piece: 635, colors: ["#881337", "#93c5fd", "#1e3a8a", "#3b82f6"] },
  { id: 4, image: img23, name: "Samsung A50", category: "Mobile", price: "$400.00", piece: 67, colors: ["#1e3a8a", "#000", "#9f1239"] },
  { id: 5, image: img23, name: "Camera", category: "Electronic", price: "$420.00", piece: 52, colors: ["#1e3a8a", "#000", "#9f1239"] },
  { id: 6, image: img23, name: "iPhone 13", category: "Mobile", price: "$999.00", piece: 80, colors: ["#000", "#6b7280"] },
  { id: 7, image: img23, name: "Laptop Pro", category: "Electronic", price: "$1200.00", piece: 40, colors: ["#020617", "#475569"] },
  { id: 8, image: img23, name: "Headphones", category: "Digital Product", price: "$220.00", piece: 150, colors: ["#000", "#ef4444"] },
  { id: 9, image: img23, name: "Smart TV", category: "Electronic", price: "$780.00", piece: 25, colors: ["#020617"] },
  { id: 10, image: img23, name: "Bluetooth Speaker", category: "Electronic", price: "$180.00", piece: 110, colors: ["#2563eb", "#000"] },
  { id: 11, image: img23, name: "Gaming Mouse", category: "Accessories", price: "$60.00", piece: 300, colors: ["#000", "#ef4444"] },
  { id: 12, image: img23, name: "Keyboard RGB", category: "Accessories", price: "$120.00", piece: 140, colors: ["#000", "#22c55e"] },
  { id: 13, image: img23, name: "Shoes Nike", category: "Fashion", price: "$210.00", piece: 90, colors: ["#000", "#1d4ed8"] },
  { id: 14, image: img23, name: "Watch Classic", category: "Fashion", price: "$350.00", piece: 45, colors: ["#000", "#9ca3af"] },
  { id: 15, image: img23, name: "Tablet X", category: "Electronic", price: "$540.00", piece: 38, colors: ["#020617"] },
  { id: 16, image: img23, name: "Air Pods", category: "Digital Product", price: "$199.00", piece: 200, colors: ["#fff", "#000"] },
];

const ITEMS_PER_PAGE = 9;

/* ---------------- COMPONENT ---------------- */
const ProductStock: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>(INITIAL_PRODUCTS);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editItem, setEditItem] = useState<ProductType | null>(null);

  /* ---------- SEARCH + PAGINATION ---------- */
  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedData = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* ---------- DELETE ---------- */
  const handleDelete = (id: number) => {
    if (!window.confirm("Delete this product?")) return;

    const updated = products.filter(p => p.id !== id);
    setProducts(updated);

    if ((currentPage - 1) * ITEMS_PER_PAGE >= updated.length) {
      setCurrentPage(prev => Math.max(prev - 1, 1));
    }
  };

  /* ---------- IMAGE CHANGE ---------- */
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editItem) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setEditItem({ ...editItem, image: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  /* ---------- SAVE EDIT ---------- */
  const handleEditSave = () => {
    if (!editItem) return;

    setProducts(prev =>
      prev.map(p => (p.id === editItem.id ? editItem : p))
    );
    setEditItem(null);
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-5">
        <h1 className="text-xl font-semibold">Product Stock</h1>

        <div className="relative w-full md:w-72 inpSearch">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search product name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-3 py-2 rounded-full border border-[#e0e5f7] bg-white inpSearch"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="border-b text-gray-600">
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
            {paginatedData.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <img src={item.image} className="w-12 h-12 rounded-lg object-cover" />
                </td>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4 font-semibold">{item.price}</td>
                <td className="p-4">{item.piece}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    {item.colors.map((c, i) => (
                      <span key={i} className="w-4 h-4 rounded-full border" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => setEditItem(item)}
                      className="p-2 border rounded-lg hover:bg-gray-100"
                    >
                      <FaRegEdit  />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 border rounded-lg hover:bg-red-100 text-red-500"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <span>
          Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
          {Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} of{" "}
          {filteredProducts.length}
        </span>

        <div className="flex gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="p-2 border rounded-lg disabled:opacity-40"
          >
            <FiChevronLeft />
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="p-2 border rounded-lg disabled:opacity-40"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* EDIT MODAL */}
      {editItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Edit Product</h2>
              <button onClick={() => setEditItem(null)}>
                <FiX />
              </button>
            </div>

            <div className="space-y-3">
              {/* IMAGE */}
              <div className="flex items-center gap-4">
                <img
                  src={editItem.image}
                  className="w-16 h-16 rounded-lg border object-cover"
                />
                <label className="text-blue-600 text-sm cursor-pointer">
                  Change Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              <input
                className="w-full border p-2 rounded"
                value={editItem.name}
                onChange={e => setEditItem({ ...editItem, name: e.target.value })}
              />
              <input
                className="w-full border p-2 rounded"
                value={editItem.category}
                onChange={e => setEditItem({ ...editItem, category: e.target.value })}
              />
              <input
                className="w-full border p-2 rounded"
                value={editItem.price}
                onChange={e => setEditItem({ ...editItem, price: e.target.value })}
              />
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={editItem.piece}
                onChange={e => setEditItem({ ...editItem, piece: Number(e.target.value) })}
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setEditItem(null)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HOC(ProductStock);
