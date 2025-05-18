import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { fireDB } from '../../../firebase/FirebaseConfig';
// import { storage } from "../../../firebase/FirebaseConfig";
import { query, where, getDocs, updateDoc, doc, collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";

// import { Cloudinary } from '@cloudinary/url-gen';
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
// import { AdvancedImage } from '@cloudinary/react';

const ProductAdd = () => {

     const [isLoading, setIsLoading] = useState(false);

     const form = useForm({
          defaultValues:{
               product_id:"",
               product_name:"",
               product_type:"",
               product_qty:"",
               product_price:""
          }    
     })
     const {register,handleSubmit,formState:{errors},reset } = form;


     const onSubmit = async (data) => {
  setIsLoading(true);
  try {
    const file = data.my_file?.[0];
    if (!file) {
      alert("Please upload a product image.");
      return;
    }

    // Upload image to Cloudinary
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "image_upload");

    const cloudinaryRes = await fetch(
      `https://api.cloudinary.com/v1_1/dtgftnps0/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const cloudinaryData = await cloudinaryRes.json();

    if (!cloudinaryData.secure_url) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const imageURL = cloudinaryData.secure_url;

    // Check for existing product with same ID
    const productsRef = collection(fireDB, "products");
    const q = query(productsRef, where("product_id", "==", data.product_id));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Product with same ID exists — update first match
      const existingDoc = querySnapshot.docs[0];
      const existingData = existingDoc.data();

      const updatedQty = parseInt(existingData.product_qty) + parseInt(data.product_qty);
      const updatedPrice = data.product_price; // Optionally average or override

      await updateDoc(doc(fireDB, "products", existingDoc.id), {
        product_qty: updatedQty,
        product_price: updatedPrice,
        imageURL,
        updatedAt: new Date().toISOString(),
      });

      alert("Product updated successfully!");
    } else {
      // No product with same ID — create new
      await addDoc(productsRef, {
        product_id: data.product_id,
        product_name: data.product_name,
        product_type: data.product_type,
        product_qty: parseInt(data.product_qty),
        product_price: data.product_price,
        imageURL,
        createdAt: new Date().toISOString(),
      });

      alert("Product added successfully!");
    }

    reset();
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to add/update product. See console for details.");
  } finally {
    setIsLoading(false);
  }
};



  return (
    <>
        <div className="page-content">

       
               <div className="container-xxl">

                    <div className="row">
                         {/* <div className="col-xl-3 col-lg-4">
                              <div className="card">
                                   <div className="card-body">
                                        <img src="assets/images/product/p-1.png" alt="" className="img-fluid rounded bg-light" />
                                        <div className="mt-3">
                                             <h4>Men Black Slim Fit T-shirt <span className="fs-14 text-muted ms-1">(Fashion)</span></h4>
                                             <h5 className="text-dark fw-medium mt-3">Price :</h5>
                                             <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                                                  <span className="text-muted text-decoration-line-through">$100</span> $80 <small className="text-muted"> (30% Off)</small>
                                             </h4>
                                             <div className="mt-3">
                                                  <h5 className="text-dark fw-medium">Size :</h5>
                                                  <div className="d-flex flex-wrap gap-2" role="group" aria-label="Basic checkbox toggle button group">
                                                       <input type="checkbox" className="btn-check" id="size-s" />
                                                       <label className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center" for="size-s">S</label>

                                                       <input type="checkbox" className="btn-check" id="size-m" checked="" />
                                                       <label className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center" for="size-m">M</label>

                                                       <input type="checkbox" className="btn-check" id="size-xl" />
                                                       <label className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center" for="size-xl">Xl</label>

                                                       <input type="checkbox" className="btn-check" id="size-xxl" />
                                                       <label className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center" for="size-xxl">XXL</label>

                                                  </div>
                                             </div>
                                             <div className="mt-3">
                                                  <h5 className="text-dark fw-medium">Colors :</h5>
                                                  <div className="d-flex flex-wrap gap-2" role="group" aria-label="Basic checkbox toggle button group">
                                                       <input type="checkbox" className="btn-check" id="color-dark" />
                                                       <label className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center" for="color-dark"> <i className="bx bxs-circle fs-18 text-dark"></i></label>

                                                       <input type="checkbox" className="btn-check" id="color-yellow" />
                                                       <label className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center" for="color-yellow"> <i className="bx bxs-circle fs-18 text-warning"></i></label>

                                                       <input type="checkbox" className="btn-check" id="color-white" />
                                                       <label className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center" for="color-white"> <i className="bx bxs-circle fs-18 text-white"></i></label>

                                                       <input type="checkbox" className="btn-check" id="color-red" />
                                                       <label className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center" for="color-red"> <i className="bx bxs-circle fs-18 text-danger"></i></label>

                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                  
                              </div>
                         </div> */}

                         <div className="col-xl-12 col-lg-12 ">
                              <form className="form-horizontal dropzone dz-clickable" onSubmit={handleSubmit(onSubmit)}>
                              <div className="card">
                                   <div className="card-header text-center">
                                        <h3 className="">Add Product Photo</h3>
                                   </div>
                                   <div className="card-body">
                                             <div className="dz-message needsclick">
                                                   <input
                                                       type="file"
                                                       id="myfile"
                                                       name="my_file"
                                                       {...register("my_file", { required: "Image is required" })}
                                                       />
                                                  <i className="bx bx-cloud-upload fs-48 text-primary"></i>
                                                 
                                                  <h3 className="mt-4">Drop your images here, or <span className="text-primary">click to browse</span></h3>
                                                  <span className="text-muted fs-13">
                                                       1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
                                                  </span>
                                             </div>
                                   </div>
                              </div>
                              <div className="card">
                              </div>
                              
                              <fieldset>

                                   <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="product_id">Product ID</label>
                                        <div className="col-md-4">
                                        <input
                                             id="product_id"
                                             name="product_id"
                                             placeholder="PRODUCT ID"
                                             className="form-control input-md"
                                             type="text"
                                             {...register("product_id",
                                                  {
                                                       required:"Please enter product ID"
                                                  }
                                             )}
                                        />
                                          <p className="text-danger"> {errors?.product_id?.message}</p>
                                        </div>
                                   </div>
                                   <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="product_id">Product Name</label>
                                        <div className="col-md-4">
                                        <input
                                             id="product_name"
                                             name="product_name"
                                             placeholder="Product Name"
                                             className="form-control input-md"                                             
                                             type="text"
                                              {...register("product_name",
                                                  {
                                                       required:"Please enter product Name"
                                                  }
                                             )}
                                        />
                                        <p className="text-danger"> {errors?.product_name?.message}</p>
                                        </div>
                                   </div>
                                   <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="product_id">Product Type</label>
                                        <div className="col-md-4">
                                        <input
                                             id="product_type"
                                             name="product_type"
                                             placeholder="Product Type"
                                             className="form-control input-md"
                                             type="text"
                                             {...register("product_type",
                                                  {
                                                       required:"Please enter product Type"
                                                  }
                                             )}
                                        />
                                        <p className="text-danger"> {errors?.product_type?.message}</p>

                                        </div>
                                   </div>
                                   <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="product_id">Product Quantity</label>
                                        <div className="col-md-4">
                                        <input
                                             id="product_qty"
                                             name="product_qty"
                                             placeholder="Product Quantity"
                                             className="form-control input-md"
                                             type="text"
                                             {...register("product_qty",
                                                  {
                                                       required:"Please enter product Qunatity"
                                                  }
                                             )}
                                        />
                                        <p className="text-danger"> {errors?.product_qty?.message}</p>

                                        </div>
                                   </div>
                                   <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="product_id">Product Price</label>
                                        <div className="col-md-4">
                                        <input
                                             id="product_price"
                                             name="product_price"
                                             placeholder="Product Price"
                                             className="form-control input-md"
                                             type="text"
                                              {...register("product_price",
                                                  {
                                                       required:"Please enter product Price"
                                                  }
                                             )}
                                        />
                                        <p className="text-danger"> {errors?.product_price?.message}</p>

                                        </div>
                                   </div>
                                   <div className="form-group text-center">
                                        
                                  <div className="col-md-12">
                                  <button className='btn btn-success m-auto' type="submit" disabled={isLoading}>
                                   {isLoading ? "Saving..." : "Create Product"}
                                   </button>
                                        </div>
                                   </div>
                              </fieldset>
                              </form>

                         </div>
                    </div>
               </div>

          </div>
    </>
  )
}

export default ProductAdd
