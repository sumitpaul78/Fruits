import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import slide1 from "../../assets/images/home-03/slide-01-child-01.png";
// import slide2 from "../../assets/images/home-03/slide-01-child-01.png";
import short_banner from "../../assets/images/home-03/bn_special_org.jpg";
import about_img1 from "../../assets/images/about-us/about-01.jpg";
import about_img2 from "../../assets/images/about-us/about-02.jpg";
import about_img3 from "../../assets/images/about-us/about-farmer.png";
import about_img4 from "../../assets/images/about-us/organic-sticker.png";
import about_img5 from "../../assets/images/about-us/harvest.png";
import about_img6 from "../../assets/images/about-us/tractor.png";
import about_img7 from "../../assets/images/about-us/wheat.png";
import { addToCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import CurrencyFormat from "../../global-component/CurrencyFormat";
import Slider from "react-slick";
import Service from "./Service";


const HomeSlider =()=>{
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
   useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const visibleProducts = products.filter((item) => item.isActive &&  item.isDealpro);


  const settings = {"arrows": true, "dots": false, "slidesMargin": 0, "slidesToShow": 1, "infinite": true, "speed": 800};
  const settings1 = {"arrows": false, "dots": true, "slidesMargin": 30, "slidesToShow": 1, "infinite": true, "speed": 800, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 1}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":20, "dots": false}},{"breakpoint":480, "settings":{ "slidesToShow": 1}}]};
const specialOfferSettings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // ✅ Enable autoplay
  autoplaySpeed: 3, // ✅ Set interval (in ms) — change to your preferred speed
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

    return(
        <>
                 <div className="main-slide block-slider">
                     <Slider {...settings} className="biolife-carousel nav-none-on-mobile">
                
                    <li>
                        <div className="slide-contain slider-opt03__layout01">
                            <div className="media">
                                <div className="child-elememt">
                                    {/* <Link to="/" className="link-to">
                                        <img src={slide1} width="604" height="580" alt="" />
                                    </Link> */}
                                </div>
                                <div className="text-content">
                                <i className="first-line">Pomegranate</i>
                                <h3 className="second-line">Vegetables 100% Organic</h3>
                                <p className="third-line">A blend of freshly squeezed green apple & fruits</p>
                                <p className="buttons">
                                    <Link href="#" className="btn btn-bold">Shop now</Link>
                                    <Link href="#" className="btn btn-thin">View lookbook</Link>
                                </p>
                            </div>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="slide-contain slider-opt03__layout01">
                            <div className="media">
                                <div className="child-elememt">
                                {/* <Link to="/" className="link-to">
                                        <img src={slide2} width="604" height="580" alt="" />
                                    </Link> */}
                                </div>
                                <div className="text-content">
                                <i className="first-line">Pomegranate</i>
                                <h3 className="second-line">Vegetables 100% Organic</h3>
                                <p className="third-line">A blend of freshly squeezed green apple & fruits</p>
                                <p className="buttons">
                                    <Link href="#" className="btn btn-bold">Shop now</Link>
                                    <Link href="#" className="btn btn-thin">View lookbook</Link>
                                </p>
                            </div>
                            </div>
                           
                        </div>
                    </li>
               </Slider>
            </div>

            <div className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                            <div className="about-img-grp">
                            <img src={about_img1} className="about_img1 img-fluid" />
                            <img src={about_img2} className="about_img2 img-fluid" />
                            <img src={about_img3} className="about_img3 img-fluid" />
                            <img src={about_img4} className="about_img4 img-fluid" />
                            </div>
                            
                        </div>
                         <div className="col-12 col-lg-6 col-md-6 col-sm-6">
                        <div className="about-body">
                                <h4 className="about-short-head">30 years of agriculture experience</h4>
                                <h1 className="about-main-head">Harvesting Innovation For Better Tomorrow!</h1>
                                <p>Agriculture is the backbone of our society, providing food, 
                                    materials, and economic stability. As the world population grows,
                                     the need for sustainable farming practices has never been more critical.</p>
                                <div className="d-flex about-content">
                                    <div className="about-short-txt d-flex">
                                    <img src={about_img5} width="50" height="50" className="img-fluid" />
                                    <h4>Growing Organic Fruits <br/>and Vegetables</h4>
                                    </div>
                                     <div className="about-short-txt d-flex">
                                    <img src={about_img6} width="50" height="50" className="img-fluid" />

                                    <h4 >Agribusiness Training <br/>and Workshops</h4>
                                    </div>
                                </div>
                                <ul className="about-lst">
                                    
                                    <li><img src={about_img7} className="img-fluid" width="20" height="20"/> Pioneering Excellence in the Agriculture Market</li>
                                    <li><img src={about_img7} className="img-fluid" width="20" height="20"/> Revolutionizing Agriculture for a Sustainable Future</li>
                                    <li><img src={about_img7} className="img-fluid" width="20" height="20"/> Driving Growth and Innovation in Agriculture</li>
                                </ul>
                                <div className="call-us">
                                    <div className="">
                                        <span><i class="fa fa-phone" aria-hidden="true"></i></span> +91-8989898989</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
             <Service />

{/* <div className="special-slide">
  <div className="container">
    <Slider {...specialOfferSettings}>
      {visibleProducts.map((item) => (
        <div key={item.product_id} className="slider-item">
          <div className="slide-contain biolife-banner__special">
            <div className="banner-contain">
              <div className="media">
                <figure>
                  <img src={item.imageURL} className="deal_img" alt={item.product_name} />
                </figure>
              </div>
              <div className="text-content">
                <b className="first-line"> Special Offer</b>
                <span className="second-line">Organic Heaven Made</span>
                <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                <div className="product-detail">
                  <h4 className="product-name">{item.product_name}</h4>
                  <div className="price price-contain">
                    <ins>
                      <span className="price-amount">
                        <CurrencyFormat value={item.product_price} />
                      </span>
                    </ins>
                    <del>
                      <span className="price-amount">
                        <CurrencyFormat value={item.product_price} />
                      </span>
                    </del>
                  </div>
                  <div className="buttons">
                    <Link to="/" onClick={() => dispatch(addToCart(item))} className="btn add-to-cart-btn">
                      add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div> */}


        </>
    );
}

export default HomeSlider;