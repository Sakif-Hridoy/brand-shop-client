import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import earbud from "../assets/apple-offer.jpg"
import googleWatch from "../assets/google-offer.jpg"
import graphicsCard from "../assets/intel-offer.png"

const BrandDetails = props => {
    const loadedProducts = useLoaderData();
    // const {} = loadedProducts()
    // console.log(loadedProducts)
    const {brand} = useParams();
    const brandDetail = loadedProducts.filter((brandDetail=>brandDetail.brand === brand));
    console.log(brandDetail)
    // const { _id } = brandDetail;
    // const id = parseInt(_id)
    return (
        <div>
          {/* Carousel */}
          <div className="carousel w-full bg-bike-bg-primary">
        <div id="slide1" className="carousel-item relative lg:h-[550px] w-full">
          <div
            className="flex flex-col lg:flex-row p-4 lg:gap-[200px] md:gap-[50px] sm:gap-[100px] sm:justify-center sm:items-center lg:p-24"
          >
            <div className="space-y-7 flex-1">
              <h2 className="text-xl lg:text-6xl font-bold">
              40% Discount On
                <br />
                Ipad 12 Pro
              </h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <button className="btn bg-slate-800 text-white">Purchase</button>
            </div>

            <div className="flex-1">
              <img src={earbud} className="w-[400px]" />
            </div>
          </div>

          <div
            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative lg:h-[550px] w-full">
          <div
            className="flex flex-col lg:flex-row p-4 lg:gap-[200px] md:gap-[50px] sm:gap-[100px] sm:justify-center sm:items-center lg:p-24"
          >
            <div className="space-y-7 flex-1">
              <h2 className="text-6xl font-bold">
                27% Off in Google Watch
                <br />
                with Smile
              </h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <button className="btn bg-bike-primary text-white">Purchase</button>
            </div>

            <div className="flex-1">
              <img src={googleWatch} className="w-[400px]" />
            </div>
          </div>

          <div
            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative lg:h-[550px] w-full">
          <div
            className="flex flex-col lg:flex-row p-4 lg:gap-[200px] md:gap-[50px] sm:gap-[100px] sm:justify-center sm:items-center lg:p-24"
          >
            <div className="space-y-7 flex-1">
              <h2 className="text-6xl font-bold">
                35% Discount on
                <br />
                Intel Arc Grahics Series
              </h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <button className="btn bg-bike-primary text-white">Purchase</button>
            </div>

            <div className="flex-1">
              <img src={graphicsCard} className="w-[400px]" />
            </div>
          </div>

          <div
            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>


            <h2 className='mt-10 text-5xl font-semibold text-center'>Explore {brand} Products</h2>

            <div className=''>
     <div className="grid lg:grid-cols-3 md:grid-cols-3 mt-20 bg-slate-500 bg-transparent">
        {brandDetail.map((brand) => (
          <div
            key={brand.name}
            className="card w-96 bg-base-100 shadow-xl mx-auto m-10"
          >
            <figure>
              <img className='mt-10 w-[50%]' src={brand.image} alt="Mobiles" />
            </figure>
            <div className="card-body">
              <Link to={`/brandDetails/${brand.name}`}><h2 className="card-title justify-center align-middle cursor-pointer">
                {brand.name}
              </h2></Link>
              <button className='btn bg-slate-500 hover:bg-slate-700 text-white'>{brand.price}$</button>
              <Link className='btn bg-slate-500 hover:bg-slate-700 text-white' to={`/productDetails/${brand._id}`}><button className=''>Details</button></Link>
              <Link className='btn bg-slate-500 hover:bg-slate-700 text-white' to={`/updateProduct/${brand._id}`}><button className=''>Update</button></Link>
            </div>
          </div>
        ))}
      </div>
     </div>

        </div>
    );
};

BrandDetails.propTypes = {
    
};

export default BrandDetails;