import React from "react";
import { Data_privacy_Icon, Forward_Line_Icon } from "../Common/Icons";
import inscruted_face_img from "../../assets/Images/Png/inscruted_face_img.png"
import inscruted_face_img2 from "../../assets/Images/Png/inscruted_face_img2.png"
import inscruted_face_img3 from "../../assets/Images/Png/inscruted_face_img3.png"
import inscruted_face_img4 from "../../assets/Images/Png/inscruted_face_img4.png"
import top_capsule_img from "../../assets/Images/svg/top_capsule_img.svg"
import bottom_svg_img from "../../assets/Images/Png/bottom_svg_img.png"
import Commonbtn, { Addition_img } from "../Common/Commonbtn";

const Instructed = () => {
    return <>
        <div className="px-[20px] mx-auto">
            <img className="absolute top-0 left-0 " src={top_capsule_img} alt="ten_select_uppr_vector" />
            <img className="absolute right-0 bottom-0 sm:block hidden" src={bottom_svg_img} alt="age_screen_vector_down" />
            <div className="flex   items-center justify-center mt-[23px] ">
                <Forward_Line_Icon />
            </div>
            <p className="font-extrabold sm:text-[26px] text-[22px] text-[black] sm:w-[332px] w-[290px] mt-[50px] mx-auto">
                Take Your Face Picture
                As Instructed
            </p>

            <div className="flex justify-center items-center mt-[36px]">
                <img className="sm:w-[218px] w-[190px] h-[239px]" src={inscruted_face_img} alt="img" />
                <div className="sm:ms-[20px] ms-[10px]">
                    <img className="mt-[11px] h-[70px] sm:w-[81px] w-[75px]" src={inscruted_face_img2} alt="img" />
                    <img className="mt-[11px] h-[70px] sm:w-[81px] w-[75px]" src={inscruted_face_img3} alt="img" />
                    <img className="mt-[11px] h-[70px] sm:w-[81px] w-[75px]" src={inscruted_face_img4} alt="img" />
                </div>
            </div>

            <div className='  flex justify-center mt-[47px]'>
                <Addition_img text={"Upload From Gallery"} />
            </div>

            <div className='mt-[16px]  flex justify-center'>
                <Commonbtn text={"Take a Picture now"} />
            </div>

            <div className="sm:w-[348px] w-[290px] mx-auto mt-[93px] flex items-start mb-[22px]">
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

export default Instructed;
