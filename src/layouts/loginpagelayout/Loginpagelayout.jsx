import React from 'react';
import "./Loginpagelayout.css";
import { NavLink, Outlet } from 'react-router-dom';


const Loginpagelayout = () => {
    return (
        <section className='login-layout'>
            <div className='login-layout-content'>
                <div className="row">
                    <div className='col-6 phinma-location'>
                        <img src="/public/images/phinmalocation.png" alt="phinma location" />
                    </div>
                    <Outlet />
                </div>
            </div>
        </section>
    );
}

export default Loginpagelayout;
