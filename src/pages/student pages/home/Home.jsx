import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import '../home/Home.css';
import roomData from '../../../../public/map/PTCRooms.json';
import axios from "axios"



const Home = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedBuilding, setSelectedBuilding] = useState(null);
    const [checker, setChecker] = useState(null);


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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/activity/');
                setChecker(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const isClassroomOccupied = (classroomId) => {
        // Check if checker exists and if it contains classrooms array
        if (checker && Array.isArray(checker.classrooms)) {
            // Check if any classroom in checker matches the given classroom ID
            return checker.classrooms.some(classroom => classroom.classroom_id === parseInt(classroomId));
        }
        return false; // Default to false if checker is invalid or classrooms array is not available
    };

    const cards = roomData.map(data => (
        <div key={data.classroom_id} className="card" style={{ display: filterCardsByBuilding(data.building) ? 'block' : 'none' }}>
            <div className={isClassroomOccupied(data.classroom_id) ? 'card-body-3' : 'card-body-2'}>
                <div>
                    <img src={`/public/images/${data.img_name}`} alt="room" />
                </div>
                <div className="card-title">
                    <span className='room-title'>{data.room_name}</span>
                    <span id='room-availability'>{isClassroomOccupied(data.classroom_id) ? "Occupied" : "Available"}</span>
                </div>
            </div>
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
