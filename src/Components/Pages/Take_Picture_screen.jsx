import React from "react";
import tack_picture_img from "../../assets/Images/Png/tack_picture_img.png"
import { CommonbtnPicture } from "../Common/Commonbtn";
import { Forward_Line_Icon } from "../Common/Icons";
import top_capsule_img from "../../assets/Images/svg/top_capsule_img.svg"
import bottom_svg_img from "../../assets/Images/Png/bottom_svg_img.png"

const Take_Picture_screen = () => {
    return <>
        <div className=" text-center px-[20px] mx-auto mt-[50px]">

            <img className="absolute top-0 left-0 sm:block hidden" src={top_capsule_img} alt="ten_select_uppr_vector" />
            <img className="absolute right-0 bottom-0 sm:block hidden" src={bottom_svg_img} alt="age_screen_vector_down" />
            <div className="flex   items-center justify-center mt-[23px] ">
                <Forward_Line_Icon />
            </div>
            <p className="font-extrabold text-[26px] text-[black] sm:mt-[50px] mt-[30px]">
                Take Picture
            </p>
            <img className="mx-auto mt-[20px]" src={tack_picture_img} alt="selfi img" />

            <div className='mt-[38px]  flex justify-center'>
                <CommonbtnPicture text={"Take a Picture now"} />
            </div>
        </div>


    </>;
};

export default Take_Picture_screen;
