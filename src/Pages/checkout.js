import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal, resetCart } from "../features/cartSlice";
import { useForm } from "react-hook-form";
import { fireDB } from '../firebase/FirebaseConfig';
import { query, where, getDocs, updateDoc, doc, collection, addDoc } from 'firebase/firestore';
import CurrencyFormat from "../global-component/CurrencyFormat";
import { useNavigate } from "react-router-dom";
import { parsePrice } from '../global-component/CurrencyFormat';


const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const form = useForm({
    mode:"all",
    defaultValues:{
        firstName:"",
        lastName:"",
        email:"",
        address:"",
        phn:"",
        country:"",
        state:"",       
        zip:"",
        
    }
  })
  const { register, 
    handleSubmit,
    watch,
    formState: { errors },reset } = form;

    // Order Product
     const onSubmit = async(data) =>{
        setIsLoading(true);
        const productsRef = collection(fireDB, "order_details");
        const querySnapshot = await getDocs(productsRef);
        
        let maxId = 0;
        querySnapshot.forEach((docSnap) => {
        const product = docSnap.data();
        if (typeof product.orderID === "number" && product.orderID > maxId) {
        maxId = product.orderID;
         }
        });
        
        const newOrderId = maxId + 1;
      try {
    await addDoc(productsRef, {
      orderID: newOrderId,
      orderStatus: data.orderStatus,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      address: data.address,
      phn: data.phn,
      country: data.country,
      state: data.state,
      zip: data.zip,     
      cart,
      totalPrice,
      totalQuantity,
      createdAt: new Date().toISOString(),
    });

    toast.success("Product added successfully!");
    dispatch(resetCart());
    reset();
    navigate(`/thankyou/${newOrderId}`);
  } catch (error) {
    console.error("Error:", error);
    toast.alert("Failed to add product. See console for details.");
  } finally {
    setIsLoading(false);
  }
     };
    

  return (
    <>
      <div className="hero-section hero-background">
        <h1 className="page-title">Organic Fruits</h1>
      </div>

      <div className="container">
        <nav className="biolife-nav">
          <ul>
            <li className="nav-item">
              <Link to={"/"} className="permal-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <span className="current-page">Shopping Checkout</span>
            </li>
          </ul>
        </nav>
      </div>

      <div className="page-contain checkout">
        <div id="main-content" className="main-content">
          <div className="container sm-margin-top-37px">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                <div className="checkout-progress-wrap">
                  <ul className="steps">
                    {/* <li className="step 1st">
                      <div className="checkout-act active">
                        <h3 className="title-box">
                          <span className="number">1</span>Customer
                        </h3>
                        <div className="box-content">
                          <p className="txt-desc">
                            Checking out as a{" "}
                            <a className="pmlink" href="#">
                              Guest?
                            </a>{" "}
                            You’ll be able to save your details to create an
                            account with us later.
                          </p>
                          <div className="login-on-checkout">
                            <form action="#" name="frm-login" method="post">
                              <p className="form-row">
                                <label for="input_email">Email Address</label>
                                <input
                                  type="email"
                                  name="email"
                                  id="input_email"
                                 
                                  placeholder="Your email"
                                />
                                <button
                                  type="submit"
                                  name="btn-sbmt"
                                  className="btn"
                                >
                                  Continue As Guest
                                </button>
                              </p>
                              <p className="form-row">
                                <input
                                  type="checkbox"
                                  name="subcribe"
                                  id="input_subcribe"
                                />
                                <label for="input_subcribe">
                                  Subscribe to our newsletter
                                </label>
                              </p>
                              <p className="msg">
                                Already have an account?{" "}
                                <a href="#" className="link-forward">
                                  Sign in now
                                </a>
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </li> */}
                    <li className="step 2nd">
                      <div className="checkout-act">
                        <h3 className="title-box">
                          <span className="number">1</span>Shipping Details
                        </h3>
                      </div>
                      <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mt-3">
                            <div className="col-md-6 mb-3 d-none">
                            <label >Order Status</label>
                            <input
                              type="hidden"
                              className="form-control"
                              placeholder=""
                              value="open"  {...register("orderStatus")}
                            />
                          <p className="text-danger"> {errors?.firstName?.message}</p>
                                   
                          </div>

                          <div className="col-md-6 mb-3">
                            <label >First name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your First Name"
                              {...register("firstName",
                                {
                                    required:"Please Enter first name",
                                    minLength:{value:3, message:"Please enter atleast 3 letter"}
                                }
                              )}
                              
                            />
                          <p className="text-danger"> {errors?.firstName?.message}</p>
                                   
                          </div>
                          <div className="col-md-6 mb-3">
                            <label for="lastName">Last name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Last Name"
                              {...register("lastName",
                               
                                  {
                                      required:"Please Enter last name",
                                      minLength:{value:3, message:"Please enter atleast 3 word"}
                                  }
                                )}
                            />
                            <p className="text-danger"> {errors?.lastName?.message}</p>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label for="email">
                            Email 
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="you@example.com"
                            {...register("email",
                              {
                                required:"Please Enter Valid Email",
                               pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message:"Enter valid email"}
                              }
                            )}
                          />
                           <p className="text-danger"> {errors?.email?.message}</p>
                        </div>

                        <div className="mb-3">
                          <label for="phn">Phone Number</label>
                          <input
                            type="number"
                            className="form-control"
                            id="phn"
                            placeholder="Enter Your Phone"
                           
                            {...register("phn",
                              {
                                required:"Please Enter Your contact number",
                                maxLength:{value:10, message:"Phone no should be 10 digit"}
                              }
                            )}
                          />
                           <p className="text-danger"> {errors?.phn?.message}</p>
                        </div>

                        <div className="mb-3">
                          <label for="address">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="1234 Main St"
                            {...register("address",
                              {
                                required:"Please Enter Your Address"
                              }
                            )}
                          />
                           <p className="text-danger"> {errors?.address?.message}</p>
                        </div>

                        

                        <div className="row">
                          <div className="col-md-5 mb-3">
                            <label for="state">Country</label>
                            <select class="form-select" aria-label="" 
                              {...register("country",
                              {
                                required:"Please Enter Your country"
                              }
                            )}>
                              <option selected>Select one</option>
                              <option value="US">United State</option>
                              <option value="India">India</option>
                            </select>
                             <span className="text-danger"> {errors?.country?.message}</span>
                          </div>
                          <div className="col-md-4 mb-3">
                             <label for="state">State</label>
                            <select class="form-select" aria-label=""
                               {...register("state",
                              {
                                required:"Please Enter Your state"
                              }
                            )}>
                              <option selected>Select one</option>
                              <option value="WB">West Begnal</option>
                              <option value="Dl">Delhi</option>
                            </select>
                             <span className="text-danger"> {errors?.state?.message}</span>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label for="zip">Zip</label>
                            <input
                              type="number"
                              className="form-control"
                              id="zip"
                              placeholder="Enter Your Zip"
                              {...register("zip",
                              {
                                required:"Please Enter Your zip"
                              }
                            )}
                            />
                           <span className="text-danger"> {errors?.zip?.message}</span>
                          </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="same-address"
                          />
                          <label
                            className="custom-control-label"
                            for="same-address"
                          >
                            Shipping address is the same as my billing address
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="save-info"
                          />
                          <label
                            className="custom-control-label"
                            for="save-info"
                          >
                            Save this information for next time
                          </label>
                        </div>
                        <hr className="mb-4" />

                        <h4 className="mb-3">Payment Mode</h4>

                        <div className="d-block my-3">
                          {/* <div className="custom-control custom-radio">
                            <input
                              id="credit"
                              name="paymentMethod"
                              type="radio"
                              className="custom-control-input"
                              {...register("paymenttype",
                                {
                                  required:"Please select Any One"
                                }
                              )}
                            />
                            <label
                              className="custom-control-label"
                              for="credit"
                            >
                              Credit card
                            </label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input
                              id="debit"
                              name="paymentMethod"
                              type="radio"
                              className="custom-control-input"
                              {...register("paymenttype",
                                {
                                  required:"Please select Any One"
                                }
                              )}                              
                            />
                            <label className="custom-control-label" for="debit">
                              Debit card
                            </label>
                          </div> */}
                          <div className="custom-control custom-radio">
                            <input
                              id="paypal"
                              name="paymentMethod"
                              type="radio"
                              className="custom-control-input"
                              {...register("paymenttype",
                                {
                                  required:"Please select Payment mode"
                                }
                              )}                              
                            />
                            <label
                              className="custom-control-label"
                              for="cash"
                            > 
                              Cash On Delivery
                            </label>
                            <div className="text-danger">{errors?.paymenttype?.message}</div>
                          </div>
                        </div>
                        {/* <div className="row">
                          <div className="col-md-6 mb-3">
                            <label for="cc_name">Name on card</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc_name"
                              placeholder="Please Enter Card Name"
                              {...register("cc_name",
                                {
                                  required:"Please Enter Card Name"
                                }
                              )}
                            />
                                <div className="text-danger">{errors?.cc_name?.message}</div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label for="cc_number">Credit card number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc_number"
                              placeholder="Please Enter Card Number"
                              {...register("cc_number",
                                {
                                  required:"Please Enter Card Number",
                                  maxLength:{value:16, message:"Please enter 16 digit card No"},
                                  pattern:{value:/^[0-9]/, message:"Enter Only Number"}

                                }
                              )}
                            />
                              <div className="text-danger">{errors?.cc_number?.message}</div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <label for="cc_expiration">Expiration</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc_exp"
                              placeholder="Please Enter Exp Date"
                              {...register("cc_exp",
                                {
                                  required:"Please Enter Card Exp Date"
                                }
                              )}
                            />
                             <div className="text-danger">{errors?.cc_exp?.message}</div>
                          
                          </div>
                          <div className="col-md-4 mb-3">
                            <label for="cc-expiration">CVV</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cc_cvv"
                              placeholder="Please Enter CVV"
                              {...register("cc_cvv",
                                {
                                  required:"Please Enter CVV",
                                  maxLength:{value:3, message:"Please enter 3 digit card No"},
                                  pattern:{value:/^[0-9]/, message:"Enter Only Number"}

                                }
                              )}
                            />
                              <div className="text-danger">{errors?.cc_cvv?.message}</div>
                          </div>
                        </div> */}
                        <hr className="mb-4" />
                        <button
                          className="btn btn-danger"
                          type="submit"  disabled={isLoading}
                        >
                          {isLoading ? "Processing..." : "Continue to checkout"}
                        </button>
                      </form>
                    </li>
                    {/* <li className="step 3rd">
                      <div className="checkout-act">
                        <h3 className="title-box">
                          <span className="number">3</span>Billing
                        </h3>
                      </div>
                    </li>
                    <li className="step 4th">
                      <div className="checkout-act">
                        <h3 className="title-box">
                          <span className="number">4</span>Payment
                        </h3>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12 sm-padding-top-48px sm-margin-bottom-0 xs-margin-bottom-15px">
                <div className="order-summary sm-margin-bottom-80px">
                  <div className="title-block">
                    <h3 className="title">Order Summary</h3>
                  </div>
                  <div className="cart-list-box short-type">
                    <span className="number">{totalQuantity} items</span>
                    <ul className="cart-list">
                      {cart.map((item) => (
                        <span key={item.product_id}>
                          <li className="cart-elem">
                            <div className="cart-item">
                              <div className="product-thumb">
                                <a className="prd-thumb" href="#">
                                  <figure>
                                    <img
                                      src={item.imageURL}
                                      width="113"
                                      height="113"
                                      alt="shop-cart"
                                    />
                                  </figure>
                                </a>
                              </div>
                              <div className="info">
                                <span className="txt-quantity">
                                  {item.quantity}X
                                </span>
                                <a href="#" className="pr-name">
                                  {item.product_name}
                                </a>
                              </div>
                              <div className="price price-contain">
                                <ins>
                                  <span className="price-amount">
                                    <span className="currencySymbol"></span>
                                     <CurrencyFormat value={item.quantity *  parsePrice(item.discount_price)} />
                                  </span>
                                </ins>
                                <del>
                                  <span className="price-amount">
                                    <span className="currencySymbol"></span>
                                    <CurrencyFormat value={item.quantity *  parsePrice(item.product_price)} />
                                  </span>
                                </del>
                              </div>
                            </div>
                          </li>
                        </span>
                      ))}
                    </ul>
                    <ul className="subtotal">
                      <li>
                        <div className="subtotal-line">
                          <b className="stt-name">Subtotal</b>
                          <span className="stt-price">
                              <CurrencyFormat value={totalPrice} />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="subtotal-line">
                          <b className="stt-name">Shipping</b>
                          <span className="stt-price">$0.00</span>
                        </div>
                      </li>
                      <li>
                        <div className="subtotal-line">
                          <b className="stt-name">Tax</b>
                          <span className="stt-price">$0.00</span>
                        </div>
                      </li>

                      <li>
                        <div className="subtotal-line">
                          <b className="stt-name">total:</b>
                          <span className="stt-price">
                           <CurrencyFormat value={totalPrice} />
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
