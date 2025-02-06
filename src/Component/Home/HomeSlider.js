import { Link } from "react-router-dom";
import slide1 from "../../assets/images/home-03/slide-01-child-01.png";
import slide2 from "../../assets/images/home-03/slide-01-child-01.png";
import short_banner from "../../assets/images/home-03/bn_special_org.jpg";
import { addToCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const HomeSlider =()=>{
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();


    return(
        <>
                 <div className="main-slide block-slider">
                <ul className="biolife-carousel nav-none-on-mobile" data-slick='{"arrows": true, "dots": false, "slidesMargin": 0, "slidesToShow": 1, "infinite": true, "speed": 800}' >
                    <li>
                        <div className="slide-contain slider-opt03__layout01">
                            <div className="media">
                                <div className="child-elememt">
                                    <Link to="/" className="link-to">
                                        <img src={slide1} width="604" height="580" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="text-content">
                                <i className="first-line">Pomegranate</i>
                                <h3 className="second-line">Vegetables 100% Organic</h3>
                                <p className="third-line">A blend of freshly squeezed green apple & fruits</p>
                                <p className="buttons">
                                    <a href="#" className="btn btn-bold">Shop now</a>
                                    <a href="#" className="btn btn-thin">View lookbook</a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide-contain slider-opt03__layout01">
                            <div className="media">
                                <div className="child-elememt">
                                <Link to="/" className="link-to">
                                        <img src={slide2} width="604" height="580" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="text-content">
                                <i className="first-line">Pomegranate</i>
                                <h3 className="second-line">Vegetables 100% Organic</h3>
                                <p className="third-line">A blend of freshly squeezed green apple & fruits</p>
                                <p className="buttons">
                                    <a href="#" className="btn btn-bold">Shop now</a>
                                    <a href="#" className="btn btn-thin">View lookbook</a>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="special-slide">
                <div className="container">
                    <ul className="biolife-carousel dots_ring_style" data-slick='{"arrows": false, "dots": true, "slidesMargin": 30, "slidesToShow": 1, "infinite": true, "speed": 800, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 1}},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":20, "dots": false}},{"breakpoint":480, "settings":{ "slidesToShow": 1}}]}' >
                    {items.map((item) =>(
                        <span key={item.id}>
                        <li>
                            <div className="slide-contain biolife-banner__special">
                                <div className="banner-contain">
                                    <div className="media">
                                        <a href="#" className="bn-link">
                                            <figure><img src={short_banner} width="616" height="483" alt="" /></figure>
                                        </a>
                                    </div>
                                    <div className="text-content">
                                        <b className="first-line">{item.title}</b>
                                        <span className="second-line">Organic Heaven Made</span>
                                        <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                        <div className="product-detail">
                                            <h4 className="product-name">National Fresh Fruit Production</h4>
                                            <div className="price price-contain">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>{item.discountprice}</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>{item.price}</span></del>
                                            </div>
                                            <div className="buttons">
                                                <Link to="/" onClick={() => dispatch(addToCart(item))}  className="btn add-to-cart-btn">add to cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <li>
                            <div className="slide-contain biolife-banner__special">
                                <div className="banner-contain">
                                    <div className="media">
                                        <a href="#" className="bn-link">
                                            <figure><img src={short_banner} width="616" height="483" alt="" /></figure>
                                        </a>
                                    </div>
                                    <div className="text-content">
                                        <b className="first-line">Pomegranate</b>
                                        <span className="second-line">Organic Heaven Made</span>
                                        <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                        <div className="product-detail">
                                            <h4 className="product-name">National Fresh Fruit Production</h4>
                                            <div className="price price-contain">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="buttons">
                                                <a href="#" className="btn add-to-cart-btn">add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slide-contain biolife-banner__special">
                                <div className="banner-contain">
                                    <div className="media">
                                        <a href="#" className="bn-link">
                                            <figure><img src={short_banner} width="616" height="483" alt="" /></figure>
                                        </a>
                                    </div>
                                    <div className="text-content">
                                        <b className="first-line">Pomegranate</b>
                                        <span className="second-line">Organic Heaven Made</span>
                                        <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                        <div className="product-detail">
                                            <h4 className="product-name">National Fresh Fruit Production</h4>
                                            <div className="price price-contain">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="buttons">
                                                <a href="#" className="btn add-to-cart-btn">add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slide-contain biolife-banner__special">
                                <div className="banner-contain">
                                    <div className="media">
                                        <a href="#" className="bn-link">
                                            <figure><img src={short_banner} width="616" height="483" alt="" /></figure>
                                        </a>
                                    </div>
                                    <div className="text-content">
                                        <b className="first-line">Pomegranate</b>
                                        <span className="second-line">Organic Heaven Made</span>
                                        <span className="third-line">Easy <i>Healthy, Happy Life</i></span>
                                        <div className="product-detail">
                                            <h4 className="product-name">National Fresh Fruit Production</h4>
                                            <div className="price price-contain">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="buttons">
                                                <a href="#" className="btn add-to-cart-btn">add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                        </span>
                    ))}
                        
                    </ul>
                    <div className="biolife-service type01 biolife-service__type01 sm-margin-top-0 xs-margin-top-45px">
                        <b className="txt-show-01">100%Nature</b>
                        <i className="txt-show-02">Fresh Fruits</i>
                        <ul className="services-list">
                            <li>
                                <div className="service-inner">
                                    <span className="number">1</span>
                                    <span className="biolife-icon icon-beer"></span>
                                    <a className="srv-name" href="#">full stamped product</a>
                                </div>
                            </li>
                            <li>
                                <div className="service-inner">
                                    <span className="number">2</span>
                                    <span className="biolife-icon icon-schedule"></span>
                                    <a className="srv-name" href="#">place and delivery on time</a>
                                </div>
                            </li>
                            <li>
                                <div className="service-inner">
                                    <span className="number">3</span>
                                    <span className="biolife-icon icon-car"></span>
                                    <a className="srv-name" href="#">Free shipping in the city</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default HomeSlider;