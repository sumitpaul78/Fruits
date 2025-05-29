import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice"
import blogReducer from "../features/latestBlogSlice"
import userReducer from "../features/latestBlogSlice"

export const store = configureStore({
    reducer:{
        allCart: cartReducer,
        products: productReducer,        
        blogs: blogReducer,  
        user: userReducer,      
    },
});