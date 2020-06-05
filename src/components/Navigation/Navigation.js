import React from 'react';
import { Link } from 'react-router-dom';


import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
import PageNav from './PageNav';

const Navigation = ({ authUser }) => (
  <div className='home__navigation'>
    <div>
     <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
    </div>
    <div>
      <PageNav/>
    </div>
  </div>
);
 
const NavigationAuth = () => (
  <ul className='home__navigation-list'>
    <li className='home__navigation-link'>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li className='home__navigation-signout'>
      <SignOutButton />
    </li>
  </ul>
);
 
const NavigationNonAuth = () => (
  <ul className='home__navigation-list'>
    <li className='home__navigation-link'>
      <Link to={ROUTES.SIGN_IN}>Zaloguj</Link>
    </li>
    <li className='home__navigation-link-signup'>
      <Link to={ROUTES.SIGN_UP}>Załóż konto</Link>
    </li>
  </ul>
);

export default Navigation;
