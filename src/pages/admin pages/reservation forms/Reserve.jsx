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
    // Check if any required field is empty
    if (!form.student_program || !form.year_level || !form.block_number || !form.subject_id || !form.merge_blocks || !form.date || !form.start_time || !form.end_time) {
      // If any required field is empty, display an alert or error message to the user
      alert('Please fill in all fields.');
      return; // Exit the function early
    }

    // If all required fields are filled, navigate to the next step
    navigate(`/admin/set-activity/${params.id}`, { state: { formData: form } });
  };


  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleDateChange = (e) => {
    const date = e.target.value;
    setForm({ ...form, date: date });
  };
  const handleStartTimeChange = (e) => {
    const startTime = e.target.value;
    const formattedStartTime = `${form.date} ${startTime}:00`; // Use startTime here
    setForm({ ...form, start_time: formattedStartTime });
  };

  const handleEndTimeChange = (e) => {
    const endTime = e.target.value;
    const formattedEndTime = `${form.date} ${endTime}:00`; // Use endTime here
    setForm({ ...form, end_time: formattedEndTime });
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
                <Form.Control as="select" name="student_program" value={form.student_program} onChange={handleFormChange} required>
                  <option value="" disabled>--select program--</option>
                  <option value="bsit">BSIT</option>
                  <option value="bsce">BSCE</option>
                  <option value="bsa">BSA</option>
                  <option value="bspsych">BSPSYCH</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="year-level">
                <Form.Label>Year Level</Form.Label>
                <Form.Control as="select" name="year_level" value={form.year_level} onChange={handleFormChange} required>
                  <option value="" disabled>--select year level--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="student-block">
                <Form.Label>Student Block</Form.Label>
                <Form.Control as="select" name="block_number" value={form.block_number} onChange={handleFormChange} required>
                  <option value="" disabled>--select block--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="subject-code">
                <Form.Label>Subject Code</Form.Label>
                <Form.Control as="select" name="subject_id" value={form.subject_id} onChange={handleFormChange} required>
                  <option value="" disabled>--select subject code--</option>
                  <option value="ite400">ITE 400</option>
                  <option value="ite300">ITE 300</option>
                  <option value="ite98">ITE 298</option>
                  <option value="ite101">ITE 101</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="merge-blocks">
                <Form.Label>Merge with other blocks?</Form.Label>
                <Form.Control as="select" name="merge_blocks" value={form.merge_blocks} onChange={handleFormChange} required>
                  <option value="">--select--</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6} className="d-flex flex-column reserve-date-container">
              <Form.Group className="mb-3" controlId="startEndTime">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleDateChange}
                  required
                />
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  as="select"
                  name="start_time"
                  onChange={handleStartTimeChange}
                  required
                >
                  <option value="">--select start time--</option>
                  <option value="07:30">7:30 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:30">1:30 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:30">4:30 PM</option>
                </Form.Control>
                <Form.Label className='mt-3'>End Time</Form.Label>
                <Form.Control
                  as="select"
                  name="end_time"
                  onChange={handleEndTimeChange}
                >
                  <option value="">--select end time--</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:30">1:30 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:30">4:30 PM</option>
                  <option value="18:00">6:00 PM</option>

                </Form.Control>
              </Form.Group>
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
