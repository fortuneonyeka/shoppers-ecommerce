import React, { useState } from "react";
import {headset,camera,shirt,table} from "../assets/index"
import nextamazone1 from "../assets/nextamazon2.jpg";
import nextamazone2 from "../assets/nextamazon6.jpg";
import nextamazone3 from "../assets/nextamazon8.jpg";
import nextamazone4 from "../assets/gadget3.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  const data = [table, camera, shirt, headset];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen md:h-[600px] lg:h-[750px] relative ">
        <div style={{ transform: `translateX(-${currentSlide * 100}vw)` }} className="w-[400vw] h-full flex transition-transform duration-1000">
          {data.map((img, index) => (
            <img key={index} className="w-screen md:h-full object-fit" src={img} alt={`img${index + 1}`} />
          ))}
        </div>
        <div className="absolute right-[50%] mx-auto flex gap-8 bottom-5">
          <div className="bg-gray-600 text-white p-2 cursor-pointer hover:bg-green-600 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]" onClick={handlePrev}>
            <FaArrowLeft />
          </div>
          <div className="bg-gray-600 text-white p-2 cursor-pointer hover:bg-green-600 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]" onClick={handleNext}>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

