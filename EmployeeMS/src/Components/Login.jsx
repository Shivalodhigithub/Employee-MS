import React, { useState } from 'react'
import axios from 'axios'
import './style.css'

const Login = () => {
    const [values, Setvalues] = useState({
        email: '',
        password: ''

    })
    const loginData = (event) => {
        event.preventDefault();

        // console.log(values)
        axios.post('http://localhost:3000/auth/adminlogin', values).then((result) => {
            console.log(result)
            Setvalues({
                email:'',
                password:''
            })

        }).catch((err) => {
            console.log(err)

        });


    }

    return (
        <>
            <div className=' d-flex justify-content-center vh-100 align-items-center loginPage'>
                <div className=' p-3  w-25   rounded border loginForm'>
                    <h2>Login Page</h2>
                    <form action="" onSubmit={loginData}>
                        <div className=' mb-3'>
                            <label htmlFor="email"><strong>Email:</strong></label>
                            <input type="email" name="email" value={values.email} id="" placeholder='Enter email' className=' form-control rounded-0' autoComplete='off' onChange={(e) => Setvalues({ ...values, email: e.target.value })} />
                        </div>
                        <div className=' mb-3' >
                            <label htmlFor="password"> <strong>Password:</strong></label>
                            <input type="password" name="password" value={values.password} id="" placeholder='Enter password' className=' form-control rounded-0' onChange={(e) => Setvalues({ ...values, password: e.target.value })} />
                        </div>

                        <div className=' mb-3' >
                            <input type="checkbox" name="tick" id="tick-mark" />
                            <label htmlFor="tick-mark"><strong>Remember Me</strong></label> {/* Corrected label */}

                        </div>
                        <button className=' btn btn-success w-100 rounded-0'   >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
