import Logo from "../../assets/images/organic-3.png";

const Footer = () =>{
    return(
        <>
             <footer id="footer" className="footer layout-03">
        <div className="footer-content background-footer-03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-9">
                        <section className="footer-item">
                            <a href="index-2.html" className="logo footer-logo"><img src={Logo} alt="biolife logo" width="135" height="34" /></a>
                            <div className="footer-phone-info">
                                <i className="biolife-icon icon-head-phone"></i>
                                <p className="r-info">
                                    <span>Got Questions ?</span>
                                    <span>(700)  9001-1909  (900) 689 -66</span>
                                </p>
                            </div>
                            <div className="newsletter-block layout-01">
                                <h4 className="title">Newsletter Signup</h4>
                                <div className="form-content">
                                    <form action="#" name="new-letter-foter">
                                        <input type="email" className="input-text email" value="" placeholder="Your email here..." />
                                        <button type="submit" className="bnt-submit" name="ok">Sign up</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                        <section className="footer-item">
                            <h3 className="section-title">Useful Links</h3>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="wrap-custom-menu vertical-menu-2">
                                        <ul className="menu">
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">About Our Shop</a></li>
                                            <li><a href="#">Secure Shopping</a></li>
                                            <li><a href="#">Delivery infomation</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Our Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="wrap-custom-menu vertical-menu-2">
                                        <ul className="menu">
                                            <li><a href="#">Who We Are</a></li>
                                            <li><a href="#">Our Services</a></li>
                                            <li><a href="#">Projects</a></li>
                                            <li><a href="#">Contacts Us</a></li>
                                            <li><a href="#">Innovation</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                        <section className="footer-item">
                            <h3 className="section-title">Transport Offices</h3>
                            <div className="contact-info-block footer-layout xs-padding-top-10px">
                                <ul className="contact-lines">
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-location"></i>
                                            <b className="desc">7563 St. Vicent Place, Glasgow, Greater Newyork NH7689, UK </b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-phone"></i>
                                            <b className="desc">Phone: (+067) 234 789  (+068) 222 888</b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-letter"></i>
                                            <b className="desc">Email:  contact@company.com</b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-clock"></i>
                                            <b className="desc">Hours: 7 Days a week from 10:00 am</b>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="biolife-social inline">
                                <ul className="socials">
                                    <li><a href="#" title="twitter" className="socail-btn"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="facebook" className="socail-btn"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="pinterest" className="socail-btn"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="youtube" className="socail-btn"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="instagram" className="socail-btn"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="separator sm-margin-top-70px xs-margin-top-40px"></div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className="copy-right-text"><p><a href="templateshub.net">Templates Hub</a></p></div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className="payment-methods">
                            <ul>
                                <li><a href="#" className="payment-link"><img src="../../images/card1.jpg" width="51" height="36" alt="" /></a></li>
                                <li><a href="#" className="payment-link"><img src="../../images/card2.jpg" width="51" height="36" alt="" /></a></li>
                                <li><a href="#" className="payment-link"><img src="../../images/card3.jpg" width="51" height="36" alt="" /></a></li>
                                <li><a href="#" className="payment-link"><img src="../../images/card4.jpg" width="51" height="36" alt="" /></a></li>
                                <li><a href="#" className="payment-link"><img src="../../images/card5.jpg" width="51" height="36" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    );
};

export default Footer;