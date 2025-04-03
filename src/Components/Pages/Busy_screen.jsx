import React from "react";
import { Forward_Line_Icon } from "../Common/Icons";
import busy_screen_img from "../../assets/Images/Png/busy_screen_img.png"
import Commonbtn from "../Common/Commonbtn";

const Busy_screen = () => {
    return <div>

        <div className="px-[13px] mx-auto">
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
