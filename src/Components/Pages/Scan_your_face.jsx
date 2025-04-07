import React from "react";
import { Data_privacy_Icon, Forward_Line_Icon } from "../Common/Icons";
import scan_face from "../../assets/Images/Png/scan_face.png"
import top_capsule_img from "../../assets/Images/svg/top_capsule_img.svg"
import bottom_svg_img from "../../assets/Images/Png/bottom_svg_img.png"
import Commonbtn from "../Common/Commonbtn";

const Scan_your_face = () => {
    return <>

        <div className="px-[20px] mx-auto ">
            <img className="absolute top-0 left-0 sm:block hidden" src={top_capsule_img} alt="ten_select_uppr_vector" />
            <img className="absolute right-0 bottom-0 sm:block hidden" src={bottom_svg_img} alt="age_screen_vector_down" />
            <div className="flex   items-center justify-center mt-[23px] ">
                <Forward_Line_Icon />
            </div>
            <div className="sm:w-[348px] w-[290px] mx-auto ">
                <p className="font-extrabold text-[20px] mx-auto mt-[50px]">
                    Here is how you look with a carotenoid tan Lets scan your face
                </p>
                <div className="mt-[10px] flex items-center ">
                    <img src={scan_face} alt="scan face img" />
                </div>

                <div>
                    <p className="font-extrabold text-[14px] leading-[22px] mt-[37px]">
                        - Instructions
                    </p>
                    <p className="font-medium text-[14px] leading-[22px] mt-[7px]">
                        Position your face in the center of the camera, ensuring good lighting without shadows or backlight. <br />
                        Remove any obstructions like hats, glasses, or masks.
                    </p>
                </div>
            </div>

            <div className='mt-[16px]  flex justify-center'>
                <Commonbtn text={"Let’s Do it"} />
            </div>
            <div className="sm:w-[348px] w-[290px] mx-auto mt-[24px] flex items-start mb-[30px]">
                <span>
                    <Data_privacy_Icon />
                </span>
                <p className="font-medium text-[10px] leading-[13px]  text-[#B7B7B7] ms-[10px]">
                    We prioritize your privacy. Any non-identifiable data temporarily stored on our secure servers is swiftly deleted to maintain your anonymity.
                </p>
            </div>
        </div>
    </>;
};

export default Scan_your_face;
