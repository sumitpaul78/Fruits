import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';


const Thankyou = () => {
const [order, setOrder] = useState(null);
    const {orderId } = useParams();
    
        const fetchOrders = async () => {
           try {
      const q = query(
        collection(fireDB, "order_details"),
        where("orderID", "==", Number(orderId))
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        setOrder({ id: docSnap.id, ...docSnap.data() });
      } else {
        toast.error("Order not found.");
      }
    }catch (error) {
            console.error("Error fetching orders:", error);
            toast.error("Failed to fetch orders.");
          }
        };
     useEffect(() => {
       fetchOrders();
      }, [orderId]);
            

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
             {order && order.cart.map((item, index) => (
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
