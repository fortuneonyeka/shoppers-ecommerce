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
                 className='w-full h-[550px] object-cover'
                  src={details.image} 
                  alt="productImg" /> 
                  <div className='absolute top-4 right-0'>
                        {details.isNew && (
                              <p className='bg-black text-white font-semibold px-8 py-1 font-titleFont'>sale</p>
                        )}
                  </div>
            </div>
      </div>
    </div>
  )
}

export default ProductDetails