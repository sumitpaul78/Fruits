import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import CurrencyFormat from "../../global-component/CurrencyFormat";


const Productlist = ({ products }) => {
  const dispatch = useDispatch();
   // Show only active and latest products
  const visibleProducts = products.filter((item) => item.isActive);

  return (
  <>
      {visibleProducts.length === 0 ? (
        <p className="text-center">No products available.</p>
      ) : (
        visibleProducts.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-4">
            <div className="product-card">
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
                <div className="product-description">
                  <p>{item.product_description}</p>
                </div>
                <div className="product-bottom">
                  <div className="product-price">
                    <span className="price-now">
                      <CurrencyFormat value={item.product_price} />
                    </span>
                  </div>
                  <Link to="/" onClick={() => dispatch(addToCart(item))}>
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

      
  </>
  );
};

export default Productlist;
