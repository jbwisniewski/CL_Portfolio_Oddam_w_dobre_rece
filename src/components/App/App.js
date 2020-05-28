import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from '../Home';
import AdminPage from '../Admin';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import AccountPage from '../Account';
import PasswordForgetPage from '../PasswordForget';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    <Router>
      <div>
        <Navigation />
   
        <hr />
   
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  );
   
  export default withAuthentication(App);