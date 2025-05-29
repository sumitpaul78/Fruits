import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';
import { Link } from "react-router-dom";
import CurrencyFormat from "../../../global-component/CurrencyFormat";
import toast from 'react-hot-toast';

const OrdderList = () => {
     const [orders, setOrders] = useState([]);
      const fetchorders = async () => {
        try {
          const querySnapshot = await getDocs(collection(fireDB, "order_details"));
          const orderList = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              ...data
            };
          });
          setOrders(orderList);
        } catch (error) {
          console.error("Error fetching orders:", error);
          toast.error("Failed to fetch orders.");
        }
      };

    const handleDelete = async (orderId) => {
      if (window.confirm("Are you sure you want to delete this order?")) {
        try {
          await deleteDoc(doc(fireDB, "order_details", orderId));
          setOrders(orders.filter(p => p.id !== orderId));
          toast.success("Order deleted successfully!");
        } catch (error) {
          console.error("Error deleting order:", error);
          toast.error("Failed to delete order.");
        }
      }
    };
    
      useEffect(() => {
        fetchorders();
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
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>
                        
                          {order.orderStatus}
                      </td>
                      <td className="ps-3"><Link to="/dashboard/orderlist/orderdetails/:order_id"> {order.orderID}</Link></td>
                     
                      <td>{order.firstName}</td>
                      <td>{order.phn}</td>
                      <td>{order.email}</td>
                      <td>{order.totalQuantity}</td>
                      <td>
                        <CurrencyFormat value={order.totalPrice} />
                      
                      </td>
                     
                      <td className='d-flex align-center'>
                        <button
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => handleDelete(order.id)}
                        >
                          Delete
                        </button>
                   

                      </td>
                    </tr>
                  ))}
                  {orders.length === 0 && (
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
