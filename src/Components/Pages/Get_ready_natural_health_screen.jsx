import React from "react";
import get_ready_img2 from "../../assets/Images/Png/get_ready_img2.png"
import carrots_img from "../../assets/Images/Png/carrots_img.png"
import ourea_blend_img from "../../assets/Images/Png/ourea_blend_img.png"
import carrot_img from "../../assets/Images/Png/carrot_img.png"
import mix_carrot_img from "../../assets/Images/Png/mix_carrot_img.png"
import yellow_circle from "../../assets/Images/Png/yellow_circle.png"
import health_img from "../../assets/Images/Png/health_img.png"
import Commonbtn from "../Common/Commonbtn";
import top_capsule_img from "../../assets/Images/svg/top_capsule_img.svg"
import bottom_svg_img from "../../assets/Images/Png/bottom_svg_img.png"

const Get_ready_natural_health_screen = () => {
    return <div>

        <div className="px-[20px] mx-auto  h-scr een">
            <img className="absolute top-0 left-0 sm:block hidden" src={top_capsule_img} alt="ten_select_uppr_vector" />
            <img className="absolute right-0 bottom-0 sm:block hidden" src={bottom_svg_img} alt="age_screen_vector_down" />
            <div className="sm:w-[322px] text-center sm:mx-auto mt-[15px]">
                <p className="font-extrabold text-[26px]  leading-[119%]">
                    Carotenoids Gives You A Natural Healthy Tan (No Orange/Yellow)
                </p>


            </div>
            <div className="relative sm:h-[450px] h-[30 0px]  ">
                <div className="flex justify-center">
                    <img src={get_ready_img2} alt=" face img" />
                </div>
                <img className="absolute top-[14%] right-[55%] lg:block hidden" src={carrots_img} alt="message img" />
                <img className="absolute top-[14%] right-[40%] lg:block hidden" src={ourea_blend_img} alt="message img" />
            </div>

            <div className="mx-auto">
                <div className="sm:flex items-center justify-center relative z-10">
                    <div className="flex sm:w-[224px] w-[290px] sm:me-[44px] items-center mx-auto sm:mx-0 border-amber-50   px-[10px] py-[8px] rounded-[26px] bg-white hover:border-[#D6B588] drop-shadow-[0px_0px_4px_rgba(214,_181,_136,_30)] mt-[19px] ">
                        <img src={carrot_img} alt="img" />
                        <div className="ms-[5px]">
                            <p className=" font-bold text-[10px] ">
                                Only 1 CAROTENOIDS
                            </p>
                            <p className="font-semibold text-[9.2px] text-[#B4B4B4]">
                                (Betacarotene)
                            </p>
                        </div>
                    </div>
                    <div className="flex  sm:w-[224px] w-[290px]  items-center mx-auto sm:mx-0 border-amber-50 px-[10px] py-[8px] rounded-[26px] bg-white hover:border-[#D6B588] drop-shadow-[0px_0px_4px_rgba(214,_181,_136,_30)] mt-[19px] ">
                        <img src={mix_carrot_img} alt="img" />
                        <div className="ms-[5px]">
                            <p className=" font-bold text-[10px] ">
                                Balanced Mix of
                                Carotenoids
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sm:flex items-center justify-center">
                    <div className="flex sm:w-[224px] w-[290px] items-center mx-auto sm:mx-0 border-amber-50 px-[10px] py-[8px] rounded-[26px] bg-white hover:border-[#D6B588] drop-shadow-[0px_0px_4px_rgba(214,_181,_136,_30)] mt-[19px] ">
                        <img src={yellow_circle} alt="img" />
                        <div className="ms-[5px]">
                            <p className=" font-bold text-[10px] ">
                                Yellow | Orange Look
                            </p>

                        </div>
                    </div>

                    <div className="flex sm:w-[224px] w-[290px] sm:ms-[44px] mx-auto sm:mx-0 items-center border-amber-50   px-[10px] py-[8px] rounded-[26px] bg-white hover:border-[#D6B588] drop-shadow-[0px_0px_4px_rgba(214,_181,_136,_30)] mt-[19px] ">
                        <img src={health_img} alt="img" />
                        <div className="ms-[5px]">
                            <p className=" font-bold text-[10px] ">
                                Only 1 CAROTENOIDS
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className='mt-[25px] pb-[33px]  flex justify-center'>
                    <Commonbtn text={"Continue"} />
                </div>

            </div>
        </div>
    </div>;
};

export default Get_ready_natural_health_screen;
