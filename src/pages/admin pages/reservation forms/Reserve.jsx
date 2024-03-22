import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import  BasicDateTimePicker from './BasicDateTimePicker'
import './Reserve.css';


const Reserve = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/admin/home');
  };

  const handleNextClick = () => {
    navigate('/admin/set-activity');
  };

  return (
    <div className="reserve-page">
      <Container className='reserve-form-container'>
        <Row className="align-items-center justify-content-center reserve-row reserve-form-content">
          <Row className='reserve-header mb-4'>
            <Col md={12}>
              <h3>Reserve Classroom</h3>
            </Col>
          </Row>


            <Row className='main-reserve-form'>
              <Col md={6} className='student-details'>
                <Form.Group className="mb-3" controlId="student-program">
                  <Form.Label>Student Program</Form.Label>
                  <Form.Control as="select" style={{ width: '400px', backgroundColor: '#F4F4F4' }}>
                    <option value="" disabled>--select program--</option>
                    <option value="bsit">BSIT</option>
                    <option value="bsce">BSCE</option>
                    <option value="bsa">BSA</option>
                    <option value="bspsych">BSPSYCH</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="year-level">
                  <Form.Label>Year Level</Form.Label>
                  <Form.Control as="select" style={{ width: '400px', backgroundColor: '#F4F4F4' }}>
                    <option value="" disabled>--select year level--</option>
                    <option value="bsit">1</option>
                    <option value="bsce">2</option>
                    <option value="bsa">3</option>
                    <option value="bspsych">4</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="student-block">
                  <Form.Label>Student Block</Form.Label>
                  <Form.Control as="select" style={{ width: '400px', backgroundColor: '#F4F4F4' }}>
                    <option value="" disabled>--select block--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="subject-code">
                  <Form.Label>Subject Code</Form.Label>
                  <Form.Control as="select" style={{ width: '400px', backgroundColor: '#F4F4F4' }}>
                    <option value="" disabled>--select subject code--</option>
                    <option value="ite400">ITE 400</option>
                    <option value="ite300">ITE 300</option>
                    <option value="ite98">ITE 298</option>
                    <option value="ite101">ITE 101</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="merge-blocks">
                  <Form.Label>Merge with other blocks?</Form.Label>
                  <Form.Control as="select" style={{ width: '400px', backgroundColor: '#F4F4F4' }}>
                    <option value="" disabled>--select-- </option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} className="d-flex flex-column reserve-date-container">
                <p> Choose date and time: </p>
                <BasicDateTimePicker/>
              </Col>
            </Row>
            <Row className=''>
              <Col md={6}>
              </Col>
              <Col className='reserve-buttons-container'>
                <div className="reserve-buttons d-flex justify-content-end">
                  <Button className='go-back-button' style={{backgroundColor: '#E6E6E6', border: 'none', color: '#414141'}} onClick={handleBackClick}>Go back</Button>
                  <Button className='next-button' style={{backgroundColor: '#2C5225', border: 'none'}} onClick={handleNextClick}>Next</Button>
                </div>
              </Col>
            </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Reserve;
