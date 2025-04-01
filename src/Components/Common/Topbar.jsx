import React from 'react';
import { Back_navigate_icon, Filter_icon } from './Icons';
import Logo from '../../assets/Images/svg/Logo.svg';
import { useLocation } from 'react-router-dom';

const Topbar = () => {
  const location = useLocation();
  const hideIconsOnPages = ["/", "/Aware"]; // Pages where icons should be hidden on mobile
  const shouldHideIcons = hideIconsOnPages.includes(location.pathname);

  return (
    <div className='container mx-auto lg:px-10'>
      <div className='flex justify-between z-50 mt-5'>
        {/* Show back icon only if NOT on "/" or "/Aware" OR if on larger screens */}
        <Back_navigate_icon
          className={' shouldHideIcons ? "md:block hidden" : "block"'}

        />

        <img src={Logo} alt="Logo" />

        {/* Show filter icon only if NOT on "/" or "/Aware" OR if on larger screens */}
        <Filter_icon
          className={shouldHideIcons ? "md:block hidden" : "block"}
        />
      </div>
    </div>
  );
};

export default Topbar;