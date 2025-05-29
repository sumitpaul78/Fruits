import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/latestBlogSlice";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const dispatch = useDispatch();
    const blog = useSelector((state) => state.blogs.items);
     useEffect(() => {
      dispatch(fetchBlogs());
    }, [dispatch]);
    
    const visibleBlog = blog.filter((item) => item.isActive);
  
  return (
    <>

    <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
    </div>

    
    <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><Link href="#" className="permal-link">Home</Link></li>
                <li className="nav-item"><span className="current-page">Blog</span></li>
            </ul>
        </nav>
    </div>
      <div class="blog-page pb-5">
      <div class="container-fluid">
      <div class="row">
          <section class="blog-page pt-5"> 
              <div class="container">
                  <div class="row">

                      
                                            
                   {visibleBlog.map((item) => (
                        <div class="blog-post col-12 col-lg-4 col-md-12 col-sm-12 mb-3">
                            <div class="blog-image">
                                <img src={item.imageURL} alt="Blog Image 1" class="img-fluid" />
                                <div class="date pt-2">{item.blog_author} || {item.createdAt}</div>
                            </div>
                            <div class="blog-content">
                                <h3>{item.blog_title}</h3>
                                <p>{item.blog_description}</p>
                                <div className="group-buttons">
                                        <Link to="" className="btn readmore">continue reading</Link>
                                    </div>
                            </div>
                        </div>
                              ))}
                        
        
                  </div>
              </div>
            </section>

          </div>
      </div>
</div>
    </>
  )
}

export default BlogDetails
