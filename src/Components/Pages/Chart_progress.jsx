import React from "react";
import { Forward_Line_Icon } from "../Common/Icons";
import Commonbtn from "../Common/Commonbtn";

const Chart_progress = () => {
    return <div>

        <div className="px-[20px] mx-auto">
            <div className="flex   items-center justify-center mt-[23px] ">
                <Forward_Line_Icon />
            </div>
            <p className="font-extrabold sm:text-[20px] text-[18px] lg:leading-[119%] sm:w-[348px] w-[290px]  mx-auto mt-[63px]">
                The Last Plan You'll Ever Need To Get An Attractive Tan
            </p>
            <p className="font-semibold text-[18px] text-[#989797] sm:w-[315px] w-[290px] text-center mx-auto mt-[21px]">
                We predict you'll get a *<span className="text-[#C49F6D]">more</span> <span className="text-[#DAB37F]">attractive* by *custom - 40 days*</span>
            </p>
            <div className='flex justify-center mt-[188px]'>
                <Commonbtn text={"Continue"} />
            </div>
        </div>
    </div>;
};

export default Chart_progress;
