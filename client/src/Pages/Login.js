import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth'
import Hero from '../components/Hero';

const Login = props => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };
    const [login, { error }] = useMutation(LOGIN_USER);

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState }
            });
            Auth.login(data.login.token);


        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: ''
        });
    };

    return (
    <>
        <Hero/>
        <div className="container mb-4">
            <div className='row justify-content-evenly'>
                <div className="col-12 col-md-6">
                    <form onSubmit={handleFormSubmit} className="login-form">
                        <h4 className='login-header'>Login</h4>
                        
                        <label className='form-label' htmlFor='email'>Enter Your Email</label>
                        <input
                        className="form-control"
                        placeholder="example@example.com"
                        name="email"
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        />


                        <label className='form-label' htmlFor='password'>Enter Your Password</label>
                        <input
                            className="form-control"
                            placeholder="******"
                            name="password"
                            type="password"
                            id="password"
                            value={formState.password}
                            onChange={handleChange}
                        />

                        <button className="btn btn-primary" type="submit">Submit</button>
                        {error && <div>Login Failed</div>}
                    </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;