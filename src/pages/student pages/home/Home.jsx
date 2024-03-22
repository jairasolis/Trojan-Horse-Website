import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import '../home/Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../nav/Navbar';
import PTCRoomsJSON from "../../../../public/map/PTCRooms.json";



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
    function CardComponent(props) {
        const [building_name, room_number] = props.room_name.split(" ");
        return (
            <div className="card" style={{ display: filterCardsByBuilding(`${building_name} BLDG`) ? 'block' : 'none' }}>
                <div className="card-body-2">
                    <div>
                        <img src={`/public/images/${props.img_name}`} alt={props.img_name} />
                    </div>
                    <h5 className="card-title">{props.title}</h5>
                </div>
            </div>
        )
    }


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
                {
                    PTCRoomsJSON.map(
                        (data, index) => <CardComponent title={data.title} img_name={data.img_name} room_name={data.room_name} key={index} />
                    )
                }
            </div>
        </div>
    );
}

export default Home;
