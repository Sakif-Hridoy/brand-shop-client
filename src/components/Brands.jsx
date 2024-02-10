import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./Brands.css"
import { Link } from 'react-router-dom';

const Brands = props => {
    const [brands,setBrands] = useState([])

    useEffect(() => {
        fetch("brands.json")
          .then((res) => res.json())
          .then((data) => setBrands(data));
      }, []);
    return (
        <div>
            <div className=''>
            <h2 className="text-4xl text-center mt-20 font-semibold">
        Explore Our brands
      </h2>
            </div>
      

     <div className='card-bg'>
     <div className="grid lg:grid-cols-3 md:grid-cols-3 mt-20 bg-slate-500 bg-transparent">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="card w-96 bg-base-100 shadow-xl mx-auto m-10"
          >
            <figure>
              <img className='mt-10 w-[70%]' src={brand.image} alt="Mobiles" />
            </figure>
            <div className="card-body">
              <Link to={`/brandDetails/${brand.name}`}><h2 className="card-title justify-center align-middle cursor-pointer">
                {brand.name}
              </h2></Link>
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
    );
};

Brands.propTypes = {
    
};

export default Brands;