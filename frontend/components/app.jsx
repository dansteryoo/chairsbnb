import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../splash/modal'
import Footer from '../splash/footer'
import SplashContainer from '../splash/splash_container';
import NavSearchContainer from '../components/navbar/navsearch_container'
import ListingsIndexContainer from '../components/listings/listings_index_container'
import ListingsShowContainer from '../components/listings/listings_show_container'


const App = () => (
    <div className='app-class'>
        <Modal />
        <AuthRoute exact path='/' component={SplashContainer} />

        <ProtectedRoute exact path='/listings' component={ListingsIndexContainer} />
        <Route exact path='/listings/:listingId'>
            <NavSearchContainer />
            <ListingsShowContainer/>
        </Route>
        
        <Footer />
    </div>
);

export default App;