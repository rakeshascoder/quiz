import React, { useEffect, useState } from 'react';
import { Back_navigate_icon, Filter_icon } from './Icons';
import Logo from '../../assets/Images/svg/Logo.svg';
import { useLocation } from 'react-router-dom';

const Topbar = () => {
  const [hideIcons, setHideIcons] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateVisibility = () => {
      const hideIconsOnPages = ["/", "/Aware"]; // Pages where icons should be hidden on mobile
      setHideIcons(hideIconsOnPages.includes(location.pathname) && window.innerWidth <= 576);
    };

    updateVisibility(); // Run on mount to set initial state

    window.addEventListener('resize', updateVisibility);
    return () => window.removeEventListener('resize', updateVisibility); // Cleanup event listener
  }, [location.pathname]);


  console.log(hideIcons);
  return (
    <div className='container mx-auto lg:px-10 '>
      <div className={`flex ${hideIcons ? 'justify-center' : 'justify-between'}  z-50 mt-5`}>
        {/* Show back icon only if NOT on "/" or "/Aware" OR if on larger screens */}
        {hideIcons ? <></> : <Back_navigate_icon
          
        />}

        <img src={Logo} alt="Logo" />

        {/* Show filter icon only if NOT on "/" or "/Aware" OR if on larger screens */}
        {hideIcons ? <></> : <Filter_icon 
          
        />}
      </div>
    </div>
  );
};

export default Topbar;
