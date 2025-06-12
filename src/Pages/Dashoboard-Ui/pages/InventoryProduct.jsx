import React, { useEffect, useState } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';
import { fetchProducts } from '../../../features/productSlice';
import CurrencyFormat from "../../../global-component/CurrencyFormat";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const InventoryProduct = () => {
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

// check handle Toggle

const handleToggleStatus = async (productId, field, newValue) => {
  try {
    const docRef = doc(fireDB, "products", productId);
    await updateDoc(docRef, {
      [field]: newValue,
    });
    // Update local state
   dispatch(fetchProducts()); // Refresh the Redux store
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
                    <h3 className="">Warehouse List</h3>
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
                    
                      
                      
                      <td className='d-flex align-center'>
                        <button
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      {/* <button className="btn btn-sm btn-primary"
                          onClick={() => {
                            setSelectedProduct(product);
                            setShowModal(true);
                          }}
                        >
                          Edit
                      </button> */}

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryProduct;
