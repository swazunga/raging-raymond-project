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
        <header className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="/images/fish.png" className="d-inline-block nav-icon"/>
                    <span className="nav-name">Raging Raymond</span>
                </NavLink>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <nav className="navbar-collapse collapse justify-content-end" id="navigation">
                    <div className="navbar-nav">
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
                </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;