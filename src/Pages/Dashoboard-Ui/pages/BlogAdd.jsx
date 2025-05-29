import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { fireDB } from '../../../firebase/FirebaseConfig';
import { query, where, getDocs, updateDoc, doc, collection, addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';


const BlogAdd = () => {
 const [isLoading, setIsLoading] = useState(false);
 const [isActive, setIsActive] = useState(false);
     

     const form = useForm({
          defaultValues:{
               blog_id:"",
               blog_title:"",
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

    // Get highest existing blog_id
    const productsRef = collection(fireDB, "Blogs");
    const querySnapshot = await getDocs(productsRef);

    let maxId = 0;
    querySnapshot.forEach((docSnap) => {
      const product = docSnap.data();
      if (typeof product.blog_id === "number" && product.blog_id > maxId) {
        maxId = product.blog_id;
      }
    });

    const newBlogId = maxId + 1;

    // Create new product
    await addDoc(productsRef, {
      blog_id: newBlogId,
      blog_title: data.blog_title,
      blog_author: data.blog_author,
      blog_description: data.blog_description,
      imageURL,
      isActive,
      createdAt: new Date().toISOString().split("T")[0],
    });

    toast.success("Blog added successfully!");
    reset();
    setIsActive(false);
  } catch (error) {
    console.error("Error:", error);
    toast.alert("Failed to add Blog. See console for details.");
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
                                  

                                

                                   {/* <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="blog_id">Product ID</label>
                                        <div className="col-md-4">
                                        <input
                                             id="blog_id"
                                             name="blog_id"
                                             placeholder="PRODUCT ID"
                                             className="form-control input-md"
                                             type="text"
                                             {...register("blog_id",
                                                  {
                                                       required:"Please enter product ID"
                                                  }
                                             )}
                                        />
                                          <p className="text-danger"> {errors?.blog_id?.message}</p>
                                        </div>
                                   </div> */}
                                        <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="blog_id">Blog Title</label>
                                        <div className="col-md-4">
                                        <input
                                             id="blog_title"
                                             name="blog_title"
                                             placeholder="Product Name"
                                             className="form-control input-md"                                             
                                             type="text"
                                              {...register("blog_title",
                                                  {
                                                       required:"Please enter product Name"
                                                  }
                                             )}
                                        />
                                        <p className="text-danger"> {errors?.blog_title?.message}</p>
                                        </div>
                                   </div>
                                 
                                   <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="blog_author">Author Name</label>
                                        <div className="col-md-4">
                                        <input
                                             id="blog_author"
                                             name="blog_author"
                                             placeholder="Enter Blog Author Name"
                                             className="form-control input-md"
                                             type="text"
                                             {...register("blog_author",
                                                  {
                                                       required:"Enter Blog Author Name"
                                                  }
                                             )}
                                        />
                                        <p className="text-danger"> {errors?.blog_author?.message}</p>

                                        </div>
                                   </div>

                                     <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="blog_id">Blog Description</label>
                                        <div className="col-md-4">
                                        <textarea
                                             id="blog_description"
                                             name="blog_description"
                                             placeholder="Blog Description"
                                             className="form-control input-md"
                                             type="text"
                                              {...register("blog_description",
                                                  {
                                                       required:"Please enter product Description"
                                                  }
                                             )}
                                        />
                                        <p className="text-danger"> {errors?.blog_description?.message}</p>

                                        </div>
                                   </div>
                                   <div className="form-group text-center">
                                        
                                  <div className="col-md-12">
                                  <button className='btn btn-success m-auto' type="submit" disabled={isLoading}>
                                   {isLoading ? "Saving..." : "Create New Blog"}
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

export default BlogAdd
