import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ openModal }) => {

    return (
        <nav className = "nav-container" >
            <Link to="/" className="nav-home">
                <h1>ChairsBnB</h1>
            </Link>
             <ul className="nav-links">
                <li className="signup-li" onClick={() => openModal('Sign Up')}>
                    Sign Up
                </li>
                <li className="login-li" onClick={() => openModal('Log In')}>
                    Log In
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;


