import React from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Confirmation.css';


const Confirmation = () => {
  const navigate = useNavigate();
  const params = useParams()
  const location = useLocation();
  const formData = location.state ?  location.state.formData : null;
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
        <Row className="lign-items-center justify-content-center reserve-row">
          <Row className='confirmations reserve-header mb-4'>
            <h5> Confirmation </h5>
          </Row>
          <Row>
            <h4 className='reserve'>Reserve Classroom:
              <h4 className='text-capitalize mt-1'><h4 className='text-uppercase d-inline-block'>{formData.student_program}</h4>, Year Level {formData.year_level}, Block-{formData.block_number}</h4>
            </h4>
            <div className='time'>
              <h4><i class="fa-regular fa-calendar"></i> <span className='timez'> Start Time: </span>{formData.start_time}</h4>
              <h4 className='end mb-4'><i class="fa-regular fa-calendar"></i><span className='timez'> End Time: </span>{formData.end_time}</h4>
            </div>
            <div className='instructions'>
              <h4 className='title mt-3'><span  className='timez'>Title: </span>{formData.title}</h4>
              <h4 className='mt-1'><span  className='timez'>Description: </span><div className='description'>{formData.description}</div></h4>
            </div>
          </Row>
          <Row className=''>
            <Col md={6}>
            </Col>
            <Col>
              <div className="reserve-buttons d-flex justify-content-end">
                <Button className='go-back-button mt-4' style={{ backgroundColor: '#E6E6E6', border: 'none', color: '#414141' }} onClick={handleBackClick}>Go back</Button>
                <Button className='next-button mt-4' style={{ backgroundColor: '#2C5225', border: 'none' }} onClick={handleNextClick}>Submit</Button>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default Confirmation
