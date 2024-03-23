import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Confirmation.css';


const Confirmation = () => {
  const navigate = useNavigate();
  const params = useParams()
  const location = useLocation();
  const formData = location.state ? location.state.formData : null;
  console.log(formData)

  const handleBackClick = () => {
    navigate(`/admin/set-activity/${params.id}`);
  };

  const handleNextClick = () => {
    navigate(`/admin/reservation-confirmation`);
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
            <h3 className='text-capitalize'><h3 className='text-uppercase d-inline-block'>{formData.student_program}</h3>, Year Level {formData.year_level}-{formData.block_number}</h3>
          </Row>
          <Row className=''>
            <Col md={6}>
            </Col>
            <Col>
              <div className="reserve-buttons d-flex justify-content-end">
                <Button className='go-back-button' style={{ backgroundColor: '#E6E6E6', border: 'none', color: '#414141' }} onClick={handleBackClick}>Go back</Button>
                <Button className='next-button' style={{ backgroundColor: '#2C5225', border: 'none' }} onClick={handleNextClick}>Submit</Button>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default Confirmation
