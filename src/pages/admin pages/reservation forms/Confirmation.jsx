import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Confirmation.css';


const Confirmation = () => {
  
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/admin/set-activity');
  };

  const handleNextClick = () => {
    navigate('/admin/reservation-confirmation');
  };

  return (
    <div className='confirmation-page'>
      <Container className='confirmation-form-container'>
        <Row className="align-items-center justify-content-center reserve-row">
          <Row className='reserve-header mb-4'>
            <h3> Confirmation </h3>

          </Row>
          <Row>
          {/* deets would be here */}
          </Row>
          <Row className=''>
            <Col md={6}>
            </Col>
            <Col>
              <div className="reserve-buttons d-flex justify-content-end">
                <Button className='go-back-button' style={{backgroundColor: '#E6E6E6', border: 'none', color: '#414141'}} onClick={handleBackClick}>Go back</Button>
                <Button className='next-button' style={{backgroundColor: '#2C5225', border: 'none'}} onClick={handleNextClick}>Next</Button>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default Confirmation
