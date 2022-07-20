import React from "react";
import { NavLink } from 'react-router-dom';
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
                <NavLink className="navbar-brand" to="/">
                    <img src="/images/fish.png" className="d-inline-block nav-icon"/>
                    <span className="nav-name">Raging Raymond</span>
                </NavLink>
                <nav className="nav">
                    {Auth.loggedIn() ? (
                        <>
                            <NavLink to={`/profile`} className="nav-link">My Profile<span></span></NavLink>
                        </>
                    ) : (
                        <>
                        </>
                    )}

                    <NavLink to='/gallery' className="nav-link">Gallery<span></span></NavLink>
                    <NavLink to='/donate' className="nav-link">Donate<span></span></NavLink>
                    <NavLink to='/fishTopics' className="nav-link">Fish Tales<span></span></NavLink>
                    <NavLink to='/vampTopics' className="nav-link">Vamp Chat<span></span></NavLink>
                    <NavLink to='/registration' className="nav-link">Tournament Registration<span></span></NavLink>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to={``} onClick={logout} className="nav-link">Log Out<span></span></Link>
                        </>
                    ) : (
                        <>
                            <NavLink to='/login' className="nav-link">Login<span></span></NavLink>
                            <NavLink to='/signup' className="nav-link">Signup<span></span></NavLink>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;