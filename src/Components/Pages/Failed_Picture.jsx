import React from "react";
import { Forward_Line_Icon } from "../Common/Icons";
import Failed_picture_img from "../../assets/Images/Png/Failed_picture_img.png"
import { TryAgainPicture } from "../Common/Commonbtn";

const Failed_Picture = () => {
    return <>

        <div className="px-[20px] mx-auto">
            <div className="flex   items-center justify-center mt-[23px] ">
                <Forward_Line_Icon />
            </div>

            <div className="sm:w-[333px] w-[280px] mx-auto mt-[122px]">
                <img src={Failed_picture_img} alt="failde img" />

                <div className="mt-[85px]">
                    <p className="font-bold text-[18px] text-[black]">
                        Unfortunately, we were unable to detect a face in the image you provided.
                    </p>
                    <p className=" font-regular text=[16px] leading-[21px]">
                        Please make sure that your face is clearly visible and positioned according to the instructions, then try again.
                    </p>
                </div>
            </div>

            <div className='mt-[46px]  mb-[83px] flex justify-center'>
                <TryAgainPicture text={"Try Again"} />
            </div>
        </div>
    </>;
};

export default Failed_Picture;
