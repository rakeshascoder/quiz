import React, { useState } from "react";
import Progress_tracker from "../Common/Progress_tracker";
import { Link } from "react-router-dom";
import ten_select_uppr_vector from "../../assets/Images/svg/ten_select_uppr_vector.svg"
import age_screen_vector_down from "../../assets/Images/svg/ten_select_bottom_vector.svg"
import { Tone_select_data } from "../Common/Helper";

const Age_screen = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track selected item

  const handleClick = (index) => {
    setActiveIndex(index); // Set the active index

  };

  return (
    <div className="px-[20px] md:px-[50px]">
      <div className="xl:h-[calc(100vh-71px)] overflow-hidden ">
        <img className="absolute  top-0 left-0 " src={ten_select_uppr_vector} alt="ten_select_uppr_vector" />
        <img className="absolute right-0 bottom-0" src={age_screen_vector_down} alt="age_screen_vector_down" />
        <div className="sm:max-w-[400px] mx-auto flex flex-col  items-center   ">
          <Progress_tracker step={2} />
          <h1 className="fs_26 leading-[1.19] text-center lg:px-10 capitalize font-extrabold my-10">
            Do you like looking tan?
          </h1>
          <div className="flex flex-col gap-[19px] " >
            {Tone_select_data.map((item, index) => {
              return (
                <div key={item.id} className="shadow-[0px_8px_16px_rgba(47,60,51,0.05)] rounded-[26px]" onClick={() => handleClick(index)}
                >
                  <Link to={""}>
                    <div className={`max-w-[343px] px-[36px]  flex items-center justify-center bg-white h-[72px] ${activeIndex === index ? "shadow-[0_0_0_4px_rgba(47,60,51,0.05)]  border border-[#D6B588]" : "border border-transparent"
                      } shadow-[0_8px_16px_rgba(47, 60, 51, 0.05)]   rounded-[26px]`}>
                      <p className="fs_14 text-[#2F3C33] font-semibold">{item.text}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Age_screen;
