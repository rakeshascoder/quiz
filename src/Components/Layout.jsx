import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Common/Topbar'

const Layout = () => {
  return (
    <div className='h-screen body_bg overflow-y-scroll overflow-x-hidden px-[20px] md:px-[50px] '>
      <Topbar />
      <Outlet />
    </div>
  )
}

export default Layout
