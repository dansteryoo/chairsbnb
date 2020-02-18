import React from 'react';
import { Link } from 'react-router-dom';

const NavSearch = ({ logout }) => {

    return (
        <nav className="navsearch-container" >
            <Link to="/" className="navsearch-home">
                <h1>ChairsBnB</h1>
            </Link>
            <ul className="navsearch-links">
                <li className="navsearch-logout-btn" onClick={() => logout()}>
                    Log Out
                </li>
            </ul>
        </nav>
    )
}

export default NavSearch;


