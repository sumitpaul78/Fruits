import React from 'react'
import "@styles/bootstrap.min.css";
import "@styles/animate.min.css";
import "@styles/font-awesome.min.css";
import "@styles/slick.min.css";
import "@styles/style.css";
import "@styles/main-color.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import { useEffect } from 'react'


const MainLayout = () => {
  //   useEffect(() =>{ 
  //   const script = document.createElement("script");
  //   script.src = "/js/custom.js";
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
      
    </>
  )
}

export default MainLayout
