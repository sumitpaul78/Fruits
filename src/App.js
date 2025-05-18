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



function App() {
  useEffect(() =>{ 
    const script = document.createElement("script");
    script.src = "js/custom.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

 
  
  return (
    <BrowserRouter>
        {/* <Header /> */}
        {/* <MainLayout /> */}
        <Routes>
          <Route path="/" element={<MainLayout />} > 
          <Route index element={<HomePage />} />
          <Route path="/cart"  element={<CartPage />} />
          <Route path="/checkout"  element={<Checkout />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/signin"  element={<SignIn />} />
          <Route path="/:id"  element={<SingleProduct />} />
          <Route path="/nopage" element={<Nopage />} />
          <Route path="*" element={<Navigate to="/nopage" />} />
          </Route>
      
        <Route path="/" element={<DashboradLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/addproduct" element={<ProductAdd />} />
          <Route path="/productlist" element={<Pagecontent />} />
        
        </Route>
        </Routes>
        <Toaster />
       
    </BrowserRouter>

  );
}

export default App;
