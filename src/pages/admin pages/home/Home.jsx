import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import '../home/Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../nav/Navbar';

const Home = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedBuilding, setSelectedBuilding] = useState(null);


    const handleBuildingSelect = (building) => {
        setSelectedBuilding(building);
        setDropdownOpen(false);
    };

    const filterCardsByBuilding = (building) => {
        if (selectedBuilding === null) {
            return true;
        }
        return building === selectedBuilding;
    };

    const handleCardClick = () => {
        navigate('/admin/reserve');
    };

    return (
        <div className="home-container">
            <div className="padding-top"></div>

            <div className="classroom-dropdown-container">
                <div className="text-container">
                    <h1>Classrooms</h1>
                </div>
                <div className="spacer"></div>
                <div className="dropdown-container">
                    <Dropdown show={dropdownOpen} onToggle={(isOpen) => setDropdownOpen(isOpen)}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            {selectedBuilding || 'Select BLDG'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleBuildingSelect(null)}>All</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleBuildingSelect('PTC BLDG')}>PTC BLDG</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleBuildingSelect('ITS BLDG')}>ITS BLDG</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className="card-container">
                {/* PTC BLDG */}

                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body">
                            <h5 className="card-title">PTC 301</h5>
                        </div>
                    </Link>
                </div>

                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body">
                            <h5 className="card-title">PTC 302</h5>
                        </div>
                    </Link>
                </div>

                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body">
                            <h5 className="card-title">PTC 303</h5>
                        </div>
                    </Link>
                </div>

                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body">
                            <h5 className="card-title">PTC 304</h5>
                        </div>
                    </Link>
                </div>

                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body">
                            <h5 className="card-title">PTC 305</h5>
                        </div>
                    </Link>
                </div>


                {/* ITS BLDG */}

                <div className="card" style={{ display: filterCardsByBuilding('ITS BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/ITS 200.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>ITS 200</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card" style={{ display: filterCardsByBuilding('ITS BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body">
                            <h5 className="card-title">ITS 201</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
