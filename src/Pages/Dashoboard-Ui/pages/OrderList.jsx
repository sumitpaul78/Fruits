import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';
import { fetchOrders } from '../../../features/orderSlice';
import { Link } from "react-router-dom";
import CurrencyFormat from "../../../global-component/CurrencyFormat";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const OrdderList = () => {
     const dispatch = useDispatch();
     const order = useSelector((state) => state.orderlist.items)

      const handleDelete = async (orderId) => {
           
      if (window.confirm("Are you sure you want to delete this order?")) {
        try {
          await deleteDoc(doc(fireDB, "order_details", orderId));
          toast.success("Order deleted successfully!");
          dispatch(fetchOrders()); // Refresh list from DB
        } catch (error) {
          console.error("Error deleting order:", error);
          toast.error("Failed to delete order.");
        }
      }
    };
    
      useEffect(() => {
        dispatch(fetchOrders());
      },[dispatch]);
    
      

  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card mt-5">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between ">
                    <h3 className="">Order List</h3>
                  </div>
                </div>

                <div className="table-responsive table-centered">
                  <table className="table mb-0">
                    <thead className="bg-light bg-opacity-50">
                      <tr>
                        <th>Order Status</th>
                        <th>Order ID</th>
                        <th>Order Name</th>
                        <th>Contact No</th>
                        <th>Email</th>
                        <th>Order Quantity</th>
                        <th>Order Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                   <tbody>
                  {order.map(item => (
                    <tr key={item.id}>
                      <td>
                        
                          {item.orderStatus}
                      </td>
                      <td className="ps-3"><Link to="/dashboard/orderlist/orderdetails/:order_id"> {item.orderID}</Link></td>
                     
                      <td>{item.firstName}</td>
                      <td>{item.phn}</td>
                      <td>{item.email}</td>
                      <td>{item.totalQuantity}</td>
                      <td>
                        <CurrencyFormat value={item.totalPrice} />
                      
                      </td>
                     
                      <td className='d-flex align-center'>
                        <button
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                   

                      </td>
                    </tr>
                  ))}
                  {order.length === 0 && (
                    <tr>
                      <td colSpan="7" className="text-center py-3">
                        No orders found.
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
  )
}

export default OrdderList
