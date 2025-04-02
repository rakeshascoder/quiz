import React from 'react'

import Aware_hero_img from '../../assets/Images/Png/aware_hero_img.png'
import Commonbtn from '../Common/Commonbtn'

const Aware_screen = () => {
  return (
    <div className='px-[20px] md:px-[50px]'>
      <div className='sm:w-[465px] mx-auto flex flex-col items-center 2xl:justify-center  xl:h-[calc(100vh-71px)] '>

        <h1 className='fs_26 my-10 px-1 text-center w-[353px] sm:mx-auto '>Get Your  <span className='text-[#D6B588] font-extrabold'>Personal Training</span> plan</h1>
        <p className='fs_18 text-[#B8B6B6] text-center  capitalize'>according to your age and skin type</p>
        <p className='fs_14 text-[#2B2828] font-bold mt-4'>START 1-MINUTE QUIZ</p>
        <div className='max-w-[455px]  max-sm:mx-[-20px] sm:mx-auto'>
          <img className='w-full' src={Aware_hero_img} alt="aware_hero_img" />
        </div>
        <p className='fs_10 text-[#B8B6B6] sm:w-[347px] leading-[1.38] mt-11 text-center ' >By continuing, you confirm and guarantee that you have read, understood, and agreed to our<span className='text-[#C49F6D]'>
          Terms of Use, Privacy</span>   Notice
          and  <span className='text-[#C49F6D]'>Refund Policy</span></p>
        <div className='mt-12 pb-10  items-center'>
          <Commonbtn text={"Continue"} />
        </div>
      </div>


    </div>
  )
}

export default Aware_screen
