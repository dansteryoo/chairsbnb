import React from "react";
// import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from '../splash/modal'
import Splash from '../splash/splash';
// import NavbarContainer from '../components/navbar/navbar_container';
// import SignUpFormContainer from '../components/session_form/signup_form_container';
// import LogInFormContainer from '../components/session_form/login_form_container';




const App = () => (
    <div>
        <Modal />
        <AuthRoute exact path="/" component={Splash} />
    </div>
);

export default App;
