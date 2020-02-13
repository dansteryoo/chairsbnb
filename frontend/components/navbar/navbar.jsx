import React from 'react';

const NavBar = ({ openModal }) => {
    return (
        <nav className = "nav-container" >
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


