import React from "react";
import PropTypes from "prop-types";
import picture from "../assets/brands2.jpg"

const OneProduct = (props) => {
  return (
    <div className="m-14 mt-28">
        <h2 className="text-4xl mb-14 text-center font-semibold">Door Service</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[700px]"
            src={picture}
            alt="Album"
          />
        </figure>
        <div className='m-6 rounded'>
                <h2 className='text-5xl mt-10 ml-10 font-semibold'>Trusted By Best <br /> Exclusive Agents</h2>
                <ul className='mt-[100px] ml-10'>
                    <li className='text-2xl font-semibold tracking-3 list-disc'>Find excellent deals</li>
                    <li className='text-2xl font-semibold tracking-3 list-disc'>Friendly host & Fast support</li>
                    <li className='text-2xl font-semibold tracking- list-disc'>24/7 Service</li>
                </ul>
            </div>
      </div>
    </div>
  );
};

OneProduct.propTypes = {};

export default OneProduct;
