import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

const UserRole = () => {

    const [user, setUser] = useState([]);
    
      const fetchuser = async () => {
        try {
          const querySnapshot = await getDocs(collection(fireDB, "users"));
          const productList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setUser(productList);
        } catch (error) {
          console.error("Error fetching blog:", error);
          toast.error("Failed to fetch blog.");
        }
      };
    const handleDelete = async (productId) => {
      if (window.confirm("Are you sure you want to delete this blog?")) {
        try {
          await deleteDoc(doc(fireDB, "user", productId));
          setUser(user.filter(p => p.id !== productId));
          toast.success("User deleted successfully!");
        } catch (error) {
          console.error("Error deleting User:", error);
          toast.error("Failed to delete User.");
        }
      }
    };
    
  
   

      useEffect(() => {
        fetchuser();
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
                    <h3 className="">User List</h3>

                    
                  </div>
                </div>

                <div className="table-responsive table-centered">
                  <table className="table mb-0">
                    <thead className="bg-light bg-opacity-50">
                      <tr>
                        <th className="ps-3">User Name</th>
                        <th>Contact Info</th>
                        <th>Email</th>                        
                        <th>Password</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                   <tbody>
                  {user.map(product => (
                    <tr key={product.id}>
                     
                      <td className="ps-3">{product.username}</td>
                      <td>
                         <td className="ps-3">{product.userph}</td>
                      </td>
                      <td>{product.email}</td>
                      <td>{product.uid}</td>
                      <td>{product.createdAt}</td>
                      <td>
                         <button
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                    

                      </td>
                    </tr>
                  ))}
                  {user.length === 0 && (
                    <tr>
                      <td colSpan="7" className="text-center py-3">
                        No user found.
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

export default UserRole
