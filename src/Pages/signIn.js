import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/FirebaseConfig';


const SignIn =()=> {

    // const navigateUrl = useNavigate();
    const [UserSignin, SetUserSignin] = useState({
        username: "",
        userph: "",
        useremail: "",
        userpassword: "",
    });

    const handleChange = (e) =>{
        SetUserSignin({
            ...UserSignin, [e.target.name]:e.target.value
        })
        // console.log(UserSignin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const { username, userph, useremail, userpassword } = UserSignin;
      
        if (!username || !userph || !useremail || !userpassword) {
          toast.error("Please fill in all fields.");
          return;
        }
      
        const email = useremail.trim();
        const password = userpassword.trim();
        const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
      
        if (!isValidEmail(email)) {
          toast.error("Invalid email format.");
          return;
        }
      
        createUserWithEmailAndPassword(auth, email, password)
          .then(async(res) => {
            toast.success("User registered successfully!");
            const user = res.user;
            // console.log("User created:", user);
           await updateProfile(user,{
                displayName:UserSignin.username
            });
          })
         
          .catch((err) => {
            console.error(err);
            toast.error(err.message);
          });
        //   navigateUrl("/login")
      };
      

  return (
    <>
       <div className="hero-section hero-background">
        <h1 className="page-title">Sign In</h1>
       </div>

      <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><a href="#" className="permal-link">Home</a></li>
                <li className="nav-item"><span className="current-page">SignIn</span></li>
            </ul>
        </nav>
         </div>

    <div className="page-contain login-page">

        
        <div id="main-content" className="main-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="signin-container">
                            <form name="frm-login">
                            <p className="form-row">
                                    <label for="fid-name">User Name:<span className="requite">*</span></label>
                                    <input type="text" name="username" value={UserSignin.username} className="txt-input" onChange={handleChange}/>
                                </p>
                                 <p className="form-row">
                                    <label for="fid-name">Contact No:<span className="requite">*</span></label>
                                    <input type="text"  name="userph" value={UserSignin.userph} className="txt-input" onChange={handleChange}/>
                                </p>
                                <p className="form-row">
                                    <label for="fid-name">Email Address:<span className="requite">*</span></label>
                                    <input type="text" name="useremail" value={UserSignin.useremail} className="txt-input" onChange={handleChange}/>
                                </p>
                                <p className="form-row">
                                    <label for="fid-pass">Password:<span className="requite">*</span></label>
                                    <input type="password"  name="userpassword" value={UserSignin.userpassword} className="txt-input" onChange={handleChange}/>
                                </p>
                                <p className="form-row wrap-btn">
                                    <button className="btn btn-submit btn-bold" type="button" onClick={handleSubmit}>sign in</button>
                                   
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignIn;
