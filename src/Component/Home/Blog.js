
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/latestBlogSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Blog = () =>{
   
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogs.items);
  const loading = useSelector((state) => state.blogs.loading);
  const error = useSelector((state) => state.blogs.error);



   useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const visibleBlog = blog.filter((item) => item.isActive);

// This is for Slick Slider
 const settings = {"rows":1,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":3, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 3}},{"breakpoint":992, "settings":{ "slidesToShow": 2}},{"breakpoint":768, "settings":{ "slidesToShow": 2}},{"breakpoint":600, "settings":{ "slidesToShow": 1}}]};

    return(
        <>
         <div className="blog-posts sm-margin-top-93px sm-padding-top-72px xs-padding-bottom-50px">
                <div className="container">
                    <div className="biolife-title-box">
                        <span className="subtitle">The freshest and most exciting news</span>
                        <h3 className="main-title">From the Blog</h3>
                    </div>
                  
                { loading ? (
                     <p className="text-center">Loading blogs...</p>
                ): error ? (
                    <p className="text-center text-danger">Error: {error}</p>
                ) : visibleBlog.length === 0 ? (
                <span className="text-center">No products available.</span>
                ) : (
               <Slider {...settings} className="biolife-carousel nav-center nav-none-on-mobile xs-margin-top-36px" data-slick='{"rows":1,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":3, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 3}},{"breakpoint":992, "settings":{ "slidesToShow": 2}},{"breakpoint":768, "settings":{ "slidesToShow": 2}},{"breakpoint":600, "settings":{ "slidesToShow": 1}}]}'>
                                   
              
                   {visibleBlog.map((item) => (
                            <li  key={item.id}>
                            <div className="post-item effect-01 style-bottom-info layout-02 ">
                                <div className="thumbnail">
                                    <Link to="" className="link-to-post"><img src={item.imageURL} alt="" /></Link>
                                  
                                </div>
                                <div className="post-content">
                                    <h4 className="post-name"><Link to=""  className="linktopost">{item.blog_title}</Link></h4>
                                    <div className="post-meta">
                                        <Link to="" className="post-meta__item author"><span>{item.blog_author} || {item.createdAt}</span></Link>
                                       
                                    </div>
                                    <p className="excerpt">{item.blog_description}</p>
                                    <div className="group-buttons">
                                        <Link tp="" className="btn readmore">continue reading</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                       ))}
                    </Slider>
                   )}
                </div>
            </div>

        </>
  );
};

export default Blog;