import React from 'react';
import { Link } from 'react-router-dom';
import '../nav/Navbar.css';

const Studentnav = () => {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <img className='logo' src="/public/images/logo.png" alt="phinmalogo" />
                <ul className="navbar-nav flex-row">
                    <li className="nav-item">
                        <Link to="/student/home" className="nav-link">Available Classrooms</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="" className="nav-link">Reserved Classrooms</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="activities" className="nav-link">Activities</Link>
                    </li>
                </ul>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Studentnav
