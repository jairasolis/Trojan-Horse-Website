import React from 'react'

const SignUp = () => {
    return (
        <div className='col-6 phinma-logo'>
            <img src="/public/images/phinmalogo.png" alt="phinmalogo" />
            <div className='login-page'>
                <form action="">
                    <input type="text" className='mt-5' placeholder='Username' />
                    <br />
                    <input type="email" className='' placeholder='Email' />
                    <br />
                    <input type="password" placeholder='Password' />
                    <br />
                    <input type="password" placeholder='Confirm Password' />
                    <br />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp