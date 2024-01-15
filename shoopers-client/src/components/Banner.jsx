import React,{useState} from 'react'
import nextamazone1 from "../assets/nextamazon2.jpg"
import nextamazone2 from "../assets/nextamazon6.jpg"
import nextamazone3 from "../assets/nextamazon8.jpg"
import nextamazone4 from "../assets/gadget3.png"
import { FaArrowLeft , FaArrowRight } from "react-icons/fa6";

const Banner = () => {
      const data = [nextamazone1, nextamazone2, nextamazone3];
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
      };
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
      };
    
      return (
        <div className='w-full h-auto overflow-x-hidden'>
          <div className='w-screen h-[650px] relative'>
            <div className='w-[400vw] h-full flex gap-'>
              {data.map((img, index) => (
                <div key={index} className={`transform transition-transform ease-in-out duration-300 ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}>
                  <img className='w-screen h-full object-fit' src={img} alt='' />
                </div>
              ))}
            </div>
            <div className='absolute left-0 right-0 mx-auto flex gap-8 bottom-4'>
              <div className='border-4 p-2 cursor-pointer' onClick={handlePrev}>
                <FaArrowLeft />
              </div>
              <div className='border-4 p-2 cursor-pointer' onClick={handleNext}>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Banner;