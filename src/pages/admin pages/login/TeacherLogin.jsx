import React, { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';


const TeacherLogin = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
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

        let newErrors = {};
        let isValid = true;


        if (!form.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }


        if (!form.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (form.password.length < 8) {
            newErrors.password = 'Password must be 8 characters long';
            isValid = false;
        }
        setErrors(newErrors);

        if (isValid) {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/auth/teacher/login",
                    form
                );

                console.log(response.data);
                setEmailExists(false);
                window.location.href = "/Admin/Home";
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
        <div className='col-6 phinma-logo login'>
            <img src="/public/images/phinmalogo.png" alt="phinmalogo" />
            <div className='login-page'>
                <form  onSubmit={handleValidation}>
                    <input name="email" value={form.email} onChange={handleChange} id="email" type="email" className='mt-5' placeholder='Email' />
                    <br />
                    <input name="password" value={form.password} onChange={handleChange} id="password" type="password" placeholder='Password' />
                    <br />
                    <button className='mb-3 mt-3'>Login</button>
                    <br />
                    <span className='login-span'>Do not have an account yet? <Link to="/SignupLayout" className='text-decoration-none'><span className='register-span'>Register</span></Link></span>
                </form>
            </div>
        </div>
    )
}

export default TeacherLogin