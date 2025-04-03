import React from "react";
import Progress_tracker from "../Common/Progress_tracker";
import { AgeScreenData } from "../Common/Helper";
import { Link } from "react-router-dom";
import age_screen_vector_top from "../../assets/Images/svg/age_screen_vector_top.svg"
import age_screen_vector_down from "../../assets/Images/svg/age_screen_vector_down.svg"

const Age_screen = () => {


  return (
    <div className="xl:h-[calc(100vh-71px)] overflow-hidden relative">
      <img className="absolute top-[28%] md:!top-[0px]  right-[-47%]  md:right-[-10%] lg:right-0 " src={age_screen_vector_top} alt="age_screen_vector_top" />
      <img className="absolute bottom-[-32%] sm:bottom-[-85%]  lg:bottom-[-30%] left-[-35%] md:left-[-20%] " src={age_screen_vector_down} alt="age_screen_vector_bottom" />
      <div className="sm:w-[600px] mx-auto flex flex-col  items-center 2xl:justify-center  ">
        <Progress_tracker step={0.5} />
        <h1 className="fs_26 leading-[1.19] font-extrabold my-10">
          What’s Your Age?
        </h1>
        <div className="flex pb-16 z-3  flex-wrap justify-center gap-[14px]">
          {AgeScreenData.map((img) => (
            <div
              key={img.id} // Ensure key is unique

              className={` sm:h-[155px]  w-[38%] sm:w-[134px] shadow-[0_4px_4px_0_#00000040] rounded-[24px] cursor-pointer transition-all hover:border hover:border-[#D6B588] `}
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
