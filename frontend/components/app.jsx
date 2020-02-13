import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from '../splash/modal'
import SplashContainer from '../splash/splash_container';
import NavbarContainer from '../components/navbar/navbar_container';



const App = () => (
    <div>
        <Modal />
        <NavbarContainer />
        <Switch>
            <Route exact path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;