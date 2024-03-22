import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './App.css';

// layouts
import Loginpagelayout from './layouts/loginpagelayout/Loginpagelayout';
import AdminLayout from './layouts/adminLayout/AdminLayout';
import ReservedRooms from './pages/admin pages/reserved classrooms/ReservedRooms';
import Signuplayout from './layouts/signuplayout/Signuplayout';


// admin pages
import Home from './pages/admin pages/home/Home';
import Reserve from "./pages/admin pages/reservation forms/Reserve";
import SetActivity from "./pages/admin pages/reservation forms/SetActivity";
import Confirmation from "./pages/admin pages/reservation forms/Confirmation";

// student pages
import Login from './pages/student pages/login/Login';
import StudentHome from "./pages/student pages/home";
import StudentSignup from './pages/student pages/signup/StudentSignup';
import AdminSignup from './pages/admin pages/signup/AdminSignup'
import StudentLayout from './layouts/StudentLayout/StudentLayout';
import Hambirgir from './pages/student pages/hambirgir';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Loginpagelayout} >
            <Route index element={<Login/>} />
            <Route path='SignupLayout' Component={Signuplayout} />
            <Route path="StudentSignup" Component={StudentSignup} />
            <Route path="AdminSignup" Component={AdminSignup} />
          </Route>
          {/* admin pages */}
          <Route element={<AdminLayout />} path="/admin">
            <Route path="/home" element={<Home />} />
            <Route path="/reserved-classrooms" element={<ReservedRooms />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/set-activity" element={<SetActivity />} />
            <Route path="/reservation-confirmation" element={<Confirmation />} />
          </Route>
          <Route element={<StudentLayout/>} path="/student">
            <Route path="/" Component={StudentHome}/>
            <Route path="/login" Component={StudentLogin}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
