import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../assets/css/bootstrap.min.css";
// import "../../assets/css/animate.min.css";
// import "../../assets/css/font-awesome.min.css";
// import "../../assets/css/nice-select.css";
// import "../../assets/css/slick.min.css";
// import "../../assets/css/style.css";
// import "../../assets/css/main-color.css";

import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

// import "../../assets/js/jquery-3.4.1.min"
// // import "../../assets/js/bootstrap.min"
// import "../../assets/js/jquery.countdown.min"
// import "../../assets/js/jquery.nice-select.min"
// import "../../assets/js/jquery.nicescroll.min"
// import "../../assets/js/slick.min"
// import "../../assets/js/biolife.framework"
// import "../../assets/js/custom"

const MainLayout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
      
    </>
  )
}

export default MainLayout
