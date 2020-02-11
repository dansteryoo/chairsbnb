import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </nav>
    );

    const welcomeGreeting = () => (
        <div>
            <h2 className="header-name">Welcome, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? welcomeGreeting() : sessionLinks();
};


export default Greeting;
