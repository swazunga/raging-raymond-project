import React from "react";
import { NavLink } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className="navbar bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="/images/fish.png" className="d-inline-block align-text-top nav-icon"/>
                    <span className="nav-name">Raging Raymond</span>
                </NavLink>
                <nav className="nav">
                    {Auth.loggedIn() ? (
                        <>
                            <NavLink to={`/profile`} className="nav-link">My Profile</NavLink>
                            <NavLink to={`/`} onClick={logout} className="nav-link">Log Out</NavLink>
                            {/* <a href="/" onClick={logout}>
                                Logout
                            </a> */}
                        </>
                    ) : (
                        <>
                            <NavLink to='/login' className="nav-link">Login</NavLink>
                            <NavLink to='/signup' className="nav-link">Signup</NavLink>
                        </>
                    )}

                    <NavLink to='/gallery' className="nav-link">Gallery</NavLink>
                    <NavLink to='/donate' className="nav-link">Donate</NavLink>
                    <NavLink to='/fishTopics' className="nav-link">Fish Tales</NavLink>
                    <NavLink to='/vampTopics' className="nav-link">Vamp Chat</NavLink>
                    <NavLink to='/registration' className="nav-link">Registration</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;