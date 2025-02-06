import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const MainProduct = () =>{
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    return(
        <>
            <div className="Product-box sm-margin-top-96px xs-margin-top-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-6">
                            <div className="advance-product-box">
                                <div className="biolife-title-box bold-style biolife-title-box__bold-style">
                                    <h3 className="title">Deals of the day</h3>
                                </div>
                                <ul className="products biolife-carousel nav-top-right nav-none-on-mobile" data-slick='{"arrows":true, "dots":false, "infinite":false, "speed":400, "slidesMargin":30, "slidesToShow":1}'>
                                    <li className="product-item">
                                        <div className="contain-product deal-layout contain-product__deal-layout">
                                            <div className="product-thumb">
                                                <a href="#" className="link-to-product">
                                                    <img src="../../images/home-03/product_deal_330x330.jpg" alt="dd" width="330" height="330" className="product-thumnail" />
                                                </a>
                                                <div className="labels">
                                                    <span className="sale-label">-50%</span>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <div className="biolife-countdown" data-datetime="2020/02/18 00:00:00"></div>
                                                <b className="categories">Fresh Fruit</b>
                                                <h4 className="product-title"><a href="#" className="pr-name">National Fresh Fruit</a></h4>
                                                <div className="price ">
                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                </div>
                                                <div className="slide-down-box">
                                                    <p className="message">All products are carefully selected to ensure food safety.</p>
                                                    <div className="buttons">
                                                        <a href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                                        <a href="#"  className="btn add-to-cart-btn">add to cart</a>
                                                        <a href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product-item">
                                        <div className="contain-product deal-layout contain-product__deal-layout">
                                            <div className="product-thumb">
                                                <a href="#" className="link-to-product">
                                                    <img src="../../images/home-03/product_deal-02_330x330.jpg" alt="dd" width="330" height="330" className="product-thumnail" />
                                                </a>
                                                <div className="labels">
                                                    <span className="sale-label">-50%</span>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <div className="biolife-countdown" data-datetime="2020/04/18 00:00:00"></div>
                                                <b className="categories">Fresh Fruit</b>
                                                <h4 className="product-title"><a href="#" className="pr-name">National Fresh Fruit</a></h4>
                                                <div className="price ">
                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                </div>
                                                <div className="slide-down-box">
                                                    <p className="message">All products are carefully selected to ensure food safety.</p>
                                                    <div className="buttons">
                                                        <a href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                                        <a href="#" className="btn add-to-cart-btn">add to cart</a>
                                                        <a href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product-item">
                                        <div className="contain-product deal-layout contain-product__deal-layout">
                                            <div className="product-thumb">
                                                <a href="#" className="link-to-product">
                                                    <img src="../../images/home-03/product_deal-03_330x330.jpg" alt="dd" width="330" height="330" className="product-thumnail" />
                                                </a>
                                                <div className="labels">
                                                    <span className="sale-label">-50%</span>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <div className="biolife-countdown" data-datetime="2020/01/18 00:00:00"></div>
                                                <b className="categories">Fresh Fruit</b>
                                                <h4 className="product-title"><a href="#" className="pr-name">National Fresh Fruit</a></h4>
                                                <div className="price ">
                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                </div>
                                                <div className="slide-down-box">
                                                    <p className="message">All products are carefully selected to ensure food safety.</p>
                                                    <div className="buttons">
                                                        <a href="#" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                                                        <a href="#" className="btn add-to-cart-btn">add to cart</a>
                                                        <a href="#" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-6">
                            <div className="advance-product-box">
                                <div className="biolife-title-box bold-style biolife-title-box__bold-style">
                                    <h3 className="title">Top Rated Products</h3>
                                </div>
                                <ul className="products biolife-carousel eq-height-contain nav-center-03 nav-none-on-mobile row-space-29px" data-slick='{"rows":2,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":2,"responsive":[{"breakpoint":1200,"settings":{ "rows":2, "slidesToShow": 2}},{"breakpoint":992, "settings":{ "rows":2, "slidesToShow": 1}},{"breakpoint":768, "settings":{ "rows":2, "slidesToShow": 2}},{"breakpoint":500, "settings":{ "rows":2, "slidesToShow": 1}}]}'>
                                 {items.map((item) =>(
                                    <span key={item.id}>
                                        <li className="product-item">
                                        <div className="contain-product right-info-layout contain-product__right-info-layout">
                                            <div className="product-thumb">
                                               { /* its hits singleProduct.js */}
                                                <Link to={`/${item.id}`} className="link-to-product">
                                                    <img src={item.proimg} alt="dd" width="270" height="270" className="product-thumnail" />
                                                </Link>
                                            </div>
                                            <div className="info">
                                                <b className="categories">Vegetables</b>
                                                <h4 className="product-title"><Link to={`${item.id}`}  className="pr-name">{item.title}</Link></h4>
                                                <div className="price ">
                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                </div>
                                                <div className="rating">
                                                    <p className="star-rating"><span className="width-80percent"></span></p>
                                                    <span className="review-count">(05 Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    </span>
                                ))}
                                    

                                 
                                </ul>
                                <div className="biolife-banner style-01 biolife-banner__style-01 xs-margin-top-80px-im sm-margin-top-30px-im">
                                    <div className="banner-contain">
                                        <a href="#" className="bn-link"></a>
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