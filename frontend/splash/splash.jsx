import React from 'react';
import NavBarContainer from '../components/navbar/navbar_container';
import SplashFormContainer from './splash_form_container';

const Splash = () => (
    <div className='splash-main'>
        <NavBarContainer/>
        <SplashFormContainer />
    </div>
);

export default Splash; 