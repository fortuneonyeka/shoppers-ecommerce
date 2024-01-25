import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"

const ProductDetails = () => {
      const [details, setDetails] = useState({})
      const location = useLocation()
      useEffect(() => {
            setDetails(location.state.item);
      }, [])
  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
            <div className='w-2/5 relative shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                 <img 
                 className='w-full h-[550px] object-cover p-6'
                  src={details.image} 
                  alt="productImg" /> 
                  <div className='absolute top-2 right-1'>
                        {details.isNew && (
                              <p className='bg-black text-white font-semibold px-8 py-1 font-titleFont rounded-md'>sale</p>
                        )}
                  </div>
            </div>
            <div className='w-3/5'>
                  <div className='flex flex-col gap-6 text-gray-400'>
                        <h2 className='text-4xl font-semibold text-gray-900'>{details.title}</h2>
                        <div className='flex gap-4 text-center'>
                              <p className='line-through text-gray-500 font-base pt-1'>${details.oldPrice}</p>
                              <p className='font-medium text-2xl text-gray-900'>${details.price}</p>
                        </div>
                        <div className='flex flex-col gap-6 text-gray-600 font-bold'>
                              <h3>{details.brand}</h3>
                              <p className='text-gray-500 text-sm'>{details.des}</p>
                        </div>
                        <div className='flex gap-2'>
                              <button className='text-white bg-black py-2 px-3 rounded-lg'>add to cart</button>
                        </div>
                        <p>{details.category}</p>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default ProductDetails