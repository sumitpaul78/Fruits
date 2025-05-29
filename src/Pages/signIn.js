import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/FirebaseConfig';
import { doc, setDoc } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig"; // adjust as needed
import { useForm } from "react-hook-form";

const SignIn =()=> {
const [isLoading, setIsLoading] = useState(false);
   
 const form = useForm({
    
    mode:"all",
       defaultValues:{
        username:"",
        userph:"",
        useremail:"",
        userpassword:"",        
    }
   
  })
 const { register, 
    handleSubmit,
    watch,
    formState: { errors },reset } = form;

   const onSubmit = async (data) => {
  setIsLoading(true);
  try {
    const res = await createUserWithEmailAndPassword(auth, data.useremail, data.userpassword);
    const user = res.user;
    await setDoc(doc(fireDB, "users", user.uid), {
      username: data.username,
      userph: data.userph,
      email: data.useremail,
      uid: user.uid,
      createdAt: new Date().toISOString(),
    });
    toast.success("User registered successfully!");
    reset();
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  } finally {
    setIsLoading(false);
  }
};

    
  return (
    <>
       <div className="hero-section hero-background">
        <h1 className="page-title">Sign In</h1>
       </div>

      <div className="container">
        <nav className="biolife-nav">
            <ul>
                <li className="nav-item"><Link to="" className="permal-link">Home</Link></li>
                <li className="nav-item"><span className="current-page">SignIn</span></li>
            </ul>
        </nav>
         </div>

    <div className="page-contain login-page pb-5">

        
        <div id="main-content" className="main-content">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 col-sm-6 m-auto signin-content">
                        <div className="signin-container">
                            <form name="frm-login"  onSubmit={handleSubmit(onSubmit)}>
                            <p className="form-row">
                                    <label for="fid-name">User Name:<span className="requite">*</span></label>
                                    <input type="text" className="txt-input"                                    
                                    {...register("username",
                                    {
                                    required:"Please Enter user name",
                                    minLength:{value:3, message:"Please enter atleast 3 letter"}
                                    }
                                     )}
                                    />
                                    <span className="text-danger"> {errors?.username?.message}</span>
                                </p>
                                 <p className="form-row">
                                    <label for="fid-name">Contact No:<span className="requite">*</span></label>
                                    <input type="text" className="txt-input" 
                                    {...register("userph",
                                    {
                                    required:"Please Enter your contact no",
                                    minLength:{value:10, message:"Please enter atleast 10 letter"}
                                    }
                                    )}
                                    />
                                    <span className="text-danger"> {errors?.userph?.message}</span>
                                </p>
                                <p className="form-row">
                                    <label for="fid-name">Email Address:<span className="requite">*</span></label>
                                    <input type="text" name="useremail" className="txt-input"
                                      placeholder="you@example.com"
                                        {...register("useremail",
                                        {
                                        required:"Please Enter Valid Email",
                                        pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message:"Enter valid email"}
                                        }
                                        )}
                                    />
                                     <span className="text-danger"> {errors?.useremail?.message}</span>
                                </p>
                                <p className="form-row">
                                    <label for="fid-pass">Password:<span className="requite">*</span></label>
                                    <input type="password" className="txt-input"
                                     {...register("userpassword",
                                    {
                                    required:"Please Enter your password",
                                    minLength:{value:10, message:"Please enter atleast 10 letter"}
                                    }
                                    )}
                                    />
                                    <span className="text-danger"> {errors?.userpassword?.message}</span>
                                </p>
                                <p className="form-row wrap-btn">
                                      <button
                                        className="btn btn-submit btn-bold"
                                        type="submit"  disabled={isLoading}
                                        >
                                        {isLoading ? "Processing..." : "Continue to checkout"}
                                        </button>
                                    
                                    <p>Already have account ? <Link to="/login" >Log In</Link> </p>
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
