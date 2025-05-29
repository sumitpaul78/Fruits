import react from "react";
import LatestProduct from "./LatestProduct";

const RelatedProduct = () => {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.items);
  // const [activeCategory, setActiveCategory] = useState("");

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (products.length && !activeCategory) {
  //     setActiveCategory(products[0].product_type);
  //   }
  // }, [products]);

  // const getCategories = () => {
  //   return [...new Set(products.map(p => p.product_type))];
  // };

  // const getProductsByCategory = (category) => {
  //   return products.filter(p => p.product_type === category);
  // };

  return (
    <div className="product-tab z-index-20 py-5 xs-margin-top-30px">
      <div className="container">
        <div className="biolife-title-box">
          <span className="subtitle">All the best items for You</span>
          <h3 className="main-title">All Latest Products</h3>
        </div>

        {/* <ul className="nav nav-tabs mt-4" role="tablist">
          {getCategories().map((category) => (
            <li className="nav-item" key={category}>
              <button
                className={`nav-link ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul> */}

        <div className="tab-content p-3">
          {/* <Productlist products={getProductsByCategory(activeCategory)} /> */}
          <LatestProduct />
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
