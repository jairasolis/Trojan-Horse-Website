import React from 'react'
import { Outlet } from 'react-router-dom';
import Studentnav from '../../pages/studentnav/Studentnav'


const AdminLayout = () => {
  return (
    <div>
      <Studentnav />
      <Outlet />
    </div>
  )
}

export default AdminLayout
