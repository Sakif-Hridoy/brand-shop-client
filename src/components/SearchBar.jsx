import React, { useEffect, useState ,results} from "react";
// import PropTypes from "prop-types";

const SearchBar = ({data,setResults}) => {
  // console.log(data)
  const [brand] = data;
  // console.log(brand)
 const [input,setInput] = useState("");

 const fetchData = (value)=>{

  const results = data.filter((product)=>{
    return(
      value && product.brand && product.brand.toLowerCase().includes(value.toLowerCase()) 
//       && 
// product.brand.charAt(0).includes(value)
    )
    
  })
  // console.log(results)
  setResults(results)

 }

const handleChange = (value)=>{
  setInput(value);
  fetchData(value);

}

const handleClick = (value)=>{

}
  return (
    <div className="mb-[30px]">
      <div className="pt-[85px]">
      <h2 className="text-5xl text-center font-bold">
        Search Products by Brands
      </h2>
      </div>
      <div className="flex mt-[90px] mx-auto text-center justify-center">
        <input
        placeholder="Type a Brand Name"
          type="text"
          value={input}
          onChange={(e)=>handleChange(e.target.value)}
          className="border w-[420px] h-[48px] search-input rounded"
        />
        <button onClick={handleClick} className="btn btn-error w-[120px] ml-4 search-button cursor-pointer">Search</button>
      </div>
    </div>
  );
};

// SearchBar.propTypes = {};

export default SearchBar;