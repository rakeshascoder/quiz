import React from "react";
import { Forward_btn_circle_Icon, Forward_Line_Icon } from "../Common/Icons";
import reffernce_info_img1 from "../../assets/Images/Png/reffernce_info_img1.png"
import reffernce_info_img2 from "../../assets/Images/Png/reffernce_info_img2.png"
import PubMed_img from "../../assets/Images/Png/PubMed_img.png"
import men_women_img from "../../assets/Images/Png/men_women_img.png"
import Commonbtn from "../Common/Commonbtn";

const Refference_info_screen = () => {
    return <>

        <div className="sm:mx-0 px-[15px] mx-auto">

            <span className="flex   items-center justify-center mt-[23px] ">
                <Forward_Line_Icon />
            </span>
            <p className=" font-bold text-[26px] leading-[119%] mt-[41px] m-auto w-[242px]" >
                A Tan Makes You Look Better
            </p>


            <div className="relative  h-[270px]">
                <img className="absolute top-3.5 right-[50%] rig ht-[40%]" src={reffernce_info_img1} alt="people_preface" />
                <img className="absolute top-12 right-[39%] ri ght-[-12%]" src={reffernce_info_img2} alt="people_preface" />
                <div className=" absolute top-32 right-[49%]">
                    <Forward_btn_circle_Icon />
                </div>
            </div>

            <div className="relative sm:w-[319px] w-[300px] m-auto mt-[26px]">
                <p className="font-medium text-[14px] leading-[22px] ">
                    A tan can make your skin look healthier, more radiant, and even out your complexion.
                </p>
                <p className="font-extrabold text-[16px] leading-[119%] mt-[16px] text-black drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]">
                    Studies show that a carotenoid skin colouration is found more attractive than melanin colouration
                </p>
                <div className="flex justify-center items-center">
                    <div >
                        <img src={PubMed_img} alt="brand name" />
                        <p className="font-medium whitespace-nowrap sm:text-[10px] text-[9px] leading-[150%] text-[#D2D2D2]">
                            Lervon Carmen | Michelman Leon
                        </p>
                    </div>

                    <div className="sm:ms-[26px] ms-[15px]  mt-[32px]">
                        <div className="flex items-center">
                            <img src={men_women_img} alt="img" />
                            <p className="font-medium sm:text-[8.85px] text-[7.5px] whitespace-nowrap  ms-[6px] text-[#9EA3AE] leading-[140%]">
                                3.2k people
                            </p>
                        </div>
                        <p className="font-medium whitespace-nowrap sm:text-[10px] text-[9px]  leading-[150%] text-[#D2D2D2] mt-[36px]">
                            PMID : 28187263628161
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-[32px] pb-[33px]  flex justify-center'>
                <Commonbtn text={"Continue"} />
            </div>
        </div>

    </>;
};

export default Refference_info_screen;
