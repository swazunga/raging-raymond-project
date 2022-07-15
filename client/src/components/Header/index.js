import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header className="navbar bg-light">
            <div className="container-fluid">
                <Link to="/">
                    <h1>Raging Raymond</h1>
                </Link>
                <nav className="text-center">
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/profile">Me</Link>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Signup</Link>
                        </>
                    )}

                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/donate'>Donate</Link>
                    <Link to='/fishTopics'>Fish Tales</Link>
                    <Link to='/vampTopics'>Vamp Chat</Link>
                    <Link to='/registration'>Registration</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;