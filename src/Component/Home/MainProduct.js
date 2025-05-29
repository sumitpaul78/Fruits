import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../features/productSlice";
import CurrencyFormat from "../../global-component/CurrencyFormat";
import TodayDeal from "./TodayDeal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const MainProduct = () =>{
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
   useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

 const visibleProducts = products.filter((item) => item.isActive &&  item.isLatest);
 
    return(
        <>
            <div className="Product-box sm-margin-top-96px xs-margin-top-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-6">
                            <div className="advance-product-box">
                                
                                <TodayDeal />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-6">
                            <div className="advance-product-box">
                                <div className="biolife-title-box bold-style biolife-title-box__bold-style">
                                    <h3 className="title">Deals of the day</h3>
                                    <p className="pt-4">Organic food, fresh or processed food produced by organic farming methods.
                                    Organic food is grown without the use of synthetic chemicals, such as human-made 
                                    pesticides and fertilizers, and does not contain genetically modified organisms (GMOs).</p>
                                    <p>
                                        Organic foods include fresh produce, meats, and dairy products as well as processed 
                                        foods such as crackers, drinks, and frozen meals. The market for organic food has grown
                                         significantly since the late 20th century, becoming a multibillion dollar industry with distinct production, processing, distribution, and retail systems
                                    </p>
                                </div>
                                {/* <ul className="products eq-height-contain nav-center-03 nav-none-on-mobile row-space-29px">
                               
                                 {visibleProducts.length === 0 ? (
                                    <p className="text-center">No products available.</p>
                                         ) : (
                                    visibleProducts.map((item) => (
                                  
                                        <li className="product-item"  key={item.product_id}>
                                        <div className="contain-product right-info-layout contain-product__right-info-layout">
                                            <div className="product-thumb">
                                             
                                                <Link to={`/${item.product_id}`} className="link-to-product">
                                                    <img src={item.imageURL} alt="dd" width="270" height="270" className="product-thumnail" />
                                                </Link>
                                            </div>
                                            <div className="info">
                                                <b className="categories">Vegetables</b>
                                                <h4 className="product-title"><Link to={`${item.product_id}`}  className="pr-name">{item.product_name}</Link></h4>
                                                <div className="price ">
                                                    <ins><span className="price-amount"><span className="currencySymbol"></span> <CurrencyFormat value={item.product_price} /> </span></ins>
                                                    <del><span className="price-amount"><span className="currencySymbol"></span> <CurrencyFormat value={item.product_price} /></span></del>
                                                </div>
                                                <div className="rating">
                                                    <p className="star-rating"><span className="width-80percent"></span></p>
                                                    <span className="review-count">(05 Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                 
                                     ))
                                    )}
                                </ul> */}
                                <div className="biolife-banner style-01 biolife-banner__style-01 xs-margin-top-80px-im sm-margin-top-30px-im">
                                    <div className="banner-contain">
                                        <Link href="#" className="bn-link"></Link>
                                        <div className="text-content">
                                            <span className="first-line">Daily Fresh</span>
                                            <b className="second-line">Natural</b>
                                            <i className="third-line">Fresh Food</i>
                                            <span className="fourth-line">Premium Quality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default MainProduct;