import React from "react";
import Progress_tracker from "../Common/Progress_tracker";
import { Link } from "react-router-dom";
import ten_select_uppr_vector from "../../assets/Images/svg/ten_select_uppr_vector.svg"
import age_screen_vector_down from "../../assets/Images/svg/ten_select_bottom_vector.svg"
import { My_dream_data } from "../Common/Helper";

const My_dream_screen = () => {


  return (
    <div className="px-[20px] md:px-[50px]">
      <div className="xl:h-[calc(100vh-71px)] overflow-hidden ">
        <img className="absolute top-0 left-0 " src={ten_select_uppr_vector} alt="ten_select_uppr_vector" />
        <img className="absolute right-0 bottom-0" src={age_screen_vector_down} alt="age_screen_vector_down" />
        <div className="sm:max-w-[400px] mx-auto flex flex-col  items-center   ">
          <Progress_tracker step={2.5} />
          <h1 className="fs_26 leading-[1.19] text-center lg:px-10 capitalize font-extrabold my-10">
            My dreams tan is…
          </h1>
          <div className="flex flex-col gap-[19px] " >
            {My_dream_data.map((item) => {
              return (
                <div key={item.id} className="shadow-[0px_8px_16px_rgba(47,60,51,0.05)] rounded-[26px]"
                >
                  <div>
                    <div className={`max-w-[343px] cursor-pointer hover:border hover:border-[#D6B588]  transition-all flex flex-col !py-[13px] px-[37px] justify-center bg-white h-[96px] hover:shadow-[0_0_0_4px_rgba(47,60,51,0.05)]  shadow-[0_8px_16px_rgba(47, 60, 51, 0.05)]    rounded-[26px]`}>
                      <p className="fs_18 font-bold text-[#2F3C33]">{item.heading}</p>
                      <p className="font-medium fs_14 text-[#B1AFAF]"> {item.text}</p>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>


        </div>
      </div>
    </div>
  );
};

export default My_dream_screen;
