import React from "react";

import "../../assets/css/bootstrap.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/nice-select.css";
import "../../assets/css/slick.min.css";
import "../../assets/css/style.css";
import "../../assets/css/main-color.css";


import { Link } from "react-router-dom";
import Logo from "../../assets/images/organic-3.png";
import Sidenav from "./Sidenav";
import Primarymenu from "./Primarymenu";
import { useSelector } from "react-redux";

const Header =()=>{
    const {cart,totalQuantity,totalPrice} = useSelector(
        (state) => state.allCart
    );
    return(
        <>
        {/* <div id="biof-loading">
            <div className="biof-loading-center">
                <div className="biof-loading-center-absolute">
                    <div className="dot dot-one"></div>
                    <div className="dot dot-two"></div>
                    <div className="dot dot-three"></div>
                </div>
            </div>
        </div> */}
    
        <div id="header" className="header-area style-01 layout-03">
            <div className="header-top bg-main hidden-xs">
                <div className="container">
                    <div className="top-bar left">
                        <ul className="horizontal-menu">
                            <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>Organic@company.com</a></li>
                            <li><a href="#">Free Shipping for all Order of $99</a></li>
                        </ul>
                    </div>
                    <div className="top-bar right">
                        <ul className="social-list">
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        </ul>
                        <ul className="horizontal-menu">
                            <li className="horz-menu-item currency">
                                <select name="currency">
                                    <option value="eur">€ EUR (Euro)</option>
                                    <option value="usd" selected>$ USD (Dollar)</option>
                                    <option value="usd">£ GBP (Pound)</option>
                                    <option value="usd">¥ JPY (Yen)</option>
                                </select>
                            </li>
                            <li className="horz-menu-item lang">
                                <select name="language">
                                    <option value="fr">French (EUR)</option>
                                    <option value="en" selected>English (USD)</option>
                                    <option value="ger">Germany (GBP)</option>
                                    <option value="jp">Japan (JPY)</option>
                                </select>
                            </li>
                            <li><Link to={'/login'} className="login-link"><i className="biolife-icon icon-login"></i>Login/Register</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-middle biolife-sticky-object ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-md-6 col-xs-6">
                                <Link className="biolife-logo" to={'/'}>
                                <img src={Logo} alt="biolife logo" width="135" height="34" />
                                </Link>
                        </div>
                        <div className="col-lg-6 col-md-7 hidden-sm hidden-xs">
                           <Primarymenu />
                        </div>
                        <div className="col-lg-3 col-md-3 col-md-6 col-xs-6">
                            <div className="biolife-cart-info">
                                <div className="mobile-search">
                                    <a href="javascript:void(0)" className="open-searchbox"><i className="biolife-icon icon-search"></i></a>
                                    <div className="mobile-search-content">
                                        <form action="#" className="form-search" name="mobile-seacrh" method="get">
                                            <a href="#" className="btn-close"><span className="biolife-icon icon-close-menu"></span></a>
                                            <input type="text" name="s" className="input-text" value="" placeholder="Search here..." />
                                            <select name="category">
                                                <option value="-1" selected>All Categories</option>
                                                <option value="vegetables">Vegetables</option>
                                                <option value="fresh_berries">Fresh Berries</option>
                                                <option value="ocean_foods">Ocean Foods</option>
                                                <option value="butter_eggs">Butter & Eggs</option>
                                                <option value="fastfood">Fastfood</option>
                                                <option value="fresh_meat">Fresh Meat</option>
                                                <option value="fresh_onion">Fresh Onion</option>
                                                <option value="papaya_crisps">Papaya & Crisps</option>
                                                <option value="oatmeal">Oatmeal</option>
                                            </select>
                                            <button type="submit" className="btn-submit">go</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="wishlist-block hidden-sm hidden-xs">
                                    <a href="#" className="link-to">
                                        <span className="icon-qty-combine">
                                            <i className="icon-heart-bold biolife-icon"></i>
                                            <span className="qty">0</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="minicart-block">
                                    <div className="minicart-contain">
                                        <Link to={'/'} className="link-to">
                                                <span className="icon-qty-combine">
                                                    <i className="icon-cart-mini biolife-icon"></i>
                                                    <span className="qty">{cart.length}</span>
                                                </span>
                                            <span className="title">My Cart -</span>
                                            <span className="sub-total">$0.00</span>
                                        </Link>
                                        <div className="cart-content">
                                            <div className="cart-inner">
                                                <ul className="products">
                                                {cart.map((item) =>(
                                                        <li>
                                                        <div className="minicart-item">
                                                            <div className="thumb">
                                                                <Link to={`/${item.id}`}><img src={item.proimg} width="90" height="90" alt="National Fresh" /></Link>
                                                            </div>
                                                            <div className="left-info">
                                                                <div className="product-title"><Link to={`/${item.id}`}  className="product-name">{item.title}</Link></div>
                                                                <div className="price">
                                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>{item.discountprice}</span></ins>
                                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>{item.price}</span></del>
                                                                </div>
                                                                <div className="qty">
                                                                    <label for="cart[id123][qty]">Qty:</label>
                                                                    <input type="number" className="input-qty" name="cart[id123][qty]"  value={item.quantity} disabled />
                                                                </div>
                                                            </div>
                                                            {/* <div className="action">
                                                                <a href="#" className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                                                <a href="" className="remove"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                                                            </div> */}
                                                        </div>
                                                    </li>

                                                ))};
                                                </ul>
                                                <p className="btn-control">
                                                    <Link to="/cart" className="btn view-cart">view cart</Link>
                                                    <Link to={"/checkout"} className="btn">checkout</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-menu-toggle">
                                    <a className="btn-toggle" data-object="open-mobile-menu" href="javascript:void(0)">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidenav />
        </div>
        </>
    );
}
export default Header;