import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
// import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>ChairsBnB</h1>
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <Route path="/login" render={LogInFormContainer} />
            <Route path="/signup" render={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;