import React from 'react'
import { Link } from "react-router-dom"

const Signuplayout = () => {
    return (
        <div className='col-6 phinma-logo'>
            <img src="/public/images/phinmalogo.png" alt="phinmalogo" />
            <div className='login-page'>
                <Link to="/StudentSignup"><button className='mt-5 mb-3'>Register as a Student</button></Link>
                <br />
                <Link to="/AdminSignup"><button className='mb-3'>Register as a Teacher</button></Link>
                <br />
                <span className='login-span'>You have an account already? <Link to="/" className='text-decoration-none'><span className='register-span'>Login</span></Link></span>
            </div>
        </div>
    )
}

export default Signuplayout