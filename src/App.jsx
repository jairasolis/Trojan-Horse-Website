import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './App.css';

// layouts
import Loginpagelayout from './layouts/loginpagelayout/Loginpagelayout';
import AdminLayout from './layouts/adminLayout/AdminLayout';
import StudentLayout from './layouts/studentLayout/StudentLayout';
import ReservedRooms from './pages/admin pages/reserved classrooms/ReservedRooms';
import Signuplayout from './layouts/signuplayout/Signuplayout';


// admin pages
import Home from './pages/admin pages/home/Home';
import Reserve from "./pages/admin pages/reservation forms/Reserve";
import SetActivity from "./pages/admin pages/reservation forms/SetActivity";
import Confirmation from "./pages/admin pages/reservation forms/Confirmation";
import AdminSignup from './pages/admin pages/signup/AdminSignup'

// student pages
import Login from './pages/student pages/login/Login';
import StudentSignup from './pages/student pages/signup/StudentSignup'
import StudentHome from './pages/student pages/home/Home';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpagelayout />} >
            <Route index element={<Login />} />
            <Route path='SignupLayout' element={<Signuplayout />} />
            <Route path="StudentSignup" element={<StudentSignup />} />
            <Route path="AdminSignup" element={<AdminSignup />} />
          </Route>
          {/* admin pages */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/home" element={<Home />} />
            <Route path="/admin/reserved-classrooms" element={<ReservedRooms />} />
            <Route path="/admin/reserve" element={<Reserve />} />
            <Route path="/admin/set-activity" element={<SetActivity />} />
            <Route path="/admin/reservation-confirmation" element={<Confirmation />} />
          </Route>

          {/* admin pages */}
          <Route element={<StudentLayout />}>
            <Route path="/student/home" element={<StudentHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
