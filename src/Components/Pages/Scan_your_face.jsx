import React from "react";
import { Forward_Line_Icon } from "../Common/Icons";
import scan_face from "../../assets/Images/Png/scan_face.png"

const Scan_your_face = () => {
    return <>
        <div className="flex   items-center justify-center mt-[23px] ">
            <Forward_Line_Icon />
        </div>

        <div>
            <p className="w-[348px] font-extrabold text-[20px] mx-auto mt-[50px]">
                Here is how you look with a carotenoid tan Lets scan your face
            </p>

            <div className="mt-[10px] flex items-center justify-center">
                <img src={scan_face} alt="scan face img" />
            </div>
        </div>
    </>;
};

export default Scan_your_face;
