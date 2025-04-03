import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Common/Topbar'

const Layout = () => {
  return (
    <div className='h-screen body_bg  overflow-y-scroll overflow-x-hidden  '>
      <div className='px-[20px] md:px-[50px]'>
        <Topbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
