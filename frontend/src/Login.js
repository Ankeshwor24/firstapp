import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Loginvalidation';
import axios from 'axios'


function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [backendError, setBackendError] = useState([])
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if (err.email === "" && err.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data.errors) {
                        setBackendError(res.data.errors);
                    } else {
                        setBackendError([]);

                        if (res.data === "Success") {
                            navigate('/home');
                        }
                        else {
                            alert("No record existed");
                        }
                    }
                })
                .catch(err => console.log(err));
        }

    }

    return (

        <div>
             {/*  <!---- NavigationBar ----> */}
                <section id="nav-bar">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#"><img src="assets/img/logo.jpg" /></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item">
                                    <Link to="/" className="btn btn-default border w-100 rounded-0 text-decoration-none bg-green" onClick={() => navigate('/')}>Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#about">ABOUT US</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#services">SERVICES</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#team">OUR TEAM</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#ourmission">OUR MISSION</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#testimonials">TESTIMONIALS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#contact">CONTACT</a>
                                    </li>
                                    <li>
                                    <Link to="/login" className='btn btn-default border w-100 bg-green rounded-0 text-decoration-none'>Log in</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: '#4B5320', height: '100vh' }}>

                <h1 style={{ color: '#fff', textAlign: 'center', paddingBottom: '20px' }}><b>MILLITARY SUPPLY CHAIN MANEGEMENT USING BLOCKCHAIN TECHNOLOGY</b></h1>
                <div className='p-3 rounded w-25' style={{ backgroundColor: '#353935' }}>
                    <h2 style={{ color: '#fff', textAlign: 'center' }}><b>Login</b></h2>
                    {backendError ? backendError.map(e => (
                        <p className='text-danger'>{e.msg}</p>
                    )) : <span></span>
                    }
                    <form action='' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='email' style={{ color: '#fff' }}><strong>Email</strong></label>
                            <input type='email' placeholder='Enter email' name='email'
                                onChange={handleInput} className='form-control rounded=-0' />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' style={{ color: '#fff' }}><strong>Password</strong></label>
                            <input type='password' placeholder='Enter password' name='password'
                                onChange={handleInput} className='form-control rounded=-0' />
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>
                        <button type='submit' className='btn btn-success w-100 rounded-0' ><strong>Log in</strong></button>
                        <p style={{ color: '#fff' }}>You agree to terms and policies</p>
                        <Link to="/signup" className='btn btn-default border w-100 rounded-0 text-decoration-none bg-white'>Create Account</Link>
                        

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login