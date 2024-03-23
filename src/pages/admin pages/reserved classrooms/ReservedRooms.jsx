import React, { useState, useEffect } from 'react';
import '../reserved classrooms/ReservedRooms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const ReservedRooms = () => {
    const [showModal, setShowModal] = useState(false);
    const [storedUserData, setStoredUserData] = useState(null);
    const [allData, setAllData] = useState([]);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedUserData = localStorage.getItem('userData');
                if (storedUserData) {
                    const parsedUserData = JSON.parse(storedUserData);
                    const response = await axios.get(`http://127.0.0.1:8000/api/teacher/${parsedUserData.data.id}`);
                    setAllData(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(allData);

    const cards = allData.activities ? allData.activities.map(activity => (
        <div key={activity.id} className="card-r">
            <div className="card-body-r">
                <h5 className="card-title-r">PTC 201 - AC ROOM</h5>
                <div style={{ height: '55px' }}></div>

                <div className="text-info-container">
                    <div className="text-infos-left">
                        <p className="card-title-smol">Subject</p>
                        <p className="card-title-big">{activity.subject}</p>
                        <p className="card-title-smol">Program</p>
                        <p className="card-title-big">{activity.student_program}</p>
                        <p className="card-title-smol">Block</p>
                        <p className="card-title-big">{activity.block_number}</p>
                    </div>
                    <div className="text-infos-right">
                        <p className="card-title-smol">Date</p>
                        <p className="card-title-big">{activity.start_time}</p>
                        <p className="card-title-smol">Time</p>
                        <p className="card-title-big">{activity.end_time}</p>
                    </div>
                </div>
                <div className="see-acts" onClick={toggleModal}>
                    <p className="see-acts-text">see activities</p>
                </div>
            </div>
        </div>
    )) : null;

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
                {cards}
                {/* 
                <div className="card-r">
                    <div className="card-body-r">
                        <h5 className="card-title-r">PTC 201 - AC ROOM</h5>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faEllipsisV} className="icon" />
                        </div>
                    </div>
                </div>
            </div> */}
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
        </div>

    );
};

export default ReservedRooms;
