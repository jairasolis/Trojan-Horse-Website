import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Reserve.css';

const Reserve = () => {
  const [storedUserData, setStoredUserData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    teacher_id: "",
    subject_id: "",
    student_program: "",
    year_level: "",
    block_number: "",
    start_time: "", // State for start time
    end_time: "" // State for end time
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setStoredUserData(JSON.parse(storedUserData));
    }
  }, []);

  console.log(form)

  useEffect(() => {
    if (storedUserData) {
      setForm(prevForm => ({
        ...prevForm,
        teacher_id: storedUserData.data.id
      }));
    }
  }, [storedUserData]);

  const handleBackClick = () => {
    navigate('/admin/home');
  };

  const handleNextClick = () => {
    navigate('/admin/set-activity');
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleStartTimeChange = (e) => {
    const startTime = new Date(e.target.value);
    const formattedStartTime = startTime.toISOString().slice(0, 16).replace('T', ' ');
    setForm({ ...form, start_time: formattedStartTime + ":00" });
  };
  
  const handleEndTimeChange = (e) => {
    const endTime = new Date(e.target.value);
    const formattedEndTime = endTime.toISOString().slice(0, 16).replace('T', ' ');
    setForm({ ...form, end_time: formattedEndTime + ":00" });
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
                <Form.Control as="select" name="student_program" value={form.student_program} onChange={handleFormChange}>
                  <option value="" disabled>--select program--</option>
                  <option value="bsit">BSIT</option>
                  <option value="bsce">BSCE</option>
                  <option value="bsa">BSA</option>
                  <option value="bspsych">BSPSYCH</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="year-level">
                <Form.Label>Year Level</Form.Label>
                <Form.Control as="select" name="year_level" value={form.year_level} onChange={handleFormChange}>
                  <option value="" disabled>--select year level--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="student-block">
                <Form.Label>Student Block</Form.Label>
                <Form.Control as="select" name="block_number" value={form.block_number} onChange={handleFormChange}>
                  <option value="" disabled>--select block--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="subject-code">
                <Form.Label>Subject Code</Form.Label>
                <Form.Control as="select" name="subject_id" value={form.subject_id} onChange={handleFormChange}>
                  <option value="" disabled>--select subject code--</option>
                  <option value="ite400">ITE 400</option>
                  <option value="ite300">ITE 300</option>
                  <option value="ite98">ITE 298</option>
                  <option value="ite101">ITE 101</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="merge-blocks">
                <Form.Label>Merge with other blocks?</Form.Label>
                <Form.Control as="select" name="merge_blocks" value={form.merge_blocks} onChange={handleFormChange}>
                  <option value="" disabled>--select-- </option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} className="d-flex flex-column reserve-date-container">
              <p> Start time: </p>
              <input type="datetime-local" id="startTime" name="startTime" value={form.start_time} onChange={handleStartTimeChange} />
              <p className='mt-3'> End time: </p>
              <input type="datetime-local" id="endTime" name="endTime" value={form.end_time} onChange={handleEndTimeChange} />
            </Col>
          </Row>
          <Row className=''>
            <Col md={6} className='blank-space-ts'>
            </Col>
            <Col className='reserve-buttons-container'>
              <div className="reserve-buttons d-flex justify-content-end">
                <Button className='go-back-button' style={{ backgroundColor: '#E6E6E6', border: 'none', color: '#414141' }} onClick={handleBackClick}>Go back</Button>
                <Button className='next-button' style={{ backgroundColor: '#2C5225', border: 'none' }} onClick={handleNextClick}>Next</Button>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Reserve;
