import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Launch_screen from '../Components/Pages/Launch_screen';
import Aware_screen from '../Components/Pages/Aware_screen';
import Age_screen from '../Components/Pages/Age_screen';
import Overall_screen from '../Components//Pages/Ovelall_screen';
import Skin_selection_screen from '../Components//Pages/Skin_selection_screen';
import Refference_info_screen from '../Components/Pages/Refference_info_screen';
import Busy_screen from '../Components/Pages/Busy_screen';
import Tan_info from '../Components/Pages/Tan_info';
import Tan_select from '../Components/Pages/Tan_select';
import Skin_deal_screen from '../Components/Pages/Skin_deal_screen';
import Appearence_Screen from '../Components/Pages/Appearence_Screen';
import Carotenoids_Screen from '../Components/Pages/carotenoids_Screen';
import Biggest_doubt_Scren from '../Components/Pages/Biggest_doubt_Scren';
import Ready_to_get_skin_expert_screen from '../Components/Pages/Ready_to_get_skin_expert_screen';
import Get_ready_natural_health_screen from '../Components/Pages/Get_ready_natural_health_screen';
import Scan_your_face from '../Components/Pages/Scan_your_face';



const Routes_file = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Launch_screen />} />
        <Route path='/Aware' element={<Aware_screen />} />
        <Route path='/Age_screen' element={<Age_screen />} />
        <Route path='/Overall_screen' element={<Overall_screen />} />
        <Route path='/Skin_selection_screen' element={<Skin_selection_screen />} />
        <Route path='/Refference_info_screen' element={<Refference_info_screen />} />
        <Route path='/Busy_screen' element={<Busy_screen />} />
        <Route path='/Tan_info' element={<Tan_info />} />
        <Route path='/Tan_select' element={<Tan_select />} />
        <Route path='/Skin_deal_screen' element={<Skin_deal_screen />} />
        <Route path='/Appearence_Screen' element={<Appearence_Screen />} />
        <Route path='/carotenoids_Screen' element={<Carotenoids_Screen />} />
        <Route path='/Biggest_doubt_Scren' element={<Biggest_doubt_Scren />} />
        <Route path='/Ready_to_get_skin_expert_screen' element={<Ready_to_get_skin_expert_screen />} />
        <Route path='/Get_ready_natural_health_screen' element={<Get_ready_natural_health_screen />} />
        <Route path='/Scan_your_face' element={<Scan_your_face />} />
      </Route>
    </Routes>
  )
}

export default Routes_file
