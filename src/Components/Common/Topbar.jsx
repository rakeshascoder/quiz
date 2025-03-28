import React from 'react'
import { Back_navigate_icon, Filter_icon, } from './Icons'
import Logo from '../../assets/Images/svg/Logo.svg'

const Topbar = () => {
  return (
    <div className='container mx-auto lg:px-10 '>
      <div className='flex justify-between items-center mt-5'>
        <Back_navigate_icon />
        <img src={Logo} alt="Logo" />
        <Filter_icon />

      </div>






    </div>
  )
}

export default Topbar
