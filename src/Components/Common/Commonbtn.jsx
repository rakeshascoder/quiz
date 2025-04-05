import React from 'react'
import { Link } from 'react-router-dom'
import { Addition_Icon, Camera_Icon, Forward_Arrow_Icon } from './Icons'

const Commonbtn = ({ text, className, path, arrowIcon }) => {
  return (
    <Link to={`${path}`} className={`bg-[#DAB37F] w-[348px] h-[52px] flex justify-center gap-[10px] items-center font-semibold text-[18px] rounded-[20px]  text-white shadow-[0px_73px_29px_rgba(17,26,20,0.01),0px_41px_25px_rgba(17,26,20,0.05),0px_18px_18px_rgba(17,26,20,0.09),0px_5px_10px_rgba(17,26,20,0.1),0px_0px_0px_rgba(17,26,20,0.1)]   ${className}`}>
      <span>{text}</span>
      <span className={`mt-[2px] ${arrowIcon}`}>
        <Forward_Arrow_Icon iconstyle={className} />
      </span>
    </Link >
  )
}

export default Commonbtn


export const CommonbtnPicture = ({ text, className, path, arrowIcon }) => {
  return (
    <Link to={`${path}`} className={`bg-[#DAB37F] w-[348px] h-[52px] flex justify-center gap-[10px] items-center font-semibold text-[18px] rounded-[20px]  text-white shadow-[0px_73px_29px_rgba(17,26,20,0.01),0px_41px_25px_rgba(17,26,20,0.05),0px_18px_18px_rgba(17,26,20,0.09),0px_5px_10px_rgba(17,26,20,0.1),0px_0px_0px_rgba(17,26,20,0.1)]   ${className}`}>
      <span>{text}</span>
      <span className={`mb-[17px] ${arrowIcon}`}>
        <Camera_Icon iconstyle={className} />
      </span>
    </Link >
  )
}


export const TryAgainPicture = ({ text, className, path, arrowIcon }) => {
  return (
    <Link to={`${path}`} className={`bg-[#DAB37F] w-[348px] h-[52px] flex justify-center gap-[10px] items-center font-semibold text-[18px] rounded-[20px]  text-white shadow-[0px_73px_29px_rgba(17,26,20,0.01),0px_41px_25px_rgba(17,26,20,0.05),0px_18px_18px_rgba(17,26,20,0.09),0px_5px_10px_rgba(17,26,20,0.1),0px_0px_0px_rgba(17,26,20,0.1)]   ${className}`}>
      <span>{text}</span>
    </Link >
  )
}
export const Addition_img = ({ text, className, path, arrowIcon }) => {
  return (
    <Link to={`${path}`} className={` w-[348px] h-[52px] flex justify-center gap-[10px] items-center font-semibold text-[18px] rounded-[20px]  text-[#647067] border-2 border-[#EACFAB]    ${className}`}>
      <span>{text}</span>
      <span className={`mb-[2px] ${arrowIcon}`}>
        <Addition_Icon iconstyle={className} />
      </span>
    </Link >
  )
}
