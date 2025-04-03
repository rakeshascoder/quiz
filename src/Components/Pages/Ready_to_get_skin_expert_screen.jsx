import React from "react";
import ready_to_get_img1 from "../../assets/Images/Png/ready_to_get_img1.png"
import Commonbtn from "../Common/Commonbtn";

const Ready_to_get_skin_expert_screen = () => {
    return <>

        <div className="px-[20px] mx-auto  h-screen">

            <div className="flex justify-center"><img src={ready_to_get_img1} alt="doctor img" /></div>

            <div className="sm:w-[349px] mx-auto mt-[45px]">
                <p className="font-extrabold text-[18px] leading-[119%] ">
                    Dermatologist And Skin Expert In America Reccomend Carotenoids As A Natural Tanning Solution
                </p>

                <p className="font-medium text-[14px] mt-[20px]">
                    "Eating carotenoids is 100% safe if they are extracted from natural sources. For this reason, we recommend Ourea because it is produced in Florida and carefully extracted from natural fruits and vegetables, making it 100% safe—just like eating carrots in a pill."
                </p>
            </div>

            <div className='mt-[17px] pb-[33px]  flex justify-center'>
                <Commonbtn text={"Continue"} />
            </div>
        </div>


    </>;
};

export default Ready_to_get_skin_expert_screen;
