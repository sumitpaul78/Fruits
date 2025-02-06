import Searchbox from "../Searchbox";

const Sidenav =()=>{
    return(
        <>
     <div className="header-bottom hidden-sm hidden-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="vertical-menu vertical-category-block">
                                <div className="block-title">
                                    <span className="menu-icon">
                                        <span className="line-1"></span>
                                        <span className="line-2"></span>
                                        <span className="line-3"></span>
                                    </span>
                                    <span className="menu-title">All departments</span>
                                    <span className="angle" data-tgleclass="fa fa-caret-down"><i className="fa fa-caret-up" aria-hidden="true"></i></span>
                                </div>
                                <div className="wrap-menu">
                                    <ul className="menu clone-main-menu">
                                        <li className="menu-item menu-item-has-children has-megamenu">
                                            <a href="#" className="menu-name" data-title="Fruit & Nut Gifts"><i className="biolife-icon icon-fruits"></i>Fruit & Nut Gifts</a>
                                            <div className="wrap-megamenu lg-width-900 md-width-640">
                                                <div className="mega-content">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-sm-12 xs-margin-bottom-25 md-margin-bottom-0">
                                                            <div className="wrap-custom-menu vertical-menu">
                                                                <h4 className="menu-title">Fresh Fuits</h4>
                                                                <ul className="menu">
                                                                    <li><a href="#">Fruit & Nut Gifts</a></li>
                                                                    <li><a href="#">Mixed Fruits</a></li>
                                                                    <li><a href="#">Oranges</a></li>
                                                                    <li><a href="#">Bananas & Plantains</a></li>
                                                                    <li><a href="#">Fresh Gala Apples</a></li>
                                                                    <li><a href="#">Berries</a></li>
                                                                    <li><a href="#">Pears</a></li>
                                                                    <li><a href="#">Produce</a></li>
                                                                    <li><a href="#">Snack Foods</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-12 lg-padding-left-23 xs-margin-bottom-25 md-margin-bottom-0">
                                                            <div className="wrap-custom-menu vertical-menu">
                                                                <h4 className="menu-title">Nut Gifts</h4>
                                                                <ul className="menu">
                                                                    <li><a href="#">Non-Dairy Coffee Creamers</a></li>
                                                                    <li><a href="#">Coffee Creamers</a></li>
                                                                    <li><a href="#">Mayonnaise</a></li>
                                                                    <li><a href="#">Almond Milk</a></li>
                                                                    <li><a href="#">Ghee</a></li>
                                                                    <li><a href="#">Beverages</a></li>
                                                                    <li><a href="#">Ranch Salad Dressings</a></li>
                                                                    <li><a href="#">Hemp Milk</a></li>
                                                                    <li><a href="#">Nuts & Seeds</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-4 col-sm-12 lg-padding-left-50 xs-margin-bottom-25 md-margin-bottom-0">
                                                            <div className="biolife-products-block max-width-270">
                                                                <h4 className="menu-title">Bestseller Products</h4>
                                                                <ul className="products-list default-product-style biolife-carousel nav-none-after-1k2 nav-center" data-slick='{"rows":1,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":1, "responsive":[{"breakpoint":767, "settings":{ "arrows": false}}]}' >
                                                                    <li className="product-item">
                                                                        <div className="contain-product none-overlay">
                                                                            <div className="product-thumb">
                                                                                <a href="#" className="link-to-product">
                                                                                    <img src="assets/images/products/p-08.jpg" alt="dd" width="270" height="270" className="product-thumnail" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="info">
                                                                                <b className="categories">Fresh Fruit</b>
                                                                                <h4 className="product-title"><a href="#" className="pr-name">National Fresh Fruit</a></h4>
                                                                                <div className="price">
                                                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="product-item">
                                                                        <div className="contain-product none-overlay">
                                                                            <div className="product-thumb">
                                                                                <a href="#" className="link-to-product">
                                                                                    <img src="assets/images/products/p-11.jpg" alt="dd" width="270" height="270" className="product-thumnail" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="info">
                                                                                <b className="categories">Fresh Fruit</b>
                                                                                <h4 className="product-title"><a href="#" className="pr-name">National Fresh Fruit</a></h4>
                                                                                <div className="price">
                                                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="product-item">
                                                                        <div className="contain-product none-overlay">
                                                                            <div className="product-thumb">
                                                                                <a href="#" className="link-to-product">
                                                                                    <img src="assets/images/products/p-15.jpg" alt="dd" width="270" height="270" className="product-thumnail" />
                                                                                </a>
                                                                            </div>
                                                                            <div className="info">
                                                                                <b className="categories">Fresh Fruit</b>
                                                                                <h4 className="product-title"><a href="#" className="pr-name">National Fresh Fruit</a></h4>
                                                                                <div className="price">
                                                                                    <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                                                    <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 md-margin-top-9">
                                                            <div className="biolife-brand" >
                                                                <ul className="brands">
                                                                    <li><a href="#"><img src="assets/images/megamenu/brand-organic.png" width="161" height="136" alt="organic" /></a></li>
                                                                    <li><a href="#"><img src="assets/images/megamenu/brand-explore.png" width="160" height="136" alt="explore" /></a></li>
                                                                    <li><a href="#"><img src="assets/images/megamenu/brand-organic-2.png" width="99" height="136" alt="organic 2" /></a></li>
                                                                    <li><a href="#"><img src="assets/images/megamenu/brand-eco-teas.png" width="164"  height="136" alt="eco teas" /></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item menu-item-has-children has-megamenu">
                                            <a href="#" className="menu-name" data-title="Vegetables"><i className="biolife-icon icon-broccoli-1"></i>Vegetables</a>
                                            <div className="wrap-megamenu lg-width-900 md-width-640 background-mega-01">
                                                <div className="mega-content">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-sm-12 xs-margin-bottom-25 md-margin-bottom-0">
                                                            <div className="wrap-custom-menu vertical-menu">
                                                                <h4 className="menu-title">Vegetables</h4>
                                                                <ul className="menu">
                                                                    <li><a href="#">Fruit & Nut Gifts</a></li>
                                                                    <li><a href="#">Mixed Fruits</a></li>
                                                                    <li><a href="#">Oranges</a></li>
                                                                    <li><a href="#">Bananas & Plantains</a></li>
                                                                    <li><a href="#">Fresh Gala Apples</a></li>
                                                                    <li><a href="#">Berries</a></li>
                                                                    <li><a href="#">Pears</a></li>
                                                                    <li><a href="#">Produce</a></li>
                                                                    <li><a href="#">Snack Foods</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12 lg-padding-left-23 xs-margin-bottom-25 md-margin-bottom-0">
                                                            <div className="wrap-custom-menu vertical-menu">
                                                                <h4 className="menu-title">Gifts</h4>
                                                                <ul className="menu">
                                                                    <li><a href="#">Non-Dairy Coffee Creamers</a></li>
                                                                    <li><a href="#">Coffee Creamers</a></li>
                                                                    <li><a href="#">Mayonnaise</a></li>
                                                                    <li><a href="#">Almond Milk</a></li>
                                                                    <li><a href="#">Ghee</a></li>
                                                                    <li><a href="#">Beverages</a></li>
                                                                    <li><a href="#">Ranch Salad Dressings</a></li>
                                                                    <li><a href="#">Hemp Milk</a></li>
                                                                    <li><a href="#">Nuts & Seeds</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-5 col-md-4 col-sm-12 lg-padding-left-57 md-margin-bottom-30">
                                                            <div className="biolife-brand vertical md-boder-left-30">
                                                                <h4 className="menu-title">Hot Brand</h4>
                                                                <ul className="brands">
                                                                    <li><a href="#"><img src="assets/images/megamenu/v-brand-organic.png" width="167" height="74" alt="organic" /></a></li>
                                                                    <li><a href="#"><img src="assets/images/megamenu/v-brand-explore.png" width="167" height="72" alt="explore" /></a></li>
                                                                    <li><a href="#"><img src="assets/images/megamenu/v-brand-organic-2.png" width="167" height="99" alt="organic 2" /></a></li>
                                                                    <li><a href="#"><img src="assets/images/megamenu/v-brand-eco-teas.png" width="167" height="67" alt="eco teas" /></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item menu-item-has-children has-megamenu">
                                            <a href="#" className="menu-name" data-title="Fresh Berries"><i className="biolife-icon icon-grape"></i>Fresh Berries</a>
                                            <div className="wrap-megamenu lg-width-900 md-width-640 background-mega-02">
                                                <div className="mega-content">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 sm-col-12 md-margin-bottom-83 xs-margin-bottom-25">
                                                            <div className="wrap-custom-menu vertical-menu">
                                                                <h4 className="menu-title">Fresh Berries</h4>
                                                                <ul className="menu">
                                                                    <li><a href="#">Fruit & Nut Gifts</a></li>
                                                                    <li><a href="#">Mixed Fruits</a></li>
                                                                    <li><a href="#">Oranges</a></li>
                                                                    <li><a href="#">Bananas & Plantains</a></li>
                                                                    <li><a href="#">Fresh Gala Apples</a></li>
                                                                    <li><a href="#">Berries</a></li>
                                                                    <li><a href="#">Pears</a></li>
                                                                    <li><a href="#">Produce</a></li>
                                                                    <li><a href="#">Snack Foods</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 sm-col-12 lg-padding-left-23 xs-margin-bottom-36px md-margin-bottom-0">
                                                            <div className="wrap-custom-menu vertical-menu">
                                                                <h4 className="menu-title">Gifts</h4>
                                                                <ul className="menu">
                                                                    <li><a href="#">Non-Dairy Coffee Creamers</a></li>
                                                                    <li><a href="#">Coffee Creamers</a></li>
                                                                    <li><a href="#">Mayonnaise</a></li>
                                                                    <li><a href="#">Almond Milk</a></li>
                                                                    <li><a href="#">Ghee</a></li>
                                                                    <li><a href="#">Beverages</a></li>
                                                                    <li><a href="#">Ranch Salad Dressings</a></li>
                                                                    <li><a href="#">Hemp Milk</a></li>
                                                                    <li><a href="#">Nuts & Seeds</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-4 sm-col-12 lg-padding-left-25 md-padding-top-55">
                                                            <div className="biolife-banner layout-01">
                                                                <h3 className="top-title">Farm Fresh</h3>
                                                                <p className="content"> All the Lorem Ipsum generators on the Internet tend.</p>
                                                                <b className="bottomm-title">Berries Series</b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item"><a href="#" className="menu-name" data-title="Ocean Foods"><i className="biolife-icon icon-fish"></i>Ocean Foods</a></li>
                                        <li className="menu-item menu-item-has-children has-child">
                                            <a href="#" className="menu-name" data-title="Butter & Eggs"><i className="biolife-icon icon-honey"></i>Butter & Eggs</a>
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
                                        <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-fast-food"></i>Fastfood</a></li>
                                        <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-beef"></i>Fresh Meat</a></li>
                                        <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-onions"></i>Fresh Onion</a></li>
                                        <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-avocado"></i>Papaya & Crisps</a></li>
                                        <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-contain"></i>Oatmeal</a></li>
                                        <li className="menu-item"><a href="#" className="menu-title"><i className="biolife-icon icon-fresh-juice"></i>Fresh Bananas & Plantains</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 padding-top-2px">
                            <Searchbox />
                            <div className="live-info">
                                <p className="telephone"><i className="fa fa-phone" aria-hidden="true"></i><b className="phone-number">(+900) 123 456 7891</b></p>
                                <p className="working-time">Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidenav;