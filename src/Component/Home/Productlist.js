import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { useState,useEffect } from "react";

const Productlist = () =>{
    const [products, setProducts] = useState([]);
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
          const querySnapshot = await getDocs(collection(fireDB, "products"));
          const productList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setProducts(productList);
        } catch (error) {
          console.error("Error fetching products:", error);
          alert("Failed to fetch products.");
        }
      };
  useEffect(() => {
    fetchProducts();
  }, []);
      return(
        <>
             <ul className="products-list biolife-carousel nav-center-02 nav-none-on-mobile eq-height-contain" data-slick='{"rows":2 ,"arrows":true,"dots":false,"infinite":true,"speed":400,"slidesMargin":10,"slidesToShow":4, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 4}},{"breakpoint":992, "settings":{ "slidesToShow": 3, "slidesMargin":25 }},{"breakpoint":768, "settings":{ "slidesToShow": 2, "slidesMargin":15}}]}'>
           {products.map((item) =>(
  <span key={item.id}>
 <div className="col-lg-4 col-md-4">
         <div className="product-card">
        <div className="product-badge">Premium</div>
        <div className="product-tilt-effect">
            <div className="product-image">
               <Link to={`/${item.product_id}`} className="link-to-product">
                <img src={item.imageURL} alt="Premium Watch" />
                </Link>
            </div>
        </div>
        <div className="product-info">
            <div className="product-category">Luxury Timepiece</div>
            <h2 className="product-title"><Link to={`/${item.product_id}`} className="pr-name">{item.product_name}</Link></h2>
            <div className="product-description">
                <p>Precision engineering meets timeless design. Swiss movement with sapphire crystal and genuine leather band.</p>
            </div>
            <div className="product-features">
                <span className="feature">Water Resistant</span>
                <span className="feature">5-Year Warranty</span>
                <span className="feature">Swiss Made</span>
            </div>
            <div className="product-bottom">
                <div className="product-price">
                    <span className="price-was">$1,299</span>
                    <span className="price-now">$899</span>
                </div>
                <Link to="/" onClick={() => dispatch(addToCart(item))}>
                <button className="product-button">
                   <span className="button-text">Add to Cart</span> 
                    <svg className="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                </button>
                </Link>
            </div>
            <div className="product-meta">
                <div className="product-rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="0.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="rating-count">128 Reviews</span>
                </div>
                <div className="product-stock">In Stock</div>
            </div>
        </div>
        </div>
        
      </div>
   </span>
))}
      </ul>



 
        </>
    );
};

export default Productlist;