import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import { addToCart } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../global-component/CurrencyFormat";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const TodayDeal = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
   useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const visibleProducts = products.filter((item) => item.isActive &&  item.isDealpro);

  const settings = { 
  arrows: true,
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  // add any other slick settings you want
 };

  return (
    <>
             {visibleProducts.length === 0 ? (
                <span className="text-center">No products available.</span>
                ) : (
               <Slider {...settings} className="biolife-carousel nav-top-right nav-none-on-mobile">
                                   
              
                   {visibleProducts.map((item) => (
                 
                    <li className="product-item" key={item.product_id}>
                        <div className="contain-product deal-layout contain-product__deal-layout">
                        <div className="product-thumb">
                            <Link to={`/${item.product_id}`} className="link-to-product">
                            <img
                                src={item.imageURL}
                                alt="dd"
                                width="330"
                                height="330"
                                className="product-thumnail"
                            />
                            </Link>
                            <div className="labels">
                            <span className="sale-label">-50%</span>
                            </div>
                        </div>
                        <div className="info">
                            <div
                            className="biolife-countdown"
                            data-datetime="2020/02/18 00:00:00"
                            ></div>
                            <b className="categories">Fresh Fruit</b>
                            <h4 className="product-title">
                            <Link to={`/${item.product_id}`} className="pr-name">
                                {item.product_name}
                            </Link>
                            </h4>
                            <div className="price ">
                            <ins>
                                <span className="price-amount">
                                <span className="currencySymbol"></span><CurrencyFormat value={item.product_price} />
                                </span>
                            </ins>
                            <del>
                                <span className="price-amount">
                                <span className="currencySymbol"></span><CurrencyFormat value={item.product_price} />
                                </span>
                            </del>
                            </div>
                            <div className="slide-down-box">
                            <p className="message">
                                All products are carefully selected to ensure food safety.
                            </p>
                            <div className="buttons">
                                <Link href="/" className="btn wishlist-btn">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </Link>
                                <Link to="/" className="btn add-to-cart-btn" onClick={() => dispatch(addToCart(item))}>
                                add to cart
                                </Link>
                                {/* <Link href="#" className="btn compare-btn">
                                <i className="fa fa-random" aria-hidden="true"></i>
                                </Link> */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                     ))}
                    </Slider>
                   )}
      
    </>
  );
};

export default TodayDeal;
