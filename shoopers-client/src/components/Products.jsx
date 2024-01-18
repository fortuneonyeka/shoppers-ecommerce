import React from "react";
import ProductCart from "./ProductCard";

const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl bg-gray-800 text-white py-4 px-6 w-85 text-center rounded-md">Elevate Your Shopping Experience: Where Quality Meets Convenience</h1>
            <span className="w-20 h-[5px] bg-black"></span>
            <p className="max-w-[700px] text-gray-600 text-center">Discover, Shop, and Elevate Your Style – Where Every Click is a Fashion Statement! <strong className="text-orange-600 text-lg">Shop Smarter, Live Better.</strong></p>
      </div>
      <div className="max-w-screen-xl mx-auto">
            <ProductCart />
      </div>
    </div>
  );
};

export default Products;
