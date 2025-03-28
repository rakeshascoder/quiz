import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';



const Routes_file = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      {/* <Route path='/testing1' element={<Testing1 />} />
      <Route path='/Testing2' element={<Testing2 />} /> */}

    </Routes>
  )
}

export default Routes_file
