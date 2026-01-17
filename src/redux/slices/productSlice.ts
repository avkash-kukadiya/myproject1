import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  image: string;
  price: string;
  rating: number;
  reviews: number;
  title: string;
  fav: boolean;
}

interface ProductState {
  product: Product[];
}

const getProducts = (): Product[] =>
  JSON.parse(localStorage.getItem("product") || "[]");

/* Initial State */
const initialState: ProductState = {
  product: getProducts(),
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    Update: (state, action: PayloadAction<Product>) => {
      state.product = state.product.map((item) => {
        if (item.id == action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    Delete: (state, action: PayloadAction<number>) => {
      console.log(action);
      state.product = state.product.filter((x) => x.id !== action.payload);
    },
    toggleFav: (state, action: PayloadAction<number>) => {
      const item = state.product.find((p: Product) => p.id === action.payload);

      if (item) {
        item.fav = !item.fav;
        localStorage.setItem("product", JSON.stringify(state.product));
      }
    },
  },
});
export const { Update, Delete, toggleFav } = productSlice.actions;
export default productSlice.reducer;
