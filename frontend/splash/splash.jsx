import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from './footer';
import NavBarContainer from '../components/navbar/navbar_container';
import Footer from './footer';

const Splash = () => (
    <div className="splash-main">
        <div className="splash-header">
            <Link to="/" className="splash-header-home">
                <h1>ChairsBnB</h1>
            </Link>
        </div>
        <NavBarContainer />
        <Footer />
    </div>
);

export default Splash;