import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const ProductCard = ({product}) => {
  const truncatedTitle = product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title;
  return (
    <div className=''>
      <div className='flex flex-col gap-4 p-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-lg w-full h-full cursor-pointer overflow-hidden group'>
        <img src={product.image} alt="" className='shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-xl md:px-4 h-full w-full object-cover group-hover:scale-110 duration-500'/>
        <div className='text-sm'>
          <p className='text-xs md:text-md lg:text-lg font-bold'>{truncatedTitle}</p>
          <div className='flex flex-col md:flex-row md:gap-2 text-xs'>
          <p className='group-hover:hidden'>Price: </p>
      <p className="line-through md:px-2 group-hover:hidden text-red-400">$: {product.oldPrice}</p>
      <p className="group-hover:hidden">$: {product.price}</p>
      <span className="hidden group-hover:flex text-green-400 gap-4">Add to Cart <span className='flex items-center text-black'><FaLongArrowAltRight /></span></span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductCard