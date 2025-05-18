import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';
import { Link } from "react-router-dom";

const Productlist = () => {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


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
const handleDelete = async (productId) => {
  if (window.confirm("Are you sure you want to delete this product?")) {
    try {
      await deleteDoc(doc(fireDB, "products", productId));
      setProducts(products.filter(p => p.id !== productId));
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  }
};


const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const docRef = doc(fireDB, "products", selectedProduct.id);
    await updateDoc(docRef, {
      product_name: selectedProduct.product_name,
      product_type: selectedProduct.product_type,
      product_qty: selectedProduct.product_qty,
      product_price: selectedProduct.product_price,
    });
    alert("Product updated successfully!");

    // Update in UI without reloading all
    setProducts((prev) =>
      prev.map((p) => (p.id === selectedProduct.id ? selectedProduct : p))
    );

    setShowModal(false);
    setSelectedProduct(null);
  } catch (error) {
    console.error("Update error:", error);
    alert("Failed to update product.");
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  
  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card mt-5">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between ">
                    <h3 className="">Product List</h3>

                    
                  </div>
                </div>

                <div className="table-responsive table-centered">
                  <table className="table mb-0">
                    <thead className="bg-light bg-opacity-50">
                      <tr>
                        <th className="ps-3">Product ID.</th>
                        <th>Product Image</th>
                        <th>Product Name</th>                        
                        <th>Product Type</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                   <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td className="ps-3">{product.product_id}</td>
                      <td>
                        <img src={product.imageURL} alt={product.product_name} className="img-fluid avatar-sm" />
                      </td>
                      <td>{product.product_name}</td>
                      <td>{product.product_type}</td>
                      <td>{product.product_qty}</td>
                      <td>{product.product_price}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      <button className="btn btn-sm btn-primary"
                          onClick={() => {
                            setSelectedProduct(product);
                            setShowModal(true);
                          }}
                        >
                          Edit
                      </button>

                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr>
                      <td colSpan="7" className="text-center py-3">
                        No products found.
                      </td>
                    </tr>
                  )}
                </tbody>
                  </table>

                  {showModal && selectedProduct && (
                  <div className="modal show d-block list-modal" tabIndex="-1">
                    <div className="modal-dialog">
                      <div className="modal-content">

                        <div className="modal-header">
                          <h5 className="modal-title">Edit Product</h5>
                          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>

                        <div className="modal-body">
                          <form onSubmit={handleUpdate}>
                            <div className="mb-3">
                              <label>Product Name</label>
                              <input
                                type="text"
                                className="form-control"
                                value={selectedProduct.product_name}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, product_name: e.target.value })}
                              />
                            </div>
                            <div className="mb-3">
                              <label>Product Type</label>
                              <input
                                type="text"
                                className="form-control"
                                value={selectedProduct.product_type}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, product_type: e.target.value })}
                              />
                            </div>
                            <div className="mb-3">
                              <label>Quantity</label>
                              <input
                                type="number"
                                className="form-control"
                                value={selectedProduct.product_qty}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, product_qty: e.target.value })}
                              />
                            </div>
                            <div className="mb-3">
                              <label>Price</label>
                              <input
                                type="number"
                                className="form-control"
                                value={selectedProduct.product_price}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, product_price: e.target.value })}
                              />
                            </div>

                            <button type="submit" className="btn btn-success">Update</button>
                          </form>
                        </div>

                      </div>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlist;
