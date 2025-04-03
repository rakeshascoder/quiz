import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Launch_screen from '../Components/Pages/Launch_screen';
import Aware_screen from '../Components/Pages/Aware_screen';
import Age_screen from '../Components/Pages/Age_screen';
import Overall_screen from '../Components//Pages/Ovelall_screen';
import Skin_selection_screen from '../Components//Pages/Skin_selection_screen';
import Tan_select_screen from '../Components//Pages/Tan_select_screen';
import My_dream_screen from '../Components//Pages/My_dream_screen';
import Reason_screen from '../Components//Pages/Reason_screen';



const Routes_file = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Launch_screen />} />
        <Route path='/Aware' element={<Aware_screen />} />
        <Route path='/Age_screen' element={<Age_screen />} />
        <Route path='/Overall_screen' element={<Overall_screen />} />
        <Route path='/Skin_selection_screen' element={<Skin_selection_screen />} />
        <Route path='/Tan_select_screen' element={<Tan_select_screen />} />
        <Route path='/My_dream_screen' element={<My_dream_screen />} />
        <Route path='/Reason_screen' element={<Reason_screen />} />
      </Route>
    </Routes>
  )
}

export default Routes_file
