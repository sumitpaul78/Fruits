import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrders } from '../features/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

const Thankyou = () => {
const dispatch = useDispatch();
const order = useSelector((state) => state.orderlist.items)
const {orderId } = useParams();
    
const currentOrder = order.find(item => item.orderID === Number(orderId));

useEffect(() => {
       dispatch(fetchOrders());
 }, [dispatch]);
       
 

  return (
    <>
       <div className='container py-5 text-center'>
        <div className='row pt-5'>
          <p className='thank-you-icon'><i class="fa fa-check-circle" aria-hidden="true"></i></p>
          <h1 className='thank-you-head text-center'>Thank You For Your Order</h1>
          <p>Your order no is: </p>
          <p>It will delivered 2-4 business days</p>
        </div>
        <div className="table-responsive">
        <table className="table table-re">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Product Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Quantity</th>
                <th scope="col">Product Price</th>
              </tr>
            </thead>
            <tbody>
             {currentOrder && currentOrder.cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.imageURL}
                        alt={item.product_name}
                        className="order-img img-fluid"
                      />
                    </td>
                    <td>{item.product_name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.product_price}</td>
                  </tr>
              ))}


            </tbody>
          </table>
        </div>
          
        </div>
    </>
  )
}

export default Thankyou