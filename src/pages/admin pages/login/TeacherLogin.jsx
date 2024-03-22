import React, { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';


const TeacherLogin = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const isValid = form.email && form.password;

    const handleValidation = async (event) => {
        event.preventDefault();

        if (isValid) {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/auth/teacher/login",
                    form
                );
                console.log(response.data);
                setErrorMessage("");
                // Redirect user upon successful login
                window.location.href = "/Admin/Home";
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    console.error("Unauthorized: Incorrect email or password");
                    setErrorMessage("Incorrect email or password");
                } else {
                    console.error("Login Error:", error);
                }
            }
        } else {
            setErrorMessage("Please fill out all fields");
        }
    };

    return (
        <div className='col-6 phinma-logo login'>
            <img src="/public/images/phinmalogo.png" alt="phinmalogo" />
            <div className='login-page'>
                <form onSubmit={handleValidation}>
                    <input name="email" value={form.email} onChange={handleChange} id="email" type="email" className='mt-5' placeholder='Email' />
                    <br />
                    <input name="password" value={form.password} onChange={handleChange} id="password" type="password" placeholder='Password' />
                    <br />
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <button type="submit" className='mb-3 mt-1'>Login</button>
                    <br />
                    <span className='login-span'>Do not have an account yet? <Link to="/SignupLayout" className='text-decoration-none'><span className='register-span'>Register</span></Link></span>
                </form>
            </div>
        </div>
    )
}

export default TeacherLogin