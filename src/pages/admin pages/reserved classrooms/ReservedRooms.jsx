import React, { useState, useEffect } from 'react';
import '../reserved classrooms/ReservedRooms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"

const ReservedRooms = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [storedUserData, setStoredUserData] = useState(null);
    const [allData, setAllData] = useState(null)


    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleModal = () => {
        console.log("toggle");
        setShowModal(!showModal);
    };

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setStoredUserData(JSON.parse(storedUserData));
        }
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (storedUserData && storedUserData.data) { // Add null check
                    const response = await axios.get(`http://127.0.0.1:8000/api/teacher/${storedUserData.data.id}`);
                    setAllData(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [storedUserData]);

    console.log(allData)

    // const card = 
    return (
        <div className="home-container-r">
            <div style={{ height: '85px' }}></div>

            <div className="classroom-container">
                <div className="text-container">
                    <h1>Reserved Classrooms</h1>
                </div>
                <div style={{ width: '810px' }}></div>
            </div>
            <div style={{ height: '28px' }}></div>

            <div className="card-container-r">
                {/* PTC BLDG */}
                <div className="card-r" >
                    <div className="card-body-r">
                        <h5 className="card-title-r">PTC 201 - AC ROOM</h5>
                        <div style={{ height: '55px' }}></div>

                        <div className="text-info-container">
                            <div className="text-infos-left">
                                <p className="card-title-smol">Subject</p>
                                <p className="card-title-big">ITE 300</p>
                                <p className="card-title-smol">Program</p>
                                <p className="card-title-big">BSIT</p>
                                <p className="card-title-smol">Block</p>
                                <p className="card-title-big">3</p>
                            </div>
                            <div className="text-infos-right">
                                <p className="card-title-smol">Date</p>
                                <p className="card-title-big">SDJKLFAJL</p>
                                <p className="card-title-smol">Time</p>
                                <p className="card-title-big">389S33</p>
                            </div>
                        </div>
                        <div className="see-acts" onClick={toggleModal}>
                            <p className="see-acts-text">see activities</p>
                        </div>
                    </div>
                </div>

                <div className="card-r" >
                    <div className="card-body-r">
                        <h5 className="card-title-r">PTC 201 - AC ROOM</h5>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faEllipsisV} className="icon" />
                        </div>
                    </div>
                </div>
                <div className="card-r" >
                    <div className="card-body-r">
                        <h5 className="card-title-r">PTC 201 - AC ROOM</h5>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faEllipsisV} className="icon" />
                        </div>
                    </div>
                </div>

                <div className="card-r" >
                    <div className="card-body-r">
                        <h5 className="card-title-r">PTC 201 - AC ROOM</h5>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faEllipsisV} className="icon" />
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>
                            &times;
                        </span>
                        <p className="modal-title">ACTIVITIES</p>
                        <div style={{ height: '20px' }}></div>
                        <p className="modal-title-smol">COUNT 1 - 5.</p>
                        <p className="modal-title-smol">COUNT 1 - 5.</p>
                        <p className="modal-title-smol">COUNT 1 - 5.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReservedRooms;
