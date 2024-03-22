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
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/ITS 201.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>ITS 201</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/PTC 301.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>PTC 301</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/PTC 302.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>PTC 302</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/PTC 303.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>PTC 303</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>


                {/* ITS BLDG */}

                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/PTC 304.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>PTC 304</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/PTC 305.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>PTC 305</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/PTC 306.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>PTC 306</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/PTC 403.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>PTC 403</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/PTC 404.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>PTC 404</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/PTC 405.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>PTC 405</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card" style={{ display: filterCardsByBuilding('PTC BLDG') ? 'block' : 'none' }}>
                    <Link to="/admin/reserve">
                        <div className="card-body-2">
                            <div>
                                <img src="/public/images/PTC 406.jpg" alt="" />
                            </div>
                            <div className="card-title">
                                <span className='room-title'>PTC 406</span>
                                <span className='room-availability'>Available</span>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Home;
