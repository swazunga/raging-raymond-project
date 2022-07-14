import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar bg-light">
            <div className="container-fluid">
                <Link to="/">
                    <h1>Raging Raymond</h1>
                </Link>
                <nav className="text-center">
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/donate'>Donate</Link>
                    <Link to='/fishTopics'>Fish Tales</Link>
                    <Link to='/vampTopics'>Vamp Chat</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;