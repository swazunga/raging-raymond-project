import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth'
import Hero from '../components/Hero';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };
    const [addUser, { error }] = useMutation(ADD_USER);

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        //use try/catch instead of promises
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            Auth.login(data.addUser.token);
            console.log(data)
        } catch (e) {
            console.error(e)
        }
    };

    return (
    <>
        <Hero/>
        <div className="container mb-4">
            <div className="row justify-content-evenly">
                <div className="col-12 col-md-6">
                    <form onSubmit={handleFormSubmit} className="signup-form">
                        <h4 className="signup-header">Sign Up</h4>
                        
                        <label className='form-label' htmlFor='username'>Enter Your Username</label>
                        <input
                            className="form-control"
                            placeholder="Your username"
                            name="username"
                            type="username"
                            id="username"
                            value={formState.username}
                            onChange={handleChange}
                        />

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
                    </form>
                    {error && <div>Sign Up Failed</div>}
                </div>
            </div>
        </div>
    </>
    );
};

export default Signup;