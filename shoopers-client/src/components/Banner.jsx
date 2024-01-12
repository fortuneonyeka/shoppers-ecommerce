import React from 'react'
import nextamazone1 from "../assets/nextamazon2.jpg"
import nextamazone2 from "../assets/nextamazon6.jpg"
import nextamazone3 from "../assets/nextamazon8.jpg"
import nextamazone4 from "../assets/gadget3.png"
import { FaArrowLeftLong , FaArrowRight } from "react-icons/fa6";

const Banner = () => {
      const data = [nextamazone1, nextamazone2,nextamazone3,]
  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
            <div className='w-[400vw] h-full flex gap-'>
                  {data.map((img, index) => {
                        return <div key={index} >
                              <img className='w-screen  h-full object-fit' src={img} alt=''/>
                        </div>
                  })}
            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-'>
                  <div className='border-4 p-2'><FaArrowLeftLong/></div>
                  <div><FaArrowRight/></div>
                  
            </div>
      </div>
    </div>
  )
}

export default Banner