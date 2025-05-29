import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";
import CurrencyFormat from "../global-component/CurrencyFormat";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
   useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
  if (products.length > 0) {
    const uniqueCategories = [...new Set(products.map(p => p.product_type))];
    setCategories(uniqueCategories);
  }
}, [products]);

const handleCategoryChange = (e) => {
  const { value, checked } = e.target;
  setSelectedCategories((prev) =>
    checked ? [...prev, value] : prev.filter((cat) => cat !== value)
  );
};

const visibleProducts = products.filter((item) =>
  item.isActive &&
  (selectedCategories.length === 0 || selectedCategories.includes(item.product_type))
);
  return (
    <>
    <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
    </div>

    
    <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><a href="#" className="permal-link">Home</a></li>
                <li className="nav-item"><span className="current-page">Shop</span></li>
            </ul>
        </nav>
    </div>

    
   <div className="container">
    <div className="col-12 col-lg-2 col-md-2 col-sm-3 p-0">

        <div className="product-filter">
            <h4 className="filter-head">Categories</h4>
            <ul className="product-filter-content">
              {categories.map((item) => (
              <div className="form-check" key={item}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item}
                  id={item}
                  onChange={handleCategoryChange}
                />
                <label className="form-check-label" htmlFor={item}>
                  {item}
                </label>
              </div>
            ))}
            </ul>
        </div>
        <div className="price-filter">
           <h4 className="filter-head">Price</h4>
        <input type="range" class="form-range" id="customRange1" />
        </div>

    </div>
    <div className="col-12 col-lg-10 col-md-10 col-sm-9">
      <div className="row">
      {visibleProducts.length === 0 ? (
        <p className="text-center">No products available.</p>
      ) : (
        visibleProducts.map((item) => (
          <div key={item.id} className="col-12 col-lg-4 col-md-4 col-sm-4">
            <div className="shop-cart product-card">
              <div className="product-badge">Premium</div>
              <div className="product-tilt-effect">
                <div className="product-image">
                  <Link to={`/${item.product_id}`} className="link-to-product">
                    <img src={item.imageURL} alt={item.product_name} />
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <div className="product-category">{item.product_type}</div>
                <h2 className="product-title">
                  <Link to={`/${item.product_id}`} className="pr-name">
                    {item.product_name}
                  </Link>
                </h2>
                
                <div className="product-bottom">
                  <div className="product-price">
                     <span className="discount-now">
                      <CurrencyFormat value={item.discount_price} />
                    </span>
                    <span className="price-now">
                      <CurrencyFormat value={item.product_price} />
                    </span>
                  </div>
                  <Link to="" onClick={() => dispatch(addToCart(item))}>
                    <button className="product-button">
                      <span className="button-text">Add to Cart</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
      </div>  
    </>
  )
}

export default Shop
