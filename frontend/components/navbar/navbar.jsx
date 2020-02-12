import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.renderLogo = this.renderLogo.bind(this);
};

    renderLogo() {
        return (
            <Link to="/">
                <div className="chairs-logo-image">
                    <span>ChairsBnB</span>
                </div>
            </Link>
        )
    };

    render() {
        const { currentUser, openModal } = this.props;

        const sessionLinks = (
            <ul>
                <li className="signup-li" onClick={() => openModal('Sign Up')}>
                    Sign Up
                </li>
                <li className="login-li" onClick={() => openModal('Log In')}>
                    Log In
                </li>
            </ul>
        );
        
        if (currentUser) {
        return (
            <nav className="nav-links-container">
                <div className="nav-logo-container">
                    {this.renderLogo()}
                </div>
                {sessionLinks}
            </nav>
        );
        } else {
            return (
                <nav className="nav-links-container">
                    <div className="nav-logo-container">
                        {this.renderLogo()}
                    </div>
                    {sessionLinks}
                </nav>
            );  
        }
    }
}
export default NavBar;
