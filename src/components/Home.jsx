import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import Brands from './Brands';
import FeaturedProduct from './FeaturedProduct';
import OneProduct from './OneProduct';
import LatestBlogPosts from './LatestBlogPost';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';


const Home = props => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [results, setResults] = useState([]);
//   console.log(results);
  
    useEffect(()=>{
      fetch("https://b8a10-brandshop-server-side-sakif-hridoy-main.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data)),
      setResults(results);

    },[])
    return (
        <div>
            <Banner></Banner>
            <SearchBar data={featuredProducts} results={results} setResults={setResults}></SearchBar>

            <div className="grid md:grid-cols-3 gap-4 overflow-hidden mt-5">
           {results.map((result) => (
            <div
            key={result._id}
            className="card w-96 bg-base-100 shadow-xl mx-auto m-10"
          >
            <figure>
              <img className='mt-10 w-[50%]' src={result.image} alt="Mobiles" />
            </figure>
            <div className="card-body">
              <Link to={`/brandDetails/${result.name}`}><h2 className="card-title justify-center align-middle cursor-pointer">
                {result.name}
              </h2></Link>
              <button className='btn bg-slate-500 hover:bg-slate-700 text-white'>{result.price}$</button>
              <Link className='btn bg-slate-500 hover:bg-slate-700 text-white' to={`/productDetails/${result._id}`}><button className=''>Details</button></Link>
            </div>
          </div>
          ))}
           </div>
            <Brands></Brands>
            <FeaturedProduct></FeaturedProduct>
            <OneProduct></OneProduct>
            
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;