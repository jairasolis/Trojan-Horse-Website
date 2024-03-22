import React from 'react';
import { Link } from 'react-router-dom';
import '../nav/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link to="/admin/home" className="navbar-brand">Classroom Availability</Link>
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <Link to="/admin/home" className="nav-link">Available Classrooms</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/reserved-classrooms" className="nav-link">Reserved Classrooms</Link>
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
  );
};

export default Navbar;
