import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../splash/modal'
import SplashContainer from '../splash/splash_container';
import TempContainer from '../components/show/temp_container'
import ListingsIndexContainer from '../components/show/listings_index_container'


const App = () => (
    <div>
        <Modal />
        <AuthRoute exact path="/" component={SplashContainer} />

        <ProtectedRoute exact path="/listings" component={ListingsIndexContainer} />
        <ProtectedRoute exact path="/temp" component={TempContainer} />
    </div>
);

export default App;