import React from "react";
import {useNavigate} from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa";
import {  useDispatch } from 'react-redux'
import { addToCart } from "../features/shopperSlice";
import {toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const truncatedTitle =
    product.title.length > 20
      ? product.title.slice(0, 20) + "..."
      : product.title;

      // Calculate discount percentage
      const discountPercentage = product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : "0";

        const id = product.title
        const idString = (id) => {
          return String(id).toLowerCase().split(" ").join("")
        }

        const rootId = idString(id)

      const handleDetails = () => {
        navigate(`/productDetails/${rootId}`, {
          state: {
            item: product,
          }
        })
      }

  return (
    <div className="">
      <div className="flex flex-col gap-4 p-2 md:p-5 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-lg w-full h-full cursor-pointer overflow-hidden group relative hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
        <img
        onClick={handleDetails} 
          src={product.image}
          alt=""
          className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-xl h-full w-full object-cover group-hover:scale-110 duration-500"
        />
        <div className="text-sm">
          <h2 className="text-xs md:text-md lg:text-lg font-bold">
            {truncatedTitle}
          </h2>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-2 text-xs">
          <p className="group-hover:hidden">Price: </p>
          <p className="line-through md:px-2 group-hover:hidden text-gray-400">
            $: {product.oldPrice}
          </p>
          <p className="group-hover:hidden font-bold">$: {product.price}</p>
          <span className="hidden group-hover:flex text-green-400 gap-4">
            <p onClick={() => dispatch(addToCart({
              _id:product._id,
              title:product.title,
              image:product.image,
              price:product.price,
              quantity: 1,
              description: product.des
            })) & toast.success(
              `You have successfully added 1 ${product.title} to your cart`,
              {
                position: "top-right",
              }
            )}>Add to Cart</p>
            <span className="flex items-center text-black">
              <FaLongArrowAltRight />
            </span>
          </span>
        </div>
        <div className="absolute top-4 right-6 hidden group-hover:flex text-xs">
          {/* <p>Discount: {discountPercentage}%</p> */}
          <div>{discountPercentage &&(
            <p>{discountPercentage}% sales</p>
          )}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
