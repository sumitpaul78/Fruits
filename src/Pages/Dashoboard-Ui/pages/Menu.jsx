import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo-white.png";

const Menu = () => {
  return (
    <>
      <div className="main-nav">
        <div className="logo-box">
          {/* <a href="index.html" className="logo-dark">
            <img
              src="assets/images/logo-sm.png"
              className="logo-sm"
              alt="logo sm"
            />
            <img
              src="assets/images/logo-dark.png"
              className="logo-lg"
              alt="logo dark"
            />
          </a> */}

          <a href="index.html" className="logo-light">
            <Link className="biolife-logo" to={"/"}>
              <img src={Logo} alt="biolife logo" width="135" height="34" />
            </Link>
          </a>
        </div>

        {/* <button
          type="button"
          className="button-sm-hover"
          aria-label="Show Full Sidebar"
        >
          <iconify-icon
            icon="solar:double-alt-arrow-right-bold-duotone"
            className="button-sm-hover-icon"
          ></iconify-icon>
        </button> */}

        <div className="scrollbar" data-simplebar>
          <ul className="navbar-nav" id="navbar-nav">
            <li className="menu-title">General</li>

            <li className="nav-item">
              <Link className="nav-link" to={"/dashboard"}>
                <span className="nav-icon">
                  <iconify-icon icon="solar:widget-5-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Dashboard </span>
              </Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link menu-arrow"
                href="#sidebarProducts"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarProducts"
              >
                <span className="nav-icon">
                  <iconify-icon icon="solar:t-shirt-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Products</span>
              </a>
              <div className="collapse" id="sidebarProducts">
                <ul className="nav sub-navbar-nav">
                  <li className="sub-nav-item">
                    <Link className="sub-nav-link" to={"/addproduct"}>
                      Create
                    </Link>
                  </li>
                  <li className="sub-nav-item">
                    <Link className="sub-nav-link" to={"/dashboard/productlist"}>
                      Product List
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a
                className="nav-link menu-arrow"
                href="#sidebarCategory"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarCategory"
              >
                <span className="nav-icon">
                  <iconify-icon icon="solar:clipboard-list-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Blog Post </span>
              </a>
              <div className="collapse" id="sidebarCategory">
                <ul className="nav sub-navbar-nav">
                  <li className="sub-nav-item">
                    <Link
                      className="sub-nav-link"
                      to={"/dashboard/addblog"}
                    >
                      Create
                    </Link>
                  </li>
                  <li className="sub-nav-item">
                    <Link
                      className="sub-nav-link"
                      to={"/dashboard/bloglist"}
                    >
                      Blog List
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a
                className="nav-link menu-arrow"
                href="#sidebarInventory"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarInventory"
              >
                <span className="nav-icon">
                  <iconify-icon icon="solar:box-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Inventory </span>
              </a>
              <div className="collapse" id="sidebarInventory">
                <ul className="nav sub-navbar-nav">
                  <li className="sub-nav-item">
                    <Link className="sub-nav-link" to="/dashboard/inventory">
                      Warehouse Product
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a
                className="nav-link menu-arrow"
                href="#sidebarOrders"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarOrders"
              >
                <span className="nav-icon">
                  <iconify-icon icon="solar:bag-smile-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Orders </span>
              </a>
              <div className="collapse" id="sidebarOrders">
                <ul className="nav sub-navbar-nav">
                  <li className="sub-nav-item">
                    <Link className="sub-nav-link" to="/dashboard/oderlist">
                      Order list
                    </Link>
                  </li>
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="order-detail.html">
                      Details
                    </a>
                  </li>
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="order-cart.html">
                      Cart
                    </a>
                  </li>
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="order-checkout.html">
                      Check Out
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a
                className="nav-link menu-arrow"
                href="#sidebarPurchases"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarPurchases"
              >
                <span className="nav-icon">
                  <iconify-icon icon="solar:card-send-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Purchases </span>
              </a>
              <div className="collapse" id="sidebarPurchases">
                <ul className="nav sub-navbar-nav">
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="purchase-list.html">
                      List
                    </a>
                  </li>
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="purchase-order.html">
                      Order
                    </a>
                  </li>
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="purchase-returns.html">
                      Return
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-title mt-2">Users</li>

            <li className="nav-item">
              <a className="nav-link" href="pages-profile.html">
                <span className="nav-icon">
                  <iconify-icon icon="solar:chat-square-like-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Profile </span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link menu-arrow"
                href="#sidebarRoles"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarRoles"
              >
                <span className="nav-icon">
                  <iconify-icon icon="solar:user-speak-rounded-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Roles </span>
              </a>
              <div className="collapse" id="sidebarRoles">
                <ul className="nav sub-navbar-nav">
                  <ul className="nav sub-navbar-nav">
                    <li className="sub-nav-item">
                      <Link to="/dashboard/userrole" className="sub-nav-link">
                        List
                      </Link>
                    </li>
                    
                  </ul>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="pages-permissions.html">
                <span className="nav-icon">
                  <iconify-icon icon="solar:checklist-minimalistic-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Permissions </span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link menu-arrow"
                href="#sidebarCustomers"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarCustomers"
              >
                <span className="nav-icon">
                  <iconify-icon icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Customers </span>
              </a>
              <div className="collapse" id="sidebarCustomers">
                <ul className="nav sub-navbar-nav">
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="customer-list.html">
                      List
                    </a>
                  </li>
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="customer-detail.html">
                      Details
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a
                className="nav-link menu-arrow"
                href="#sidebarSellers"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarSellers"
              >
                <span className="nav-icon">
                  <iconify-icon icon="solar:shop-bold-duotone"></iconify-icon>
                </span>
                <span className="nav-text"> Sellers </span>
              </a>
              <div className="collapse" id="sidebarSellers">
                <ul className="nav sub-navbar-nav">
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="seller-list.html">
                      List
                    </a>
                  </li>
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="seller-details.html">
                      Details
                    </a>
                  </li>
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="seller-edit.html">
                      Edit
                    </a>
                  </li>
                  <li className="sub-nav-item">
                    <a className="sub-nav-link" href="seller-add.html">
                      Create
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
