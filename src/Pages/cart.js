import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem, clearCart } from '../features/cartSlice';
import CurrencyFormat from '../global-component/CurrencyFormat';
import { parsePrice } from '../global-component/CurrencyFormat';

const CartPage = () => {
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
                <li className="nav-item"><a href="#" className="permal-link">Home</a></li>
                <li className="nav-item"><span className="current-page">ShoppingCart</span></li>
            </ul>
        </nav>
    </div>

    <div className="page-contain shopping-cart">

       
        <div id="main-content" className="main-content">
            <div className="container">

              

                
                <div className="shopping-cart-container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <h3 className="box-title">Your cart items</h3>
                            <form className="shopping-cart-form" action="#" method="post">
                                <table className="shop_table cart-form">
                                    <thead>
                                        <tr>
                                        <th className="product-name">Product Name</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {cart.map((item) =>(
                                          <tr className="cart_item" key={item.product_id}>
                                        <td className="product-thumbnail" data-title="Product Name">
                                            <Link className="prd-thumb" to={`/${item.product_id}`}>
                                                <figure><img width="113" height="113" src={item.imageURL} alt="shipping cart" /></figure>
                                            </Link>
                                            <Link to={`/${item.product_id}`} className="prd-name">{item.product_name}</Link>
                                            <div className="action">
                                                <Link to="" className="remove" onClick={() => dispatch(removeItem(item.product_id))}><i className="fa fa-trash-o" aria-hidden="true"></i></Link>
                                            </div>
                                        </td>
                                        <td className="product-price" data-title="Price">
                                            <div className="price price-contain">
                                                <ins><span className="price-amount"><span className="currencySymbol"></span>
                                                <CurrencyFormat value={item.discount_price} />
                                                </span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol"></span> <CurrencyFormat value={item.product_price} /></span></del>
                                            </div>
                                        </td>
                                        <td className="product-quantity" data-title="Quantity">
                                            <div className="quantity-box type1">
                                                <div className="qty-input">
                                                    <input type="text"  value={item.quantity} min="0" onChange={() =>null}/>
                                                    <a href="#" className="qty-btn btn-up" onClick={() => dispatch(increaseItemQuantity(item.product_id))}><i className="fa fa-caret-up" aria-hidden="true"></i></a>
                                                    <a href="" className="qty-btn btn-down" onClick={() => dispatch(decreaseItemQuantity(item.product_id))}><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="product-subtotal" data-title="Total">
                                            <div className="price price-contain">
                                                <ins><span className="price-amount"><span className="currencySymbol"></span>
                                                 <CurrencyFormat value={item.quantity *  parsePrice(item.discount_price)} />
                                                </span></ins>
                                            </div>
                                        </td>
                                    </tr>
                                  
                                    ))}
                                    <tr className="cart_item wrap-buttons">
                                    <td className="wrap-btn-control" colspan="4">
                                        <Link className="btn back-to-shop" to={'/'}>Back to Shop</Link>
                                        <button className="btn btn-update" type="submit" disabled>update</button>
                                        <button className="btn btn-clear" type="reset" onClick={() => dispatch(clearCart())}>clear all</button>
                                    </td>
                                </tr>
                                    
                                    </tbody>
                                </table>
                            </form>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <div className="shpcart-subtotal-block">
                                <div className="subtotal-line">
                                    <b className="stt-name">Subtotal <span className="sub">   ({totalQuantity})</span></b>
                                    <span className="stt-price"> 
                                        <CurrencyFormat value={totalPrice}/>
                                       </span>
                                </div>
                                <div className="subtotal-line">
                                    <b className="stt-name">Shipping</b>
                                    <span className="stt-price">$0.00</span>
                                </div>
                                <div className="tax-fee">
                                    <p className="title">Est. Taxes & Fees</p>
                                    <p className="desc">Based on 56789</p>
                                </div>
                                <div className="btn-checkout">
                                    <Link to={"/checkout"} className="btn checkout">Check out</Link>
                                </div>
                                <div className="biolife-progress-bar">
                                    <table>
                                        <tr>
                                            <td className="first-position">
                                                <span className="index">$0</span>
                                            </td>
                                            <td className="mid-position">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td className="last-position">
                                                <span className="index">$99</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <p className="pickup-info"><b>Free Pickup</b> is available as soon as today More about shipping and pickup</p>
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

export default CartPage;
