import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Launch_screen from '../Components/Pages/Launch_screen';
import Aware_screen from '../Components/Pages/Aware_screen';
import Age_screen from '../Components/Pages/Age_screen';
import Overall_screen from '../Components//Pages/Ovelall_screen';



const Routes_file = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Launch_screen />} />
        <Route path='/Aware' element={<Aware_screen />} />
        <Route path='/Age_screen' element={<Age_screen />} />
        <Route path='/Overall_screen' element={<Overall_screen />} />
      </Route>
    </Routes>
  )
}

export default Routes_file
