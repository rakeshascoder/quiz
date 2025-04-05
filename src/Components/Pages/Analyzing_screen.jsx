import React from "react";
import { Forward_Line_Icon } from "../Common/Icons";
import Analyzing_img from "../../assets/Images/Png/Analyzing_img.png"

const Analyzing_screen = () => {
    return <>

        <div className="px-[20px] mx-auto">

            <div className="flex   items-center justify-center mt-[23px] ">
                <Forward_Line_Icon />
            </div>
            <div className="">
                <p className="font-extrabold text-[20px] w-[271px] mx-auto mt-[56px] text-center">
                    Analyzing Your Answer, Your Skin Tone,
                </p>
                <p className="text-[#C49F6D] font-extrabold text-[20px] text-center mt-[20px]">
                    Your Face Structure *Slideshow*
                </p>
                <p className="sm:w-[325px] w-[280px]  mx-auto text-center mt-[20px]  font-medium sm:text-[18px] text-[16px] text-[#a2a0a0d2] leading-[140%]">
                    Please hold on while we analyze your feature and generate a realistic personalized tanning solution
                </p>
                <img className="mx-auto mt-[38px]" src={Analyzing_img} alt="img" />
            </div>
        </div>
    </>;
};

export default Analyzing_screen;
