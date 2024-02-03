import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div>
      <div className="py-4 px-6">
        <Link to="/" className="py-2 px-6 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:capitalize">back</Link>
      </div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-16 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
        <div className="w-2/5 rounded-lg relative shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <img
            className="w-full h-[550px] object-cover p-6 hover:scale-110 duration-500"
            src={details.image}
            alt="productImg"
          />
          <div className="absolute top-2 right-1">
            {details.isNew && (
              <p className="bg-black text-white font-semibold px-8 py-1 font-titleFont rounded-md">
                sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col gap-12 justify-center">
          <div className="flex flex-col gap-6 text-gray-400">
            <h2 className="text-4xl font-semibold text-gray-900">
              {details.title}
            </h2>
            <div className="flex gap-4 text-center">
              <p className="line-through text-gray-500 font-base pt-1">
                ${details.oldPrice}
              </p>
              <p className="font-medium text-2xl text-gray-900">
                ${details.price}
              </p>
            </div>
            <div className="flex text-gray-900 gap-2 items-center text-base">
              <div className="flex gap-3">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>
              <p className="text-xs text-gray-500">(5 Customers reviews)</p>
            </div>
            <div className="flex flex-col gap-6 text-gray-600 font-bold">
              <h3>{details.brand}</h3>
              <p className="text-gray-500 text-sm">{details.des}</p>
            </div>
            <div className="flex gap-4 text-center items-center">
              <div>
                <p className="text-sm">Quantity</p>
              </div>
              <button className="text-white bg-black py-2 px-3 rounded-lg hover:bg-green-400 hover:text-black hover:capitalize hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                add to cart
              </button>
            </div>
            <p>{details.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
