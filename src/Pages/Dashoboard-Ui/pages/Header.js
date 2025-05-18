import React from 'react'

const Header = () => {
  return (
    <>
               <header className="topbar">
               <div className="container-fluid">
                    <div className="navbar-header">
                         <div className="d-flex align-items-center">
                              
                              <div className="topbar-item">
                                   <button type="button" className="button-toggle-menu me-2">
                                        <iconify-icon icon="solar:hamburger-menu-broken" className="fs-24 align-middle"></iconify-icon>
                                   </button>
                              </div>

                              
                              <div className="topbar-item">
                                   <h4 className="fw-bold topbar-button pe-none text-uppercase mb-0">Welcome!</h4>
                              </div>
                         </div>

                         <div className="d-flex align-items-center gap-1">

                              
                              <div className="topbar-item">
                                   <button type="button" className="topbar-button" id="light-dark-mode">
                                           <iconify-icon icon="solar:users-group-two-rounded-bold-duotone" className="fs-24 align-middle"></iconify-icon>
                                   </button>
                              </div>
                           
                             
                              <form className="app-search d-none d-md-block ms-2">
                                   <div className="position-relative">
                                        <input type="search" className="form-control" placeholder="Search..." autocomplete="off" value="" />
                                        <iconify-icon icon="solar:magnifer-linear" className="search-widget-icon"></iconify-icon>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </header>
    </>
  )
}

export default Header
