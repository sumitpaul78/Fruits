import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";


const Productlist = () =>{
   
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();
      return(
        <>
             <ul className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":25 }},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'>
            {items.map((item) =>(
                <span key={item.id}>
                    <li className="product-item">
                    <div className="contain-product layout-default">
                        <div className="product-thumb">
                        <Link to={`/${item.id}`} className="link-to-product">
                        <img src={item.proimg} alt="Vegetables" width="270" height="270" className="product-thumnail" />
                        </Link>
                        <Link to={`/${item.id}`} className="lookup btn_call_quickview"><i className="biolife-icon icon-search"></i></Link>
                        </div>
                        <div className="info">
                        <b className="categories">{item.category}</b>
                        <h4 className="product-title"><Link to={`/${item.id}`} className="pr-name">{item.title}</Link></h4>
                        <div className="price ">
                        <ins><span className="price-amount"><span className="currencySymbol">£</span>{item.discountprice}</span></ins>
                        <del><span className="price-amount"><span className="currencySymbol">£</span>{item.price}</span></del>
                        </div>
                        <div className="slide-down-box">
                        <p className="message">{item.description}</p>
                        <div className="buttons">
                         <Link to="/" className="btn wishlist-btn"><i className="fa fa-heart" aria-hidden="true"></i></Link>
                         <Link to="/" onClick={() => dispatch(addToCart(item))} className="btn add-to-cart-btn"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i>add to cart</Link>
                         <Link to="/" className="btn compare-btn"><i className="fa fa-random" aria-hidden="true"></i></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    </li>
                    </span>
                ))}
          </ul>
        </>
    );
};

export default Productlist;