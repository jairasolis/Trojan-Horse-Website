import React from 'react'

const Login = () => {
    return (
        <div className='col-6 phinma-logo'>
            <img src="/public/images/phinmalogo.png" alt="phinmalogo" />
            <div className='login-page'>
                <form action="">
                    <input type="email" className='mt-5' placeholder='Email' />
                    <br />
                    <input type="password" placeholder='Password' />
                    <br />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login