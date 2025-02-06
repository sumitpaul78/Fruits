import { Link } from "react-router-dom";
import thumb1 from "../../../assets/images/megamenu/thumb-03.jpg";
import thumb2 from "../../../assets/images/megamenu/thumb-04.jpg";
import thumb3 from "../../../assets/images/megamenu/thumb-05.jpg";


const Primarymenu =()=>{

    return(
        <>
             <div className="primary-menu">
                            <ul className="menu biolife-menu clone-main-menu clone-primary-menu" id="primary-menu" data-menuname="main menu">
                                <li className="menu-item"><Link to={'/'}>Home</Link>  </li>
                                <li className="menu-item menu-item-has-children has-megamenu">
                                    <a href="#" className="menu-name" data-title="Shop" >Shop</a>
                                    <div className="wrap-megamenu lg-width-900 md-width-750">
                                        <div className="mega-content">
                                            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                                                <div className="wrap-custom-menu vertical-menu">
                                                     <h4 className="menu-title">Fresh Berries</h4>
                                                    <ul className="menu">
                                                        <li><a href="#">Fruit & Nut Gifts</a></li>
                                                        <li><a href="#">Mixed Fruits</a></li>
                                                        <li><a href="#">Oranges</a></li>
                                                        <li><a href="#">Bananas & Plantains</a></li>
                                                        <li><a href="#">Fresh Gala Apples</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                                                <div className="wrap-custom-menu vertical-menu">
                                                    <h4 className="menu-title">Vegetables</h4>
                                                    <ul className="menu">
                                                        <li><a href="#">Berries</a></li>
                                                        <li><a href="#">Pears</a></li>
                                                        <li><a href="#">Chili Peppers</a></li>
                                                        <li><a href="#">Fresh Avocado</a></li>
                                                        <li><a href="#">Grapes</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                                                <div className="wrap-custom-menu vertical-menu ">
                                                    <h4 className="menu-title">Fresh Fruits</h4>
                                                    <ul className="menu">
                                                        <li><a href="#">Basket of apples</a></li>
                                                        <li><a href="#">Strawberry</a></li>
                                                        <li><a href="#">Blueberry</a></li>
                                                        <li><a href="#">Orange</a></li>
                                                        <li><a href="#">Pineapple</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                                                <div className="wrap-custom-menu vertical-menu">
                                                    <h4 className="menu-title">Featured Products</h4>
                                                    <ul className="menu">
                                                        <li><a href="#">Coffee Creamers</a></li>
                                                        <li><a href="#">Mayonnaise</a></li>
                                                        <li><a href="#">Almond Milk</a></li>
                                                        <li><a href="#">Fruit Jam</a></li>
                                                        <li><a href="#">Beverages</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item menu-item-has-children has-child">
                                    <a href="#" className="menu-name" data-title="Products">Products</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item"><a href="#">Omelettes</a></li>
                                        <li className="menu-item"><a href="#">Breakfast Scrambles</a></li>
                                        <li className="menu-item menu-item-has-children has-child"><a href="#" className="menu-name" data-title="Eggs & other considerations">Eggs & other considerations</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="#">classNameic Breakfast</a></li>
                                                <li className="menu-item"><a href="#">Huevos Rancheros</a></li>
                                                <li className="menu-item"><a href="#">Everything Egg Sandwich</a></li>
                                                <li className="menu-item"><a href="#">Egg Sandwich</a></li>
                                                <li className="menu-item"><a href="#">Vegan Burrito</a></li>
                                                <li className="menu-item"><a href="#">Biscuits and Gravy</a></li>
                                                <li className="menu-item"><a href="#">Bacon Avo Egg Sandwich</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item"><a href="#">Griddle</a></li>
                                        <li className="menu-item menu-item-has-children has-child"><a href="#" className="menu-name" data-title="Sides & Extras">Sides & Extras</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="#">Breakfast Burrito</a></li>
                                                <li className="menu-item"><a href="#">Crab Cake Benedict</a></li>
                                                <li className="menu-item"><a href="#">Corned Beef Hash</a></li>
                                                <li className="menu-item"><a href="#">Steak & Eggs</a></li>
                                                <li className="menu-item"><a href="#">Oatmeal</a></li>
                                                <li className="menu-item"><a href="#">Fruit & Yogurt Parfait</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item"><a href="#">Biscuits</a></li>
                                        <li className="menu-item"><a href="#">Seasonal Fruit Plate</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children has-megamenu">
                                    <a href="#" className="menu-name" data-title="Demo">Demo</a>
                                    <div className="wrap-megamenu lg-width-800 md-width-750">
                                        <div className="mega-content">
                                            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                                                <div className="wrap-custom-menu vertical-menu">
                                                    <h4 className="menu-title">Home Page</h4>
                                                    <ul className="menu">
                                                        <li><a href="home-01.html">Home 01</a></li>
                                                        <li><a href="home-02.html">Home 02</a></li>
                                                        <li><a href="index-2.html">Home 03</a></li>
                                                        <li><a href="home-03-green.html">Home 03 Green</a></li>
                                                        <li><a href="home-04.html">Home 04</a></li>
                                                        <li><a href="home-04-light.html">Home 04 Light</a></li>
                                                        <li><a href="home-05.html">Home 05</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                                                <div className="wrap-custom-menu vertical-menu">
                                                    <h4 className="menu-title">Inner Pages</h4>
                                                    <ul className="menu">
                                                        <li className="menu-item" ><a className="menu-name" href="blog-post.html">Blog Single</a></li>
                                                        <li className="menu-item" ><a className="menu-name" href="blog-v01.html">Blog Style 01</a></li>
                                                        <li className="menu-item" ><a className="menu-name" href="blog-v02.html">Blog Style 02</a></li>
                                                        <li className="menu-item" ><a className="menu-name" href="blog-v03.html">Blog Style 03</a></li>
                                                        <li className="menu-item" ><a className="menu-name" href="contact.html">Contact Us</a></li>
                                                        <li className="menu-item" ><a className="menu-name" href="about-us.html">About Us</a></li>
                                                        <li className="menu-item" ><a className="menu-name" href="checkout.html">Checkout</a></li>
                                                        <li className="menu-item" ><a className="menu-name" href="shopping-cart.html">Shopping Cart</a></li>
                                                        <li className="menu-item" ><a className="menu-name" href="login.html">Login/Register</a></li>
                                                        <li className="menu-item" ><a className="menu-name" href="404.html">404</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                                                <div className="wrap-custom-menu vertical-menu">
                                                    <h4 className="menu-title">Category Pages</h4>
                                                    <ul className="menu">
                                                        <li><a href="category-grid-3-cols.html">Grid 3 Cols</a></li>
                                                        <li><a href="category-grid.html">Grid 4 Cols</a></li>
                                                        <li><a href="category-grid-6-cols.html">Grid 6 Cols</a></li>
                                                        <li><a href="category-grid-left-sidebar.html">Grid Left Sidebar</a></li>
                                                        <li><a href="category-grid-right-sidebar.html">Grid Right Sidebar</a></li>
                                                        <li><a href="category-list.html">List Full</a></li>
                                                        <li><a href="category-list-left-sidebar.html">List Left Sidebar</a></li>
                                                        <li><a href="category-list-right-sidebar.html">List Right Sidebar</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                                                <div className="wrap-custom-menu vertical-menu">
                                                    <h4 className="menu-title">Product Types</h4>
                                                    <ul className="menu">
                                                        <li><a href="single-product-simple.html">Simple</a></li>
                                                        <li><a href="single-product-grouped.html">Grouped</a></li>
                                                        <li><a href="single-product.html">Variable</a></li>
                                                        <li><a href="single-product-external.html">External/Affiliate</a></li>
                                                        <li><a href="single-product-onsale.html">Countdown</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item menu-item-has-children has-megamenu">
                                    <a href="#" className="menu-name" data-title="Blog">Blog</a>
                                    <div className="wrap-megamenu lg-width-800 md-width-750">
                                        <div className="mega-content">
                                            <div className="col-lg-3 col-md-3 col-xs-6">
                                                <div className="wrap-custom-menu vertical-menu">
                                                    <h4 className="menu-title">Blog Categories</h4>
                                                    <ul className="menu">
                                                        <li><a href="#">Beauty (30)</a></li>
                                                        <li><a href="#">Fashion (50)</a></li>
                                                        <li><a href="#">Food (10)</a></li>
                                                        <li><a href="#">Life Style (60)</a></li>
                                                        <li><a href="#">Travel (10)</a></li>
                                                        <li><a href="#">Nutrition (35)</a></li>
                                                        <li><a href="#">Food Decoration (45)</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-xs-6">
                                                <div className="wrap-custom-menu vertical-menu">
                                                    <h4 className="menu-title">Featured Posts</h4>
                                                    <ul className="menu">
                                                        <li><a href="#">Post example<sup>#1</sup></a></li>
                                                        <li><a href="#">Post example<sup>#2</sup></a></li>
                                                        <li><a href="#">Post example<sup>#3</sup></a></li>
                                                        <li><a href="#">Post example<sup>#4</sup></a></li>
                                                        <li><a href="#">Post example<sup>#5</sup></a></li>
                                                        <li><a href="#">Post example<sup>#6</sup></a></li>
                                                        <li><a href="#">Post example<sup>#7</sup></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-xs-12 md-margin-top-0 xs-margin-top-25px">
                                                <div className="block-posts">
                                                    <h4 className="menu-title">Recent Posts</h4>
                                                    <ul className="posts">
                                                        <li>
                                                            <div className="block-post-item">
                                                                <div className="thumb">
                                                                    <Link to={'/'}>
                                                                    <img src={thumb1} width="100" height="73" alt="" />
                                                                    </Link></div>
                                                                <div className="left-info">
                                                                    <h4 className="post-name"><a href="#">Ashwagandha: The #1 Herb in the World for Anxiety?</a></h4>
                                                                    <span className="p-date">Jan 05, 2019</span>
                                                                    <span className="p-comment">2 Comments</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="block-post-item">
                                                                <div className="thumb">
                                                                <Link to={'/'}>
                                                                    <img src={thumb2} width="100" height="73" alt="" />
                                                                    </Link>
                                                                </div>
                                                                <div className="left-info">
                                                                    <h4 className="post-name"><a href="#">Ashwagandha: The #1 Herb in the World for Anxiety?</a></h4>
                                                                    <span className="p-date">May 15, 2019</span>
                                                                    <span className="p-comment">8 Comments</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="block-post-item">
                                                                <div className="thumb">
                                                                <Link to={'/'}>
                                                                    <img src={thumb3} width="100" height="73" alt="" />
                                                                    </Link>
                                                                </div>
                                                                <div className="left-info">
                                                                    <h4 className="post-name"><a href="#">Ashwagandha: The #1 Herb in the World for Anxiety?</a></h4>
                                                                    <span className="p-date">Apr 26, 2019</span>
                                                                    <span className="p-comment">10 Comments</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item"><Link to={'contact'}>Contact</Link></li>
                            </ul>
                            </div>        
        </>
    )
}

export default Primarymenu;