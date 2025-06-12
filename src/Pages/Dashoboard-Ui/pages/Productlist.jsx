import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';
import { Link } from "react-router-dom";
import CurrencyFormat from "../../../global-component/CurrencyFormat";
import toast from 'react-hot-toast';
import { fetchProducts } from '../../../features/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Productlist = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const dispatch = useDispatch();
    const productsList = useSelector((state) => state.products.items);

const handleDelete = async (productId) => {
  if (window.confirm("Are you sure you want to delete this product?")) {
    try {
      await deleteDoc(doc(fireDB, "products", productId));
      toast.success("Product deleted successfully!");
        dispatch(fetchProducts());
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product.");
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
      discount_price: selectedProduct.discount_price,
      product_description: selectedProduct.product_description,
    });
    toast.success("Product updated successfully!");

    // Update in UI without reloading all
     dispatch(fetchProducts());

    setShowModal(false);
    setSelectedProduct(null);
  } catch (error) {
    console.error("Update error:", error);
    toast.error("Failed to update product.");
  }
};

// check handle Toggle

const handleToggleStatus = async (productId, field, newValue) => {
  try {
    const docRef = doc(fireDB, "products", productId);
    await updateDoc(docRef, {
      [field]: newValue,
    });

    // Update local state
    dispatch(fetchProducts());

    toast.success(`${field === "isActive" ? "Active status" : "Latest status"} updated!`);
  } catch (error) {
    console.error(`Error updating ${field}:`, error);
    toast.error("Failed to update status.");
  }
};



  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  
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
                        <th>Product Status</th>
                        <th className="ps-3">Product ID.</th>
                        <th>Product Image</th>
                        <th>Product Name</th>                        
                        <th>Product Type</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Discount Price</th>
                         <th>Product Description</th>
                         <th>Choose Latest Product</th>
                         <th>Choose Today's Deal</th>
                        <th>Actions</th>
                       
                      </tr>
                    </thead>

                   <tbody>
                  {productsList.map(product => (
                    <tr key={product.id}>
                      <td>
                        <div class="form-check form-switch">
                       <input
                        className="form-check-input active-input"
                        type="checkbox"
                        checked={product.isActive || false}
                        onChange={() => handleToggleStatus(product.id, 'isActive', !product.isActive)}
                        id={`active-${product.id}`}
                      />
                      {/* <label className="form-check-label" htmlFor={`active-${product.id}`}>
                        Switch to Active
                      </label> */}
                      </div>
                      </td>
                      <td >{product.product_id}</td>
                      <td>
                        <img src={product.imageURL} alt={product.product_name} className="img-fluid avatar-sm" />
                      </td>
                      <td>{product.product_name}</td>
                      <td>{product.product_type}</td>
                      <td>{product.product_qty}</td>
                      <td>
                        <CurrencyFormat value={product.product_price} />
                      
                      </td>
                      <td>
                        <CurrencyFormat value={product.discount_price} />
                      
                      </td>
                      <td className='product-name-cell' >
                       {product.product_description}
                      
                      </td>
                      <td>
                        <div class="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={product.isLatest || false}
                          onChange={() => handleToggleStatus(product.id, 'isLatest', !product.isLatest)}
                          id={`latest-${product.id}`}
                        />
                        {/* <label className="form-check-label" htmlFor={`latest-${product.id}`}>
                          Latest Product
                        </label> */}
                      </div>
                      </td>
                       <td>
                        <div class="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={product.isDealpro || false}
                          onChange={() => handleToggleStatus(product.id, 'isDealpro', !product.isDealpro)}
                          id={`latest-${product.id}`}
                        />
                        {/* <label className="form-check-label" htmlFor={`latest-${product.id}`}>
                          Deal
                        </label> */}
                      </div>
                      </td>
                      <td className='d-flex align-center'>
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
                  {productsList.length === 0 && (
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
                              <div className="mb-3">
                              <label>Product Description</label>
                              <textarea
                                type="text"
                                className="form-control"
                                value={selectedProduct.product_description}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, product_description: e.target.value })}
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
