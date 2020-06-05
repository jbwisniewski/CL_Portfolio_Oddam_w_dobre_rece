import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Home';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import AccountPage from '../Account';
import PasswordForgetPage from '../PasswordForget';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    <Router>
      <div>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      </div>
    </Router>
  );
   
  export default withAuthentication(App);