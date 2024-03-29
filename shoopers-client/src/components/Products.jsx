import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ReactLoading from 'react-loading';
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (data) {
      setLoading(false);
    }else {
      setError(true)
    }
  }, [data]);

  return (
    <div className="py-10 ">
      <div className="flex flex-col justify-center mx- items-center gap-4 ">
        <h1 className="text-2xl bg-gray-800 text-white py-4 px-6 w-85 text-center rounded-md">Elevate Your Shopping Experience: Where Quality Meets Convenience</h1>
        <span className="w-20 h-[5px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center p-4">Discover, Shop, and Elevate Your Style – Where Every Click is a Fashion Statement! <strong className="text-orange-600 text-lg">Shop Smarter, Live Better.</strong></p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-2 gap-10 md:grid-cols-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-6 rounded-md">
        {loading ? (
          <ReactLoading type={'spin'} color={'#000'} height={50} width={50} />
        ) : (error ? (<p>error loading data</p>):(
          data && data.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))
        ))}
      </div>
    </div>
  );
};

export default Products;
