import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateProduct = props => {
  const product = useLoaderData();
  const {_id,name,
    brand,
    type,
    price,
    description,
    rating,
    image,} = product;
  console.log(product)

  const handleUpdateProduct = e =>{
    e.preventDefault();
    
        const form = e.target;
    
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;
    
        const updateProduct = {
          name,
          brand,
          type,
          price,
          description,
          rating,
          image
        };
    
        console.log(updateProduct);

        fetch(`https://b8a10-brandshop-server-side-sakif-hridoy-main.vercel.app/product/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast('Product Updated Successfully')

          });


  }

    // const { _id } = brandDetail;
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-center">Update Product</h2>
        <form onSubmit={handleUpdateProduct}>
          <div className="md:flex">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                  defaultValue={name}
                />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Brand Name"
                  name="brand"
                  className="input input-bordered w-full"
                  defaultValue={brand}
                />
              </label>
            </div>
            {/*  */}
          </div>
          <div className="md:flex">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  className="input input-bordered w-full"
                  defaultValue={type}
                />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered w-full"
                  defaultValue={price}
                />
              </label>
            </div>
          </div>
  
          <div className="md:flex">
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered w-full"
                  defaultValue={description}
                />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Rating (10)"
                  name="rating"
                  className="input input-bordered w-full"
                  defaultValue={rating}
                />
              </label>
            </div>
          </div>
  
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="image"
                  name="image"
                  className="input input-bordered w-full"
                  defaultValue={image}
                />
              </label>
            </div>
          </div>
  
          <input
            className="btn btn-block bg-slate-600 text-white"
            type="submit"
            name="Add Product"
            value="Update Product"
            
          />
        </form>
        <ToastContainer></ToastContainer>
      </div>
    );
};

UpdateProduct.propTypes = {
    
};

export default UpdateProduct;