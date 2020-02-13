import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../splash/modal'
import Splash from '../splash/splash';
import TempContainer from '../components/show/temp_container'



const App = () => (
    <div>
        <Modal />
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute exact path="/temp" component={TempContainer} />
    </div>
);

export default App;
