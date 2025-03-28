import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Common/Topbar'

const Layout = () => {
  return (
    <div className='h-screen body_bg overflow-y-scroll '>
      <Topbar />
      
      <Outlet />



    </div>
  )
}

export default Layout
