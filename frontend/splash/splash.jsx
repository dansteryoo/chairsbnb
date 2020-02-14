import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from './footer';
import NavBarContainer from '../components/navbar/navbar_container';

const Splash = () => (
    <div className="splash-main">
        <div className="splash-header">
            <Link to="/" className="splash-header-home">
                <h1>ChairsBnB</h1>
            </Link>
        <NavBarContainer />
        </div>
        <img src={window.background} />
    </div>
);

export default Splash;