import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { fireDB } from '../../../firebase/FirebaseConfig';
import { query, where, getDocs, updateDoc, doc, collection, addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
// import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";

// import { Cloudinary } from '@cloudinary/url-gen';
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
// import { AdvancedImage } from '@cloudinary/react';

const ProductAdd = () => {

     const [isLoading, setIsLoading] = useState(false);
     const [isActive, setIsActive] = useState(false);
     const [isLatest, setIsLatest] = useState(false);
     const [isDealpro, setIsDealPro] = useState(false);
     

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

// Data push in FireDB
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

    // Get highest existing product_id
    const productsRef = collection(fireDB, "products");
    const querySnapshot = await getDocs(productsRef);

    let maxId = 0;
    querySnapshot.forEach((docSnap) => {
      const product = docSnap.data();
      if (typeof product.product_id === "number" && product.product_id > maxId) {
        maxId = product.product_id;
      }
    });

    const newProductId = maxId + 1;

    // Create new product
    await addDoc(productsRef, {
      product_id: newProductId,
      product_name: data.product_name,
      product_type: data.product_type,
      product_qty: parseInt(data.product_qty),
      product_price: data.product_price,
      discount_price: data.discount_price,
      product_description: data.product_description,
      imageURL,
      isActive,
      isLatest,
      isDealpro,
      createdAt: new Date().toISOString(),
    });

    toast.success("Product added successfully!");
    reset();
    setIsActive(false);
    setIsLatest(false);
    setIsDealPro(false);
  } catch (error) {
    console.error("Error:", error);
    toast.alert("Failed to add product. See console for details.");
  } finally {
    setIsLoading(false);
  }
};



  return (
    <>
        <div className="page-content">

       
               <div className="container-xxl">

                    <div className="row">
                        

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
                                        <label className="col-md-4 control-label" htmlFor="product_status">Product Status</label>
                                        <div className="col-md-4">
                                             <div class="form-check form-switch">
                                             <input class="form-check-input" type="checkbox" role="switch" id="active_product" 
                                             checked={isActive}
                                             onChange={() => setIsActive(prev => !prev)} />

                                             <label class="form-check-label"  htmlFor="active_product">Switch to Active</label>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="product_status">Product Category </label>
                                        <div className="col-md-4">
                                             <div class="form-check form-switch">
                                             <input class="form-check-input" type="checkbox" role="switch" id="latestpro" 
                                             checked={isLatest}
                                             onChange={() => setIsLatest(prev => !prev)}
                                             />
                                             <label class="form-check-label" htmlFor="latestpro">Switch to Latest</label>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="product_status">Add to Deal Product </label>
                                        <div className="col-md-4">
                                             <div class="form-check form-switch">
                                             <input class="form-check-input" type="checkbox" role="switch" id="dealPro" 
                                             checked={isDealpro}
                                             onChange={() => setIsDealPro(prev => !prev)}
                                             />
                                             <label class="form-check-label" htmlFor="dealPro">Add to Today's Deal</label>
                                             </div>
                                        </div>
                                   </div>

                                   {/* <div className="form-group">
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
                                   </div> */}
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
                                     <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="discount_price">Discount Price</label>
                                        <div className="col-md-4">
                                        <input
                                             id="discount_price"
                                             name="product_price"
                                             placeholder="Product Price"
                                             className="form-control input-md"
                                             type="text"
                                              {...register("discount_price",
                                                  {
                                                       required:"Please enter product Price"
                                                  }
                                             )}
                                        />
                                        <p className="text-danger"> {errors?.discount_price?.message}</p>

                                        </div>
                                   </div>
                                  
                                     <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="product_id">Product Description</label>
                                        <div className="col-md-4">
                                        <textarea
                                             id="product_description"
                                             name="product_description"
                                             placeholder="Product Description"
                                             className="form-control input-md"
                                             type="text"
                                              {...register("product_description",
                                                  {
                                                       required:"Please enter product Description"
                                                  }
                                             )}
                                        />
                                        <p className="text-danger"> {errors?.product_description?.message}</p>

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
