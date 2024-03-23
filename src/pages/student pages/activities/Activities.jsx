import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './Activities.css';

const Activities = () => {
    const [activities, setActivities] = useState([
        { title: "Title 1", description: "djjalkdfjklasjklnvn;ajksdfjaslkdfjlkas" },
        { title: "Title 2", description: "jfkandvnadskjfhawejlffasdffasfasfd" },
        { title: "Title 3", description: "vjkheripuwoijflasknvlksdfadvasdf" }
    ]);

    useEffect(() => {
        // fetchActivities();
    }, []);

    const fetchActivities = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/activity/');
            setActivities(response.data);
        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    };

    return (
        <div className="activities-container">
            <div className="padding-top"></div>
            <div className="activity-card-container">
                {activities.map((activity, index) => (
                    <Card key={index} className='activity-card'> 
                        <h4 className='activity-title'>{activity.title}</h4>
                        <p className='activity-description'>{activity.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Activities;
