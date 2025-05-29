import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../../firebase/FirebaseConfig';
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../../features/latestBlogSlice";
import toast from 'react-hot-toast';

const LatestblogList = () => {
    const [blogs, setblogs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBlog, setselectedBlog] = useState(null);
    
      const dispatch = useDispatch();
      const blog = useSelector((state) => state.blogs.items);
    
    const handleDelete = async (productId) => {
      if (window.confirm("Are you sure you want to delete this blog?")) {
        try {
          await deleteDoc(doc(fireDB, "Blogs", productId));
          setblogs(blogs.filter(p => p.id !== productId));
          toast.success("Blog deleted successfully!");
        } catch (error) {
          console.error("Error deleting blog:", error);
          toast.error("Failed to delete blog.");
        }
      }
    };
    
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const docRef = doc(fireDB, "Blogs", selectedBlog.id);
        await updateDoc(docRef, {
          blog_title: selectedBlog.blog_title,
          blog_author: selectedBlog.blog_author,
          blog_description: selectedBlog.blog_description,
        });
        toast.success("Blog updated successfully!");
    
        // Update in UI without reloading all
        setblogs((prev) =>
          prev.map((p) => (p.id === selectedBlog.id ? selectedBlog : p))
        );
    
        setShowModal(false);
        setselectedBlog(null);
      } catch (error) {
        console.error("Update error:", error);
        toast.error("Failed to update Blog.");
      }
    };
    
    const handleToggleStatus = async (productId, field, newValue) => {
  try {
    const docRef = doc(fireDB, "Blogs", productId);
    await updateDoc(docRef, {
      [field]: newValue,
    });

    // Update local state
    setblogs(prev =>
      prev.map(product =>
        product.id === productId
          ? { ...product, [field]: newValue }
          : product
      )
    );

    toast.success(`${field === "isActive" ? "Active status" : "Latest status"} updated!`);
  } catch (error) {
    console.error(`Error updating ${field}:`, error);
    toast.error("Failed to update status.");
  }
};
   useEffect(() => {
        dispatch(fetchBlogs());
      }, );

  
    
  return (
    <>
       <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card mt-5">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between ">
                    <h3 className="">Blog List</h3>

                    
                  </div>
                </div>

                <div className="table-responsive table-centered">
                  <table className="table mb-0">
                    <thead className="bg-light bg-opacity-50">
                      <tr>
                        <th>Active Staus</th>
                        <th className="ps-3">Blog ID.</th>
                        <th>Blog Image</th>
                        <th>Blog Title</th>                        
                        <th>Author Name</th>
                        <th>Created Date</th>
                         <th>Blog Description</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                   <tbody>
                  {blog.map(product => (
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
                      <td className="ps-3">{product.blog_id}</td>
                      <td>
                        <img src={product.imageURL} alt={product.blog_title} className="img-fluid avatar-sm" />
                      </td>
                      <td>{product.blog_title}</td>
                      <td>{product.blog_author}</td>
                      <td>{product.createdAt}</td>
                     <td>{product.blog_description}</td>
                      <td>
                         <button
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      <button className="btn btn-sm btn-primary"
                          onClick={() => {
                            setselectedBlog(product);
                            setShowModal(true);
                          }}
                        >
                          Edit
                      </button>

                      </td>
                    </tr>
                  ))}
                  {blog.length === 0 && (
                    <tr>
                      <td colSpan="7" className="text-center py-3">
                        No blogs found.
                      </td>
                    </tr>
                  )}
                </tbody>
                  </table>

                  {showModal && selectedBlog && (
                  <div className="modal show d-block list-modal" tabIndex="-1">
                    <div className="modal-dialog">
                      <div className="modal-content">

                        <div className="modal-header">
                          <h5 className="modal-title">Edit Blog</h5>
                          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>

                        <div className="modal-body">
                          <form onSubmit={handleUpdate}>
                            <div className="mb-3">
                              <label>Blog Name</label>
                              <input
                                type="text"
                                className="form-control"
                                value={selectedBlog.blog_title}
                                onChange={(e) => setselectedBlog({ ...selectedBlog, blog_title: e.target.value })}
                              />
                            </div>
                            <div className="mb-3">
                              <label>Author Name</label>
                              <input
                                type="text"
                                className="form-control"
                                value={selectedBlog.blog_author}
                                onChange={(e) => setselectedBlog({ ...selectedBlog, blog_author: e.target.value })}
                              />
                            </div>
                            
                            <div className="mb-3">
                              <label>Blog Description</label>
                              <textarea
                                className="form-control"
                                value={selectedBlog.blog_description}
                                onChange={(e) => setselectedBlog({ ...selectedBlog, blog_description: e.target.value })}
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
  )
}

export default LatestblogList
