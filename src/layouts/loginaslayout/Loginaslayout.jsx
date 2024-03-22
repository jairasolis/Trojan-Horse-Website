import React from 'react'
import { Link } from "react-router-dom"

const Loginaslayout = () => {
    return (
        <div className='col-6 phinma-logo' id="loginaslayout">
            <img src="/public/images/phinmalogo.png" alt="phinmalogo" />
            <div className='login-page'>
                <Link to="/StudentLogin"><button className='mt-5 mb-3'>Student</button></Link>
                <br />
                <Link to="/AdminLogin"><button className='mb-3'>Teacher</button></Link>
                <br />
                <span className='login-span'>You don't have an account? <Link to="/SignupLayout" className='text-decoration-none'><span className='register-span'>Register</span></Link></span>
            </div>
        </div>
    )
}

export default Loginaslayout