import React, { useState } from "react";
import Progress_tracker from "../Common/Progress_tracker";
import { AgeScreenData } from "../Common/Helper";
import { Link } from "react-router-dom";
import age_screen_vector_top from "../../assets/Images/svg/age_screen_vector_top.svg"
import age_screen_vector_down from "../../assets/Images/svg/age_screen_vector_down.svg"

const Age_screen = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track selected item

  const handleClick = (index) => {
    setActiveIndex(index); // Set the active index
  };

  return (
    <div className="relative">
      <div className="sm:w-[600px] mx-auto flex flex-col  items-center 2xl:justify-center  xl:h-[calc(100vh-71px)]">
        <img className="absolute top-0 right-0 " src={age_screen_vector_top} alt="age_screen_vector_top" />
        <img className="absolute bottom-0   left-0 " src={age_screen_vector_down} alt="age_screen_vector_bottom" />
        <Progress_tracker step={0.5} />
        <h1 className="fs_26 leading-[1.19] font-extrabold my-10">
          What’s Your Age?
        </h1>
        <div className="flex flex-wrap justify-center gap-[14px]">
          {AgeScreenData.map((img, index) => (
            <div
              key={img.id} // Ensure key is unique
              onClick={() => handleClick(index)}
              className={` sm:h-[155px]  w-[38%] sm:w-[134px] shadow-[0_4px_4px_0_#00000040] rounded-[24px] cursor-pointer transition-all ${activeIndex === index ? "border border-[#D6B588]" : "border border-transparent"
                }`}
            >
              <Link to="">
                <img className="w-full" src={img.src} alt={img.alt} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Age_screen;
