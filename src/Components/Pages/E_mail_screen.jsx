import React from "react";
import { Email_message_icon, Lock_icon } from "../Common/Icons";
import Commonbtn from "../Common/Commonbtn";

const E_mail_screen = () => {
    return (
        <div>
            <div className="px-[20px] mx-auto ">
                <p className="font-extrabold text-[20px] text-[black] text-center sm:w-[312px] w-[290px]  mx-auto mt-[92px] ">
                    Your <span className="text-[#C49F6D]">personalized tanning</span> plan is ready
                </p>
                <p className="font-normal text-[#989797] w-[280px] mx-auto">
                    <span className="font-extrabold">Enter your email </span> so we can send it to you
                </p>


                <div className="mx-auto sm:w-[300px] w-[290px]  mt-[35px]">
                    <p className="font-bold text-[14px]  ">
                        Email Address
                    </p>
                    <div className="flex   items-center bg-[white] p-[16px] sm:w-[312px] w-[290px]  rounded-[26px] mt-[8px] shadow-[0px_0px_4px_#2F3C33]">
                        <span>
                            <Email_message_icon />
                        </span>
                        <input className="font-semibold mt-[8px] text-[16px] ms-[8px]  text-[#D6D6D6] outline-0" type="email" name="" id="" placeholder="  E-mail...|" />
                    </div>
                </div>

                <div className="sm:w-[330px] w-[290px]  flex justify-center mx-auto mt-[24px]">
                    <span>
                        <Lock_icon />
                    </span>
                    <p className="font-semibold  text-[10px] leading-[13px] text-[#B7B7B7] ms-[11px]">
                        We respect your privacy and are committed to protecting your personal data. Your data will be processed in accordance with our Privacy Policy
                    </p>
                </div>

                <div className='flex justify-center mt-[60px]'>
                    <Commonbtn text={"Get My Plan"} />
                </div>
            </div>
        </div>
    );
}

export default E_mail_screen;
