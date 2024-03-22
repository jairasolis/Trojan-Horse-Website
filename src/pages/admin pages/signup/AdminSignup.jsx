import React, { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';

const AdminSignup = () => {
    const [form, setForm] = useState({
        name: "",
        department: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        department: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    const [emailExists, setEmailExists] = useState(false);
    console.log(form)
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

        if (!form.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!form.department) {
            newErrors.department = 'Department is required';
            isValid = false;
        }

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
        if (!form.confirm_password) {
            newErrors.confirm_password = 'Confirm Password is required';
            isValid = false;
        } else if (form.confirm_password !== form.password) {
            newErrors.confirm_password = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/auth/teacher/register",
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
                    {errors.name && <div className="error">{errors.name}</div>}
                    <br />
                    <input type="text" name="department" value={form.department} onChange={handleChange} className='' placeholder='Department' required />
                    {errors.department && <div className="error">{errors.department}</div>}
                    <br />
                    <input type="email" name="email" value={form.email} onChange={handleChange} className='' placeholder='Email' required />
                    {errors.email && <div className="error">{errors.email}</div>}
                    <br />
                    <input type="password" name="password" value={form.password} onChange={handleChange} placeholder='Password' required />
                    {errors.password && <div className="error">{errors.password}</div>}
                    <br />
                    <input type="password" name="confirm_password" value={form.confirm_password} onChange={handleChange} placeholder='Confirm Password' required />
                    {errors.confirm_password && <div className="error">{errors.confirm_password}</div>}
                    <br />
                    <button type="submit" className='mb-3'>Signup</button>
                    <br />
                    <span className='login-span'>You already have an account? <Link to="/" className='text-decoration-none'><span className='register-span'>Login</span></Link></span>
                    {emailExists && <div className="error">Email already exists</div>}
                </form>
            </div>
        </div>
    );
}

export default AdminSignup;
