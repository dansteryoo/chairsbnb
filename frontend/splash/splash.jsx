import React from 'react';

const Splash = ({ currentUser, logout, openModal }) => {

    return (
        currentUser ? (
            <header>
                <div className="splash-container">
                    <button className="nav-signout" onClick={logout}>Sign Out</button>
                </div>
            </header>
        ) : (
                <header>
                    <div className="modal-container">
                        <button className="modal-login-btn" onClick={() => openModal('Log In')}>Log In</button>
                        <button className="modal-login-btn" onClick={() => openModal('Sign Up')}>Sign Up</button>
                    </div>
                </header>
        )
    );
}

export default Splash;
