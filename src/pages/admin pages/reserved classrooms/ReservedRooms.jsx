import React, { useState, useEffect } from 'react';
import '../reserved classrooms/ReservedRooms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import roomData from '../../../../public/map/PTCRooms.json';

const ReservedRooms = () => {
    const [showModal, setShowModal] = useState(false);
    const [storedUserData, setStoredUserData] = useState(null);
    const [allData, setAllData] = useState([]);

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

    const getRoomName = (roomId) => {
        switch (roomId) {
            case 1:
                return 'ITS 200';
            case 2:
                return 'ITS 201';
            case 3:
                return 'PTC 301';
            case 4:
                return 'PTC 302';
            case 5:
                return 'PTC 303';
            case 6:
                return 'PTC 304';
            case 7:
                return 'PTC 305';
            case 8:
                return 'PTC 306';
            case 9:
                return 'PTC 403';
            case 10:
                return 'PTC 404';
            case 11:
                return 'PTC 405';
            case 12:
                return 'PTC 406';
            default:
                return '';
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const cards = allData.activities ? allData.activities.map(activity => (
        <div key={activity.id} className="card-r">
            <div className="card-body-r">
                <h5 className="card-title-r">{getRoomName(activity.classroom_id)}</h5>
                <div style={{ height: '55px' }}></div>
                {/* <div>{getRoomName(activity.classroom_id)}</div> */}

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
                        <p className="card-title-smol">Start Time</p>
                        <p className="card-title-big">{activity.start_time}</p>
                        <p className="card-title-smol">End Time</p>
                        <p className="card-title-big">{activity.end_time}</p>
                    </div>
                </div>
                <div className="see-acts" onClick={toggleModal}>
                    <p className="see-acts-text">see activities</p>
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
                {cards}
            </div>
        </div>
    );
};

export default ReservedRooms;
