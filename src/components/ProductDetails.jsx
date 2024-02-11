import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = props => {
    const loadedProducts = useLoaderData();
    // const {} = loadedProducts()
    // console.log(loadedProducts)
    const {id} = useParams();
    // const idInt = parseInt(id)
    const brandDetail = loadedProducts.find((brandDetail=>brandDetail._id === id));
    // console.log(brandDetail)

    const handleAddToCart = e=>{
      e.preventDefault()
      console.log(e)

      const image = brandDetail.image;
      const price = brandDetail.price;
      const brand = brandDetail.brand;
      const name = brandDetail.name;
      const description = brandDetail.description;

      const productDetails = {
        name,brand,price,image,description
      }

      fetch(`https://b8a10-brandshop-server-side-sakif-hridoy-main.vercel.app/product/${brandDetail._id}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productDetails),

        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
           
            if(data.insertedId){
              toast('Product Added Successfully')
            }
          });
    }

    return (
        
            <div className='grid md:grid-cols md:col-span-12 lg:col-span-9 mt-16'>
            <div
            key={id}
            className="card w-[1000px] h-[700px] bg-base-100 shadow-xl mx-auto m-4"
          >
            <figure>
              <img className='w-[50%]' src={brandDetail.image} alt="Shoes" />
            </figure>
            <div className="card-body">
            <h2 className="card-title justify-center">
                {brandDetail.brand}
              </h2>
              <h2 className="card-title justify-center">
                {brandDetail.name}
              </h2>
              <div className="card-actions justify-center">
                <button className="btn bg-slate-600 text-white hover:bg-slate-400 ">
                  Package Price {brandDetail.price}$
                </button>
                <button onClick={handleAddToCart} className='btn bg-slate-600 text-white'>Add To Cart</button>
                <p>{brandDetail.description}</p>
                {/* <Link>
                  <button className="btn bg-slate-600 text-white hover:bg-slate-400 justify-end ml-[55px]">
                    Buy Now
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
          <ToastContainer></ToastContainer>
        </div>
            
        
    );
};

ProductDetails.propTypes = {
    
};

export default ProductDetails;