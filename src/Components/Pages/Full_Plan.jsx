import React from "react";
import full_plane_now_img from "../../assets/Images/Png/full_plane_now_img.png";
import full_plane_now_img2 from "../../assets/Images/Png/full_plane_now_img2.png";
import improvement_img from "../../assets/Images/Png/improvement_img.png";
import improvement_img2 from "../../assets/Images/Png/improvement_img2.png";
import improvement_img3 from "../../assets/Images/Png/improvement_img3.png";
import full_page_last_img from "../../assets/Images/Png/full_page_last_img.png";
import full_page_last_img4 from "../../assets/Images/Png/full_page_last_img4.png";
import full_page_last_img5 from "../../assets/Images/Png/full_page_last_img5.png";
import full_page_last_img6 from "../../assets/Images/Png/full_page_last_img6.png";
import full_page_last_img7 from "../../assets/Images/Png/full_page_last_img7.png";
import full_page_last_img8 from "../../assets/Images/Png/full_page_last_img8.png";
import full_page_absolute_img from "../../assets/Images/Png/full_page_absolute_img.png";
import { Check_icon } from "../Common/Icons";
import Commonbtn from "../Common/Commonbtn";

const Full_Plan = () => {
    return <div>

        <div className="px-[20px] mx-auto">
            <div className=" md:w-[60%]  sm:w-[80%] w-[100%] bg-[#FFFFFF] lg:flex lg:justify-between   py-[22px] px-[26px] rounded-[24px] mx-auto mt-[33px]">
                <p className="sm:w-[306px] w-[280px] font-extrabold text-[22px]  mx-auto">
                    Discount is reserved for:
                </p>
                <div className="flex items-center justify-center mt-[20px] lg:mt-0">
                    <div className="flex items-center me-[19px]">
                        <div>
                            <p className="text-[#C49F6D] font-medium text-[24px] ">
                                09
                            </p>
                            <p className="font-bold text-[8px] text-[#647067]">
                                minutes
                            </p>
                        </div>
                        <p className="font-extrabold-extrabold text-[24px] text-[#D6B588]">
                            :
                        </p>
                        <div className="mx-[2px]">
                            <p className="text-[#C49F6D] font-medium text-[24px] ">
                                38
                            </p>
                            <p className="font-bold text-[8px] text-[#647067]">
                                seconds
                            </p>
                        </div>
                    </div>
                    <button className="font-bold text-[12px] whitespace-nowrap rounded-[15px] text-[#FFFFFF] w-[119px] border-2 border-[#C49F6D] bg-[#C49F6D] py-[8px] px-[22px]">
                        Get My Plan
                    </button>
                </div>
            </div>
            <p className="font-semibold text-[#DAB37F] sm:text-[26px] text-[23px] md:w-[715px] sm:w-[600px]  w-[290px] text-center mx-auto mt-[36px]">
                This is how you will look after 40 days of taking Ourea to get an attractive tan
            </p>

            <div className="sm:flex  mt-[50px] justify-center relative ">
                <img className="absolute top-[40%] xl:block hidden" src={full_page_absolute_img} alt="arrow img" />
                <div className="sm:w-[300px] w-[90%] me-[16px] sm:h-[550px] h-[80%px]  border-3 border-[#DAB37F] rounded-[50px] m-auto text-center sm:text-start sm:m-0">
                    <p className="font-bold text-[33px]  text-center text-[#B8B6B6] pt-[20px]">
                        Now
                    </p>
                    <img className="sm:w-[300px] w-[350px] mx-auto" src={full_plane_now_img} alt="men face img" />
                    <div className="ms-[20px]">
                        <p className="font-bold sm:text-[29px] text-[23px] text-[#2F3C33]">
                            Skin tone type
                        </p>
                        <p className="font-semibold text-[26px] text-[#647067]">
                            *custom*
                        </p>
                        <div className="w-[101px] h-[24px] bg-[#F0AE9F] mt-[9px] mb-[30px] sm:mb-0 mx-auto sm:mx-0"></div>
                    </div>
                </div>
                <div className=" border-3 border-[#DAB37F] rounded-[50px] ms-[20px]">
                    <div className="sm:w-[300px] w-[90%] sm:h-[550px] h-[80%px] m-auto  sm:m-0 text-center sm:text-start mt-[30px] sm:mt-0">
                        <p className="font-bold text-[33px]  text-center text-[#C49F6D] pt-[20px]">
                            Your Goal
                        </p>
                        <img className="sm:w-[300px] w-[350px] mx-auto" src={full_plane_now_img2} alt="men face img" />
                        <div className="ms-[20px]">
                            <p className="font-bold sm:text-[29px] text-[23px] text-[#2F3C33]">
                                Skin tone type
                            </p>
                            <p className="font-semibold text-[26px] text-[#647067]">
                                *custom*
                            </p>
                            <div className="flex gap-4  mb-[30px] sm:mb-0 justify-center sm:justify-start">
                                <div className="w-[60px] h-[24px] bg-[#F0AE9F] mt-[9px]"></div>
                                <div className="w-[60px] h-[24px] bg-[#F0AE9F] mt-[9px]"></div>
                                <div className="w-[60px] h-[24px] bg-[#F0AE9F] mt-[9px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-[#E3CCAD] px-[28px] py-[30px] lg:w-[60%] sm:w-[80%] w-[97%]  mx-auto rounded-[33px] mt-[65px]">
                <div className="flex items-center bg-[#FBF2E6] py-[22px] px-[16px] rounded-[26px]">
                    <img className="me-[18px]" src={improvement_img} alt="img" />
                    <div>
                        <p className="font-bold  sm:text-[16px] text-[14px]  text-[#2F3C33]">
                            Room Of Improvment
                        </p>
                        <p className="font-semibold text-[12px] text-[#8f89829b]">
                            High
                        </p>
                    </div>
                </div>

                <div className="flex items-center bg-[#FBF2E6] py-[22px] px-[16px] rounded-[26px] mt-[18px]">
                    <img className="me-[18px]" src={improvement_img2} alt="img" />
                    <div>
                        <p className="font-bold  sm:text-[16px] text-[14px]  text-[#2F3C33]">
                            Best Solution For You
                        </p>
                        <p className="font-semibold text-[12px] text-[#8f89829b]">
                            *custom* Carotenoid blend
                        </p>
                    </div>
                </div>

                <div className="flex items-center bg-[#FBF2E6] py-[22px] px-[16px] rounded-[26px] mt-[18px]">
                    <img className="me-[18px]" src={improvement_img3} alt="img" />
                    <div>
                        <p className="font-bold  sm:text-[16px] text-[14px] text-[#2F3C33]">
                            Impact on Appearence
                        </p>
                        <p className="font-semibold text-[12px] text-[#8f89829b]">
                            Noticeable
                        </p>
                    </div>
                </div>

            </div>
            <div className=" lg:w-[59%]  mx-auto sm:w-[80%] w-[97%]">
                <p className="font-extrabold  sm:text-[20px] text-[17px] lg:leading-[119%] sm:w-[376px] w-[290px] mt-[32px]">
                    Here is your personalized plan to get a *custom*
                </p>
                <div className="bg-[#F1E6D7] w-[100%] flex justify-center p-[40px] rounded-[33px] mx-auto text-center mt-[20px]">
                    <img className="" src={full_page_last_img} alt="img" />
                </div>
            </div>
            <div className="lg:w-[60%] sm:w-[80%] w-[97%] mx-auto">
                <p className="font-extrabold text-[18px] lg:leading-[119%] mt-[54px]">
                    Benefits You Will GET
                </p>


                <div className="flex items-center justify-center mt-[24px]  relative">
                    <div className="h-[56px] w-[1px] bg-[#DAB37F] absolute top-[80%] left-[10px]"></div>
                    <span>
                        <Check_icon />
                    </span>
                    <div className="bg-[#ddcebb59] sm:ms-[22px] ms-[10px] py-[11px] w-[100%] px-[16px] rounded-[26px] border-2  shadow-lg border-[#E8D8C2]">
                        <div className="flex items-center">
                            <img className="me-[15px]" src={full_page_last_img4} alt="img" />
                            <p className="font-bold text-[14px] text-[#2F3C33]">
                                Easy to use, just take 1 a day
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-[24px] relative">
                    <div className="h-[56px] w-[1px] bg-[#DAB37F] absolute top-[80%] left-[10px]"></div>
                    <span>
                        <Check_icon />
                    </span>
                    <div className="bg-[#ddcebb59] sm:ms-[22px] ms-[10px] py-[11px] w-[100%] px-[16px] rounded-[26px] border-2  shadow-lg border-[#E8D8C2]">
                        <div className="flex items-center">
                            <img className="me-[15px]" src={full_page_last_img5} alt="img" />
                            <p className="font-bold text-[14px] text-[#2F3C33]">
                                Gauranteed results (or you don't pay)
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-center mt-[24px] relative">
                    <div className="h-[56px] w-[1px] bg-[#DAB37F] absolute top-[80%] left-[10px]"></div>
                    <span>
                        <Check_icon />
                    </span>
                    <div className="bg-[#ddcebb59] sm:ms-[22px] ms-[10px] py-[11px] w-[100%] px-[16px] rounded-[26px] border-2  shadow-lg border-[#E8D8C2]">
                        <div className="flex items-center">
                            <img className="me-[15px]" src={full_page_last_img6} alt="img" />
                            <p className="font-bold text-[14px] text-[#2F3C33]">
                                Even healthy tan
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-center mt-[24px] relative">
                    <div className="h-[56px] w-[1px] bg-[#DAB37F] absolute top-[80%] left-[10px]"></div>
                    <span>
                        <Check_icon />
                    </span>
                    <div className="bg-[#ddcebb59] sm:ms-[22px] ms-[10px] py-[11px] w-[100%] px-[16px] rounded-[26px] border-2  shadow-lg border-[#E8D8C2]">
                        <div className="flex items-center">
                            <img className="me-[15px]" src={full_page_last_img7} alt="img" />
                            <p className="font-bold text-[14px] text-[#2F3C33]">
                                Works year round
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-center mt-[24px]">
                    <span>
                        <Check_icon />
                    </span>
                    <div className="bg-[#ddcebb59] sm:ms-[22px] ms-[10px] py-[11px] w-[100%] px-[16px] rounded-[26px] border-2  shadow-lg border-[#E8D8C2]">
                        <div className="flex items-center">
                            <img className="me-[15px]" src={full_page_last_img8} alt="img" />
                            <p className="font-bold text-[14px] text-[#2F3C33]">
                                Natural solution reccomended by dermatologist
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-[60px] mb-[51px]'>
                <Commonbtn text={"Get My Plan"} />
            </div>
        </div>;
    </div>
}

export default Full_Plan;
