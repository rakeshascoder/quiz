import React from "react";
import { Forward_Line_Icon } from "../Common/Icons";
import top_capsule_img from "../../assets/Images/svg/top_capsule_img.svg"
import bottom_svg_img from "../../assets/Images/Png/bottom_svg_img.png"

const tanDescriptions = [
  "Yes i knew about it",
  "I know but i'm still skeptical",
  "Many friends of mine got a tan thanks to carotenoids",
  "I don't know what carotenoids are"
];


const Carotenoids_Screen = () => {
  return <div>
    <div className="px-[13px] mx-auto bg-[#FFFAF3]">
      <img className="absolute top-0 left-0 " src={top_capsule_img} alt="ten_select_uppr_vector" />
      <img className="absolute right-0 bottom-0" src={bottom_svg_img} alt="age_screen_vector_down" />
      <div className="flex   items-center justify-center mt-[23px] ">
        <Forward_Line_Icon />
      </div>
      <div className="sm:w-[316px]  text-center mx-auto mt-[26px]">
        <p className=" font-extrabold text-[26px] leading-[119%]">
          Do you know that eating carotenoids can give you a tan?
        </p>
      </div>

      <div className="sm:w-[343px] w-[290px]  mx-auto  mt-[40px]">
        {tanDescriptions.map((description, index) => (
          <div
            key={index}
            className="border-amber-50 py-[27px] px-[41px] rounded-[26px] bg-white hover:border-[#D6B588] hover:drop-shadow-[0px_0px_4px_rgba(214,_181,_136,_30)] mt-[19px]"
          >
            <p className="font-semibold text-[14px] text-[#2F3C33]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>;
};

export default Carotenoids_Screen;
