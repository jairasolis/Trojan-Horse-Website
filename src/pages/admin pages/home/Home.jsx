import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom
import roomData from '../../../../public/map/PTCRooms.json'; // Importing JSON data
import "./Home.css"

const Home = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedBuilding, setSelectedBuilding] = useState(null);
    const handleBuildingSelect = (building) => {
        setSelectedBuilding(building);
        setDropdownOpen(false);
    };

    const filterCardsByBuilding = (building) => {
        if (!selectedBuilding) {
            return true;
        }
        return building === selectedBuilding;
    };

    const cards = roomData.map(data => (
        <div key={data.room_name} className="card" style={{ display: filterCardsByBuilding(data.building) ? 'block' : 'none' }}>
            <Link to="/admin/reserve">
                <div className="card-body-2">
                    <div>
                        <img src={`/public/images/${data.img_name}`} alt="room" />
                    </div>
                    <div className="card-title">
                        <span className='room-title'>{data.room_name}</span>
                        <span className='room-availability'></span>
                    </div>
                </div>
            </Link>
        </div>
    ));

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
                {cards}
            </div>
        </div>
    );
}

export default Home;
