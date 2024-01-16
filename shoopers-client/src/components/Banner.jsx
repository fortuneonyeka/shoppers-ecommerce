import React, { useState } from "react";
import nextamazone1 from "../assets/nextamazon2.jpg";
import nextamazone2 from "../assets/nextamazon6.jpg";
import nextamazone3 from "../assets/nextamazon8.jpg";
import nextamazone4 from "../assets/gadget3.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  const data = [nextamazone1, nextamazone2, nextamazone3, nextamazone4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div className="w-[400vw] h-full flex gap-">
          <img
            className="w-screen h-full object-fit"
            src={data[0]}
            alt="imageOne"
          />
          <img
            className="w-screen h-full object-fit"
            src={data[1]}
            alt="imagetwo"
          />
          <img
            className="w-screen h-full object-fit"
            src={data[2]}
            alt="imageThree"
          />
          <img
            className="w-screen h-full object-fit"
            src={data[3]}
            alt="imageThree"
          />
        </div>
        <div className="absolute  right-[50%] mx-auto flex gap-8 bottom-5">
          <div className="border-4 p-2 cursor-pointer" onClick={handlePrev}>
            <FaArrowLeft />
          </div>
          <div className="border-4 p-2 cursor-pointer" onClick={handleNext}>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
