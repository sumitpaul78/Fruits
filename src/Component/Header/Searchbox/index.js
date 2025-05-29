import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../features/productSlice";
import { Link } from "react-router-dom";

const Searchbox = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts()); // Load products once
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResults([]);
    } else {
      const filtered = products.filter((product) =>
        product.product_name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [searchTerm, products]);

  return (
    <div className="header-search-bar layout-01">
      <form className="form-search" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="input-text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn-submit">
          <i className="biolife-icon icon-search"></i>
        </button>
      </form>

      {/* Display filtered results */}
      {searchTerm && (
        <ul className="search-results">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <li key={item.id}>
                <img src={item.imageURL} width="100" height="100"/>
                <Link to={`/${item.product_id}`}>{item.product_name}</Link>
              </li>
            ))
          ) : (
            <li>No matching products found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Searchbox;
