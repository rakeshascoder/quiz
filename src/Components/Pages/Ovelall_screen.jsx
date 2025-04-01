import React from "react";
import Progress_tracker from "../Common/Progress_tracker";
import overall_page_img from "../../assets/Images/Png/overall_screen_img.png"
import overall_screen_img_for_mobile from "../../assets/Images/Png/overall_screen_img_for_mobile.png"
import Commonbtn from "../Common/Commonbtn";

const Ovelall_screen = () => {


  return (
    <div className="relative">
      <div className="sm:w-[600px] mx-auto flex flex-col  items-center 2xl:justify-center  xl:h-[calc(100vh-71px)]">

        <Progress_tracker step={1} />
        <h1 className="fs_26 leading-[1.19] font-extrabold mt-10 mb-8">
          Over 1.4 million mens
        </h1>
        <p className="fs_18 text-[#B8B6B6] max-w-[340px] text-center capitalize">in their 30s *custom* already tried our carotenoid tanning blend</p>
        <div className="max-sm:mx-[-20px]">
          <img className="hidden sm:block" src={overall_page_img} alt="overall_page_img" />
          <img className="sm:hidden" src={overall_screen_img_for_mobile} alt="overall_screen_img_for_mobile" />

        </div>
        <div className="pb-10"><Commonbtn text={"Continue"} /></div>
      </div>
    </div>
  );
};

export default Ovelall_screen;
