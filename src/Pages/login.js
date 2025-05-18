import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
      <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
       </div>

      <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><a href="index-2" className="permal-link">Home</a></li>
                <li className="nav-item"><span className="current-page">Authentication</span></li>
            </ul>
        </nav>
         </div>

    <div className="page-contain login-page">

        
        <div id="main-content" className="main-content">
            <div className="container">

                <div className="row">

                  
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="signin-container">
                            <form action="#" name="frm-login" method="post">
                                <p className="form-row">
                                    <label for="fid-name">Email Address:<span className="requite">*</span></label>
                                    <input type="text" id="fid-name" name="name" value="" className="txt-input" />
                                </p>
                                <p className="form-row">
                                    <label for="fid-pass">Password:<span className="requite">*</span></label>
                                    <input type="email" id="fid-pass" name="email" value="" className="txt-input" />
                                </p>
                                <p className="form-row wrap-btn">
                                    <button className="btn btn-submit btn-bold" type="submit">sign in</button>
                                    <a href="#" className="link-to-help">Forgot your password</a>
                                </p>
                            </form>
                        </div>
                    </div>

                   
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="register-in-container">
                            <div className="intro">
                                <h4 className="box-title">New Customer?</h4>
                                <p className="sub-title">Create an account with us and you’ll be able to:</p>
                                <ul className="lis">
                                    <li>Check out faster</li>
                                    <li>Save multiple shipping anddesses</li>
                                    <li>Access your order history</li>
                                    <li>Track new orders</li>
                                    <li>Save items to your Wishlist</li>
                                </ul>
                                <Link to='/signin' className="btn btn-bold">Create an account</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Login;
