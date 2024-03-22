import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./StudentSignup.css"

const StudentSignup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        studentnum: "",
        section: "",
        password: "",
        confirm_password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [emailExists, setEmailExists] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleValidation = async (event) => {
        event.preventDefault();

        let isValid = true;

        if (!form.name) {
            setErrorMessage('Name is required');
            isValid = false;
        } else if (!form.email) {
            setErrorMessage('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            setErrorMessage('Email is invalid');
            isValid = false;
        } else if (!form.studentnum) {
            setErrorMessage('Student Number is required');
            isValid = false;
        } else if (!form.section) {
            setErrorMessage('Section is required');
            isValid = false;
        } else if (!form.password) {
            setErrorMessage('Password is required');
            isValid = false;
        } else if (form.password.length < 8) {
            setErrorMessage('Password must be 8 characters long');
            isValid = false;
        } else if (!form.confirm_password) {
            setErrorMessage('Confirm Password is required');
            isValid = false;
        } else if (form.confirm_password !== form.password) {
            setErrorMessage('Passwords do not match');
            isValid = false;
        }

        if (isValid) {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/auth/student/register",
                    form
                );

                console.log(response.data);
                setEmailExists(false);
                window.location.href = "/";
            } catch (error) {
                if (error.response && error.response.status === 500) {
                    setEmailExists(true);
                } else {
                    console.error("Registration failed:", error);
                }
            }
        }
    };

    return (
        <div className='col-6 phinma-logo'>
            <img src="/public/images/phinmalogo.png" alt="phinmalogo" />
            <div className='login-page'>
                <form onSubmit={handleValidation}>
                    <input type="text" name="name" value={form.name} onChange={handleChange} className='mt-5' placeholder='Name' required />
                    <br />
                    <input type="email" name="email" value={form.email} onChange={handleChange} className='' placeholder='Email' required />
                    <br />
                    <input type="text" name="studentnum" value={form.studentnum} onChange={handleChange} className='' placeholder='Student-number' required />
                    <br />
                    <input type="text" name="section" value={form.section} onChange={handleChange} className='' placeholder='Section' required />
                    <br />
                    <input type="password" name="password" value={form.password} onChange={handleChange} placeholder='Password' required />
                    <br />
                    <input type="password" name="confirm_password" value={form.confirm_password} onChange={handleChange} placeholder='Confirm Password' required />
                    <br />
                    {errorMessage && <div className="error">{errorMessage}</div>}
                    <button type="submit" className='mb-3'>Signup</button>
                    <br />
                    <span className='login-span'>You already have an account? <Link to="/" className='text-decoration-none'><span className='register-span'>Login</span></Link></span>
                    {emailExists && <div className="error">Email already exists</div>}
                </form>
            </div>
        </div>
    );
}

export default StudentSignup;
