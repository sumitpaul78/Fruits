import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../features/cartSlice';


const Checkout = () => {

      const {cart,totalQuantity,totalPrice} = useSelector(
            (state) => state.allCart
        );
        
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(getCartTotal());
        }, [cart]);

  return (
    <>
    <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
    </div>
    
    <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><Link to={"/"} className="permal-link">Home</Link></li>
                <li className="nav-item"><span className="current-page">Shopping Checkout</span></li>
            </ul>
        </nav>
    </div>

    <div className="page-contain checkout">

        
        <div id="main-content" className="main-content">
            <div className="container sm-margin-top-37px">
                <div className="row">

                  
                    <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                        <div className="checkout-progress-wrap">
                            <ul className="steps">
                                <li className="step 1st">
                                    <div className="checkout-act active">
                                        <h3 className="title-box"><span className="number">1</span>Customer</h3>
                                        <div className="box-content">
                                            <p className="txt-desc">Checking out as a <a className="pmlink" href="#">Guest?</a> You’ll be able to save your details to create an account with us later.</p>
                                            <div className="login-on-checkout">
                                                <form action="#" name="frm-login" method="post">
                                                    <p className="form-row">
                                                        <label for="input_email">Email Address</label>
                                                        <input type="email" name="email" id="input_email" value="" placeholder="Your email" />
                                                        <button type="submit" name="btn-sbmt" className="btn">Continue As Guest</button>
                                                    </p>
                                                    <p className="form-row">
                                                        <input type="checkbox" name="subcribe" id="input_subcribe" />
                                                        <label for="input_subcribe">Subscribe to our newsletter</label>
                                                    </p>
                                                    <p className="msg">Already have an account? <a href="#" className="link-forward">Sign in now</a></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="step 2nd">
                                    <div className="checkout-act"><h3 className="title-box"><span className="number">2</span>Shipping</h3></div>
                                </li>
                                <li className="step 3rd">
                                    <div className="checkout-act"><h3 className="title-box"><span className="number">3</span>Billing</h3></div>
                                </li>
                                <li className="step 4th">
                                    <div className="checkout-act"><h3 className="title-box"><span className="number">4</span>Payment</h3></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                  
                    <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 sm-padding-top-48px sm-margin-bottom-0 xs-margin-bottom-15px">
                        <div className="order-summary sm-margin-bottom-80px">
                            <div className="title-block">
                                <h3 className="title">Order Summary</h3>
                            </div>
                            <div className="cart-list-box short-type">
                                <span className="number">{totalQuantity} items</span>
                                <ul className="cart-list">
                                {cart.map((item) =>(
                                 <span key={item.id}>
                                    <li className="cart-elem">
                                     <div className="cart-item">
                                      <div className="product-thumb">
                                        <a className="prd-thumb" href="#">
                                          <figure><img src={item.proimg} width="113" height="113" alt="shop-cart" /></figure>
                                        </a>
                                        </div>
                                    <div className="info">
                                        <span className="txt-quantity">{item.quantity}X</span>
                                         <a href="#" className="pr-name">{item.title}</a>
                                        </div>
                                    <div className="price price-contain">
                                        <ins><span className="price-amount"><span className="currencySymbol">£</span>{(item.quantity * item.discountprice).toFixed(2)}</span></ins>
                                         <del><span className="price-amount"><span className="currencySymbol">£</span>{(item.quantity * item.price).toFixed(2)}</span></del>
                                         </div>
                                        </div>
                                    </li>
                                    </span>
                                ))}
                                </ul>
                                <ul className="subtotal">
                                    <li>
                                        <div className="subtotal-line">
                                            <b className="stt-name">Subtotal</b>
                                            <span className="stt-price">£{totalPrice.toFixed(2)}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtotal-line">
                                            <b className="stt-name">Shipping</b>
                                            <span className="stt-price">£0.00</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtotal-line">
                                            <b className="stt-name">Tax</b>
                                            <span className="stt-price">£0.00</span>
                                        </div>
                                    </li>
                                   
                                    <li>
                                        <div className="subtotal-line">
                                            <b className="stt-name">total:</b>
                                            <span className="stt-price">£{totalPrice.toFixed(2)}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Checkout;
