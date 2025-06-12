import React, { useEffect } from "react";

import HomePage from "./Pages/Home/mainpage";
import SingleProduct from "./Pages/singleProduct";
import './App.css'; 
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import CartPage from "./Pages/cart";
import Checkout from "./Pages/checkout";
import Login from "./Pages/login";
import SignIn from "./Pages/signIn";
import DashboradLayout from "./Pages/Dashoboard-Ui/DashboradLayout";
import Nopage from "./Pages/Nopage";
import MainLayout from "./Component/Layout/MainLayout";
import ProductAdd from "./Pages/Dashoboard-Ui/pages/ProductAdd";
import Pagecontent from "./Pages/Dashoboard-Ui/pages/Productlist";
import DashboardHome from "./Pages/Dashoboard-Ui/pages/DashboardHome";
import BlogList from "./Pages/Dashoboard-Ui/pages/BlogList";
import BlogAdd from "./Pages/Dashoboard-Ui/pages/BlogAdd";
import UserRole from "./Pages/Dashoboard-Ui/pages/UserRole";
import Shop from "./Pages/Shop";
import Thankyou from "./Pages/Thankyou";
import OrdderList from "./Pages/Dashoboard-Ui/pages/OrderList";
import OrderDetails from "./Pages/Dashoboard-Ui/pages/OrderDetails";
import Contact from "./Pages/Contact";
import BlogDetails from "./Pages/BlogDetails";
import InventoryProduct from "./Pages/Dashoboard-Ui/pages/InventoryProduct";



function App() {
  // useEffect(() =>{ 
  //   const script = document.createElement("script");
  //   script.src = "/public/js/custom.js";
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

 
  
  return (
    <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<MainLayout />} > 
          <Route index element={<HomePage />} />
          <Route path="/cart"  element={<CartPage />} />
          <Route path="/shop"  element={<Shop />} />
          <Route path="/checkout"  element={<Checkout />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/signin"  element={<SignIn />} />
          <Route path="/:product_id"  element={<SingleProduct />} />
          <Route path="/blog"  element={<BlogDetails />} />
          <Route path="/contact"  element={<Contact />} />
        <Route path="/thankyou/:orderId" element={<Thankyou />} />
          <Route path="/nopage" element={<Nopage />} />
          <Route path="*" element={<Navigate to="/nopage" />} />
          </Route>
      
        <Route path="/" element={<DashboradLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/addproduct" element={<ProductAdd />} />
          <Route path="/dashboard/productlist" element={<Pagecontent />} />
          <Route path="/dashboard/addblog" element={<BlogAdd />} />
          <Route path="/dashboard/bloglist" element={<BlogList />} />
          <Route path="/dashboard/oderlist" element={<OrdderList />} />
          <Route path="/dashboard/orderlist/orderdetails/:order_id" element={<OrderDetails />} />
          <Route path="/dashboard/inventory" element={<InventoryProduct />} />
          <Route path="/dashboard/userrole" element={<UserRole />} />
        
        
          </Route>
        </Routes>
        <Toaster />
       
    </BrowserRouter>

  );
}

export default App;
