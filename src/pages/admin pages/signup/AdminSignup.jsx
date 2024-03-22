import React from 'react'
import { Link } from "react-router-dom"


const AdminSignup = () => {
  return (
    <div className='col-6 phinma-logo'>
      <img src="/public/images/phinmalogo.png" alt="phinmalogo" />
      <div className='login-page'>
        <form action="">
          <input type="text" className='mt-5' placeholder='Name' />
          <br />
          <input type="text" className='' placeholder='Department' />
          <br />
          <input type="email" className='' placeholder='Email' />
          <br />
          <input type="password" placeholder='Password' />
          <br />
          <input type="password" placeholder='Confirm Password' />
          <br />
          <button className='mb-3'>Signup</button>
          <br />
          <span className='login-span'>You already have an account? <Link to="/" className='text-decoration-none'><span className='register-span'>Login</span></Link></span>
        </form>
      </div>
    </div>
  )
}

export default AdminSignup