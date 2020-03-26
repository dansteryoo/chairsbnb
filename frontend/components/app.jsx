import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../splash/modal'
import Footer from '../splash/footer'
import SplashContainer from '../splash/splash_container';
import SearchIndexContainer from '../components/listings/search_index_container'
import ListingsIndexContainer from '../components/listings/listings_index_container'
import ListingsShowContainer from '../components/listings/listings_show_container'


const App = () => (
    <div className='app-class'>
        <Modal />
        
            <Switch>
                <AuthRoute exact path='/' component={SplashContainer} />
                <ProtectedRoute exact path='/listings' component={ListingsIndexContainer} />
                <Route exact path='/listings/search' component={SearchIndexContainer} />
                <Route exact path='/listings/:listingId' component={ListingsShowContainer} />
            </Switch>
            
        <Footer />
    </div>
);

export default App;