import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice"
import blogReducer from "../features/latestBlogSlice"
// import userReducer from "../features/latestBlogSlice"
import orderReducer from "../features/orderSlice"
import userReducer from "../features/userRoleSlice"

export const store = configureStore({
    reducer:{
        allCart: cartReducer,
        products: productReducer,        
        blogs: blogReducer,       
        orderlist:orderReducer,      
        userlist:userReducer,      
    },
});