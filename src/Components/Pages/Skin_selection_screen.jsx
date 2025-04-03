import React from "react";
import Progress_tracker from "../Common/Progress_tracker";
import { Skintone_data } from "../Common/Helper";
import { Link } from "react-router-dom";

const Age_screen = () => {
 

  return (
    <div className="px-[20px] md:px-[50px]">

      <div className="sm:max-w-[800px] xl:h-[calc(100vh-71px)] mx-auto flex flex-col  items-center 2xl:justify-center">
        <Progress_tracker step={1.5} />
        <h1 className="fs_26 leading-[1.19] capitalize font-extrabold my-10">
          What’s your skin tone?
        </h1>
        <div className="flex pb-16 z-3  flex-wrap justify-center gap-[18px]">
          {Skintone_data.map((img) => (
            <Link to={""}>
              <div
                key={img.id}
               
                className={`  shadow-[0_5px_7px_-0.25px_#B0B0B0] gap-[18px]  rounded-[26px] cursor-pointer transition-all border border-transparent  hover:bg-[#D6B588] hover:border hover:border-[#D6B588]`}

              >
                <div className="w-[136.25px] h-[174.14px]">
                  <img className="w-full h-full object-cover" src={img.src} alt={img.alt} />
                </div>

              </div></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Age_screen;
