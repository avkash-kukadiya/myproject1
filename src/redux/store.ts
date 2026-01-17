import { configureStore } from "@reduxjs/toolkit";
// import CrudSlice from "./slices/crudSlice";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import productReducer from "./slices/productSlice";
export const store = configureStore({
    reducer:{
        // crud: CrudSlice
        product:productReducer
    }
})

export const useAppDispatch:()=> typeof store.dispatch = useDispatch
export const useAppSelctor:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch