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
                                <li className="menu-item">
                                    <Link to="/shop" className="menu-name" data-title="Shop" >Shop</Link>
                                    {/* <div className="wrap-megamenu lg-width-900 md-width-750">
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
                                    </div> */}
                                </li>
                              
                                
                                <li className="menu-item menu-item-has-children">
                                    <Link to="/blog" className="menu-name" data-title="Blog">Blog</Link>
                                    
                                </li>
                                <li className="menu-item"><Link to="/contact">Contact</Link></li>
                               
                            </ul>
                            </div>        
        </>
    )
}

export default Primarymenu;