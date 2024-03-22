import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/nav/Navbar'


const AdminLayout = () => {
  return (  
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
