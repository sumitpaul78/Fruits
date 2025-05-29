import React from 'react'

import { Outlet } from 'react-router-dom'
import "../../assets/utils/dashboard-css/vendor.min.css"
import "../../assets/utils/dashboard-css/icons.min.css"
import "../../assets/utils/dashboard-css/app.min.css"
import "../../assets/utils/config"
import Header from './pages/Header'
import Menu from './pages/Menu';

const DashboradLayout = () => {
  return (
    <>
        <div className="wrapper">
          <Header />
          <Menu />
          <Outlet />
     </div>
    </>
  )
}

export default DashboradLayout
