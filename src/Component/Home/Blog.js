import React, { useState } from "react";
import blogs from "../db/blog.json";

const Blog = () =>{
    const [blog, setBlog] = useState(blogs.blogslist);
    return(
        <>
         <div className="blog-posts sm-margin-top-93px sm-padding-top-72px xs-padding-bottom-50px">
                <div className="container">
                    <div className="biolife-title-box">
                        <span className="subtitle">The freshest and most exciting news</span>
                        <h3 className="main-title">From the Blog</h3>
                    </div>
                    <ul className="biolife-carousel nav-center nav-none-on-mobile xs-margin-top-36px" data-slick='{"rows":1,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":3, "responsive":[{"breakpoint":1200, "settings":{ "slidesToShow": 3}},{"breakpoint":992, "settings":{ "slidesToShow": 2}},{"breakpoint":768, "settings":{ "slidesToShow": 2}},{"breakpoint":600, "settings":{ "slidesToShow": 1}}]}'>
                    {blog.map((item) =>(
                        <span key={item.id}>
                            <li>
                            <div className="post-item effect-01 style-bottom-info layout-02 ">
                                <div className="thumbnail">
                                    <a href="#" className="link-to-post"><img src={item.proimg} width="370" height="270" alt="" /></a>
                                    <div className="post-date">
                                        <span className="date">26</span>
                                        <span className="month">dec</span>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h4 className="post-name"><a href="#" className="linktopost">{item.title}</a></h4>
                                    <div className="post-meta">
                                        <a href="#" className="post-meta__item author"><img src={item.adminimg} width="28" height="28" alt="" /><span>Admin</span></a>
                                        <a href="#" className="post-meta__item btn liked-count">2<span className="biolife-icon icon-comment"></span></a>
                                        <a href="#" className="post-meta__item btn comment-count">6<span className="biolife-icon icon-like"></span></a>
                                        <div className="post-meta__item post-meta__item-social-box">
                                            <span className="tbn"><i className="fa fa-share-alt" aria-hidden="true"></i></span>
                                            <div className="inner-content">
                                                <ul className="socials">
                                                    <li><a href="#" title="twitter" className="socail-btn"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#" title="facebook" className="socail-btn"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#" title="pinterest" className="socail-btn"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                                    <li><a href="#" title="youtube" className="socail-btn"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                                                    <li><a href="#" title="instagram" className="socail-btn"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="excerpt">{item.description}</p>
                                    <div className="group-buttons">
                                        <a href="#" className="btn readmore">continue reading</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        </span>
                    ))}
                        
                    </ul>
                </div>
            </div>

        </>
  );
};

export default Blog;