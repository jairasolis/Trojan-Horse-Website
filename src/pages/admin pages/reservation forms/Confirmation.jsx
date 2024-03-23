import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Confirmation.css';
import axios from "axios"


const Confirmation = () => {
  const navigate = useNavigate();
  const params = useParams()
  const location = useLocation();
  const formData = location.state ? location.state.formData : null;
  console.log(formData)

  const handleBackClick = () => {
    navigate(`/admin/set-activity/${params.id}`);
  };

  // const handleNextClick = () => {
  //   navigate(`/admin/reservation-confirmation`);
  // };
  const handleValidation = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/activity/${params.id}`,
        formData
      );
      console.log(response.data);
      // Redirect user upon successful login
      window.location.href = "/Student/Home";
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error(error);
      } else {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className='confirmation-page'>
      <Container className='confirmation-form-container'>
        <Row className="align-items-center justify-content-center reserve-row">
          <Row className='reserve-header mb-4'>
            <h3> Confirmation </h3>
          </Row>
          <Row>
            <h2>Reserve Classrom for:</h2>
            <h3>Start Time: {formData.start_time}</h3>
            <h3>End Time: {formData.end_time}</h3>
            <h3 className='text-capitalize'><span className='text-uppercase d-inline-block'>{formData.student_program}</span>, Year Level {formData.year_level}-{formData.block_number}</h3>
          </Row>
          <Row className=''>
            <Col md={6}>
            </Col>
            <Col>
              <div className="reserve-buttons d-flex justify-content-end">
                <Button className='go-back-button' style={{ backgroundColor: '#E6E6E6', border: 'none', color: '#414141' }} onClick={handleBackClick}>Go back</Button>
                <Button className='next-button' style={{ backgroundColor: '#2C5225', border: 'none' }} onClick={handleValidation}>Submit</Button>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default Confirmation
