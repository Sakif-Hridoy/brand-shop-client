import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import Brands from './Brands';
import FeaturedProduct from './FeaturedProduct';
import OneProduct from './OneProduct';


const Home = props => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <FeaturedProduct></FeaturedProduct>
            <OneProduct></OneProduct>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;