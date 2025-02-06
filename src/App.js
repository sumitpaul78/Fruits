import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/font-awesome.min.css";
import "../src/assets/css/nice-select.css";
import "../src/assets/css/slick.min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/main-color.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import HomePage from "./Pages/Home/mainpage";
import SingleProduct from "./Pages/singleProduct";
import './App.css'; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./Pages/cart";
import Checkout from "./Pages/checkout";



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
        <Header />
        <Routes>
          <Route path="/" exact="true" element={<HomePage />} /> 
          <Route path="/cart" exact="true" element={<CartPage />} />
          <Route path="/checkout" exact="true" element={<Checkout />} />
          <Route path="/:productID" exact="true" element={<SingleProduct />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    

  );
}

export default App;
