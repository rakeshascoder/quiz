import React from "react";
import { Forward_Line_Icon } from "../Common/Icons";
import busy_screen_img from "../../assets/Images/Png/busy_screen_img.png"
import Commonbtn from "../Common/Commonbtn";
import ten_select_uppr_vector from "../../assets/Images/svg/ten_select_uppr_vector.svg"
import age_screen_vector_down from "../../assets/Images/svg/ten_select_bottom_vector.svg"

const Busy_screen = () => {
    return <div>

        <div className="px-[13px] mx-auto">
            <img className="absolute top-0 left-0 " src={ten_select_uppr_vector} alt="ten_select_uppr_vector" />
            <img className="absolute right-0 bottom-0" src={age_screen_vector_down} alt="age_screen_vector_down" />
            <div className="flex   items-center justify-center mt-[23px] ">
                <Forward_Line_Icon />
            </div>
            <div className="sm:w-[325px]  text-center mx-auto mt-[26px]">
                <p className=" font-extrabold text-[26px] leading-[119%]">
                    A Busy Schedule Doesn't Have To Stop You From Looking And Feeling Your Best
                </p>
                <p className="font-normal text-[14px] leading-[140%] mt-[10px] ">
                    By evaluating your answer in this quiz we'll be able to determine your skin type and craft an actionable & quickly tanning plan to help you achieve your goals
                </p>
            </div>
            <img className="m-auto mt-[20px]" src={busy_screen_img} alt="men img" />

            <div className='mt-[12px] pb-[33px]  flex justify-center'>
                <Commonbtn text={"Continue"} />
            </div>
        </div>
    </div>;
};

export default Busy_screen;
