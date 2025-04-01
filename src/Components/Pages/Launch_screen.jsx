import React, { useEffect, useState } from 'react'
import people_preface from '../../assets/Images/Png/people_preface.png'
import people_afterface from '../../assets/Images/Png/people_afterface.png'
import vector_homepage from '../../assets/Images/svg/Vector_homepage.svg'
import { Forward_btn_icon } from '../Common/Icons'
import { Link } from 'react-router-dom'

const Launch_screen = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10; // Increment by 10
      });
    }, 500); // Update every 500ms

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='sm:w-[465px] mx-auto flex flex-col items-center 2xl:justify-center relative xl:h-[calc(100vh-71px)] '>
      <img src={vector_homepage} className='absolute bottom-[57px] left-1/2 opacity-20 ' alt="vector_homepage" />
      <h1 className='fs_26 mb-10 px-1 text-center '>Can I Get An <span className='text-[#D6B588] font-extrabold'>Attractive
        Masculine</span> Tan With Carotenoids?</h1>
      <p className='fs_18 text-[#B8B6B6] text-center max-sm:px-5 lg:w-[265px] '>Take our "Skin Profile" quiz to find out</p>
      <div className='max-w-[295px] mx-auto'>
        <div className=' h-[240px] mt-[60px]  relative '>

          <Link to={""} className='absolute top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2 z-3'>
            <Forward_btn_icon />
          </Link>

          <div className='w-[133px] rotate-[-13.2deg] h-[191px] rounded-[27px] overflow-hidden shadow-md shape_at_image absolute bottom-[10px] left-[15px]'>
            <img className='w-full ' src={people_preface} alt="people_preface" />
            <div className='absolute bottom-0 left-0 w-full h-[30px] flex items-center justify-center bg-[#EACFAB]'>
              <p className='fs_9 font-extrabold '>Day 1...</p>
            </div>
          </div>
          <div className='w-[133px] rotate-[6.81deg] h-[191px] rounded-[27px] overflow-hidden shadow-md shape_at_image absolute top-[16px] right-[18px]'>
            <img className='w-full ' src={people_afterface} alt="people_preface" />
            <div className='absolute bottom-0 left-0 w-full h-[30px] flex items-center justify-center bg-[#EACFAB]'>
              <p className='fs_9 font-extrabold '>Day 21...</p>
            </div>
          </div>

        </div>
        <p className='fs_16 text-[#D6B588] leading-[1.38] mt-4 text-center ' >We'll use your quiz results to match the right tanning plan to your skin type.</p>
        <div className='mt-12 mb-10 flex flex-col items-center'>
          <p className='fs_20 tracking-[-3%] font-extrabold '>Quiz Loading...</p>
          <div className="w-full bg-[#E8D8BB] rounded-full h-[7.27px] mt-3 mb-2 overflow-hidden">
            <div
              className="bg-[#D6B689] h-[7.27px] rounded-full transition-all duration-400"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className='fs_14'><span className='text-[#CCB68AFA]'> Quiz duration </span>: 2minutes</p>
        </div>
      </div>


    </div>
  )
}

export default Launch_screen
