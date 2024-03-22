import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './App.css';

// layouts
import Loginpagelayout from './layouts/loginpagelayout/Loginpagelayout';
import AdminLayout from './layouts/adminLayout/AdminLayout';
import StudentLayout from './layouts/studentLayout';
import ReservedRooms from './pages/admin pages/reserved classrooms/ReservedRooms';
import Signuplayout from './layouts/signuplayout/Signuplayout';
import Loginaslayout from './layouts/loginaslayout/Loginaslayout'

// admin pages
import Home from './pages/admin pages/home/Home';
import Reserve from "./pages/admin pages/reservation forms/Reserve";
import SetActivity from "./pages/admin pages/reservation forms/SetActivity";
import Confirmation from "./pages/admin pages/reservation forms/Confirmation";
import AdminSignup from './pages/admin pages/signup/AdminSignup'

import AdminLogin from './pages/admin pages/login/TeacherLogin'

// student pages
import Login from './pages/student pages/login/Login';

import StudentSignup from './pages/student pages/signup/StudentSignup';
import StudentHome from './pages/student pages/home/Home'
import Hambirgir from './pages/student pages/hambirgir';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpagelayout />} >
            <Route index element={<Loginaslayout />} />
            <Route path="StudentLogin" element={<Login />} />
            <Route path="AdminLogin" element={<AdminLogin />} />
            <Route path='SignupLayout' element={<Signuplayout />} />
            <Route path="StudentSignup" element={<StudentSignup />} />
            <Route path="AdminSignup" element={<AdminSignup />} />
          </Route>
          {/* admin pages */}
          <Route element={<AdminLayout />} path="/admin">
            <Route path="/home" Component={Home} />
            <Route path="/reserved-classrooms" Component={ReservedRooms} />
            <Route path="/reserve" Component={Reserve} />
            <Route path="/set-activity" Component={SetActivity} />
            <Route path="/reservation-confirmation" Component={Confirmation} />
          </Route>
          <Route element={<StudentLayout/>} path="/student">
            <Route path="/" Component={StudentHome}/>
            <Route path="/login" Component={StudentLogin}/>
          </Route>

          {/* student pages */}
          <Route element={<StudentLayout />} path="/student">
            <Route path="home" Component={StudentHome} />
            <Route path="hambirgir" Component={Hambirgir}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
