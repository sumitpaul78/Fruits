import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { addItemToCart, addToCart, decreaseItemQuantity, getCartTotal, increaseItemQuantity } from '../features/cartSlice';


const SingleProduct = () => {
    const {id } = useParams();
    const [quantity, setQuantity] = useState(1); 
    const items = useSelector((state) => state.allCart.items);

    const singleItem = items.find((item) => item.id === parseInt(id));
    
     const {cart,totalQuantity,totalPrice} = useSelector((state) => state.allCart);
     const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(getCartTotal());
        }, [cart, dispatch]);
        
        

        const handleIncrease = () => {
            setQuantity(prevQuantity => prevQuantity + 1);
        };
        if (!singleItem) {
        return <Navigate to="/nopage" />;
        }

        const handleDecrease = () => {
            setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1)); 
        };

        const handleAddToCart = () => {
            const updatedProduct = { ...singleItem, quantity};
        //    console.log(singleItem);
        //     console.log(quantity);
            dispatch(addItemToCart(updatedProduct));
            // alert('Product added to cart');
          };
    
  return (
    <>
    <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
    </div>
    
    <div className="page-contain single-product">
        <div className="container">
            
                <div id="main-content" className="main-content">
                
            <nav className="biolife-nav">
                <ul>
                    <li className="nav-item"><Link to={'/'} className="permal-link">Home</Link></li>
                    <li className="nav-item"><Link href="#" className="permal-link">Natural Organic</Link></li>
                    <li className="nav-item"><span className="current-page">{singleItem.title}</span></li>
                </ul>
            </nav>

                <div className="sumary-product single-layout">
                    <div className="media">
                        <ul className="biolife-carousel slider-for" data-slick='{"arrows":false,"dots":false,"slidesMargin":30,"slidesToShow":1,"slidesToScroll":1,"fade":true,"asNavFor":".slider-nav"}'>
                            <li><img src={singleItem.proimg} alt="" width="500" height="500" /></li>
                            <li><img src={singleItem.proimg} alt="" width="500" height="500" /></li>
                            <li><img src={singleItem.proimg} alt="" width="500" height="500" /></li>
                            <li><img src={singleItem.proimg} alt="" width="500" height="500" /></li>
                            <li><img src={singleItem.proimg} alt="" width="500" height="500" /></li>
                           
                        </ul>
                        <ul className="biolife-carousel slider-nav" data-slick='{"arrows":false,"dots":false,"centerMode":false,"focusOnSelect":true,"slidesMargin":10,"slidesToShow":4,"slidesToScroll":1,"asNavFor":".slider-for"}'>
                            <li><img src={singleItem.proimg} alt="" width="88" height="88" /></li>
                            <li><img src={singleItem.proimg} alt="" width="500" height="500" /></li>
                            <li><img src={singleItem.proimg} alt="" width="500" height="500" /></li>
                            <li><img src={singleItem.proimg} alt="" width="500" height="500" /></li>
                            <li><img src={singleItem.proimg} alt="" width="500" height="500" /></li>
                        </ul>
                    </div>
                    <div className="product-attribute">
                        <h3 className="title">{singleItem.title}</h3>
                        <div className="rating">
                            <p className="star-rating"><span className="width-80percent"></span></p>
                            <span className="review-count">(04 Reviews)</span>
                            <span className="qa-text">Q&A</span>
                            <b className="category">By: {singleItem.category}</b>
                        </div>
                        <span className="sku">Sku: {singleItem.sku}</span>
                        <p className="excerpt">{singleItem.description}</p>
                        <div className="price">
                            <ins><span className="price-amount"><span className="currencySymbol">£</span>{singleItem.discountprice.toFixed(2)}</span></ins>
                            <del><span className="price-amount"><span className="currencySymbol">£</span>{singleItem.price.toFixed(2)}</span></del>
                        </div>
                       
                        <div className="shipping-info">
                            <p className="shipping-day">3-Day Shipping</p>
                            <p className="for-today">Pree Pickup Today</p>
                        </div>
                    </div>
                    <div className="action-form">
                        <div className="quantity-box">
                            <span className="title">Quantity:</span>
                            <div className="qty-input">
                            <input type="text"  value={quantity} min="0" />
                <a href="" className="qty-btn btn-up"  onClick={handleIncrease}><i className="fa fa-caret-up" aria-hidden="true" ></i></a>
               <a href="" className="qty-btn btn-down" onClick={handleDecrease}><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                            </div>
                           
                        </div>
                        <div className="total-price-contain">
                            <span className="title">Total Price:</span>
                            <p className="price">£{(quantity * singleItem.discountprice).toFixed(2)}</p>
                            
                        </div>
                        <div className="buttons">
                            <button onClick={handleAddToCart} className="btn add-to-cart-btn">add to cart</button>
                           
                        </div>
                       
                        {/* <div className="social-media">
                            <ul className="social-list">
                                <li><a href="#" className="social-link"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="social-link"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="social-link"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="social-link"><i className="fa fa-share-alt" aria-hidden="true"></i></a></li>
                                <li><a href="#" className="social-link"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div> */}
                        
                    </div>
                </div>

                <div className="product-tabs single-layout biolife-tab-contain">
                    <div className="tab-head">
                        <ul className="tabs">
                            <li className="tab-element active"><a href="#tab_1st" className="tab-link">Products Descriptions</a></li>
                            <li className="tab-element" ><a href="#tab_2nd" className="tab-link">Addtional information</a></li>
                            <li className="tab-element" ><a href="#tab_3rd" className="tab-link">Shipping & Delivery</a></li>
                           
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div id="tab_1st" className="tab-contain desc-tab active">
                            <p className="desc">Quisque quis ipsum venenatis, fermentum ante volutpat, ornare enim. Phasellus molestie risus non aliquet cursus. Integer vestibulum mi lorem, id hendrerit ante lobortis non. Nunc ante ante, lobortis non pretium non, vulputate vel nisi. Maecenas dolor elit, fringilla nec turpis ac, auctor vulputate nulla. Phasellus sed laoreet velit.
                                Proin fringilla urna vel mattis euismod. Etiam sodales, massa non tincidunt iaculis, mauris libero scelerisque justo, ut rutrum lectus urna sit amet quam. Nulla maximus vestibulum mi vitae accumsan. Donec sit amet ligula et enim semper viverra a in arcu. Vestibulum enim ligula, varius sed enim vitae, posuere molestie velit. Morbi risus orci, congue in nulla at, sodales fermentum magna.</p>
                            <div className="desc-expand">
                                <span className="title">Organic Fresh Fruit</span>
                                <ul className="list">
                                    <li>100% real fruit ingredients</li>
                                    <li>100 fresh fruit bags individually wrapped</li>
                                    <li>Blending Eastern & Western traditions, naturally</li>
                                </ul>
                            </div>
                        </div>
                        <div id="tab_2nd" className="tab-contain addtional-info-tab">
                            <table className="tbl_attributes">
                                <tbody>
                                <tr>
                                    <th>Color</th>
                                    <td><p>Black, Blue, Purple, Red, Yellow</p></td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td><p>S, M, L</p></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="tab_3rd" className="tab-contain shipping-delivery-tab">
                            <div className="accodition-tab biolife-accodition">
                                <ul className="tabs">
                                    <li className="tab-item">
                                        <span className="title btn-expand">How long will it take to receive my order?</span>
                                        <div className="content">
                                            <p>Orders placed before 3pm eastern time will normally be processed and shipped by the following business day. For orders received after 3pm, they will generally be processed and shipped on the second business day. For example if you place your order after 3pm on Monday the order will ship on Wednesday. Business days do not include Saturday and Sunday and all Holidays. Please allow additional processing time if you order is placed on a weekend or holiday. Once an order is processed, speed of delivery will be determined as follows based on the shipping mode selected:</p>
                                            <div className="desc-expand">
                                                <span className="title">Shipping mode</span>
                                                <ul className="list">
                                                    <li>Standard (in transit 3-5 business days)</li>
                                                    <li>Priority (in transit 2-3 business days)</li>
                                                    <li>Express (in transit 1-2 business days)</li>
                                                    <li>Gift Card Orders are shipped via USPS First className Mail. First className mail will be delivered within 8 business days</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="tab-item">
                                        <span className="title btn-expand">How is the shipping cost calculated?</span>
                                        <div className="content">
                                            <p>You will pay a shipping rate based on the weight and size of the order. Large or heavy items may include an oversized handling fee. Total shipping fees are shown in your shopping cart. Please refer to the following shipping table:</p>
                                            <p>Note: Shipping weight calculated in cart may differ from weights listed on product pages due to size and actual weight of the item.</p>
                                        </div>
                                    </li>
                                    <li className="tab-item">
                                        <span className="title btn-expand">Why Didn’t My Order Qualify for FREE shipping?</span>
                                        <div className="content">
                                            <p>We do not deliver to P.O. boxes or military (APO, FPO, PSC) boxes. We deliver to all 50 states plus Puerto Rico. Certain items may be excluded for delivery to Puerto Rico. This will be indicated on the product page.</p>
                                        </div>
                                    </li>
                                    <li className="tab-item">
                                        <span className="title btn-expand">Shipping Restrictions?</span>
                                        <div className="content">
                                            <p>We do not deliver to P.O. boxes or military (APO, FPO, PSC) boxes. We deliver to all 50 states plus Puerto Rico. Certain items may be excluded for delivery to Puerto Rico. This will be indicated on the product page.</p>
                                        </div>
                                    </li>
                                    <li className="tab-item">
                                        <span className="title btn-expand">Undeliverable Packages?</span>
                                        <div className="content">
                                            <p>Occasionally packages are returned to us as undeliverable by the carrier. When the carrier returns an undeliverable package to us, we will cancel the order and refund the purchase price less the shipping charges. Here are a few reasons packages may be returned to us as undeliverable:</p>
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

export default SingleProduct;
