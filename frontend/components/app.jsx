import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../splash/modal'
import Footer from '../splash/footer';
import SplashContainer from '../splash/splash_container';
import TempContainer from '../components/show/temp_container'
import ListingsIndexContainer from '../components/show/listings_index_container'

const App = () => (
    <div>
        <Modal />
        <AuthRoute exact path="/" component={SplashContainer}>

        </AuthRoute>
        <ProtectedRoute exact path="/temp" component={TempContainer} />
        <ProtectedRoute exact path="/listings" component={ListingsIndexContainer} />
        <Footer/>
    </div>
);

export default App;