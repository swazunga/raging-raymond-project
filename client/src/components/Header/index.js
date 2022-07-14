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
                </nav>
            </div>
        </header>
    );
};

export default Header;