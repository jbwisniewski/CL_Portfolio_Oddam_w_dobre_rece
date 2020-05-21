import React from "react";
import { HashRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Form from './components/Form';
import Login from './components/Login';
import Logout from './components/Logout'
import Register from './components/Register'


function App() {
  return (
    <HashRouter>
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/oddaj-rzeczy">
            <Form />
          </Route>
          <Route exact path="/logowanie">
            <Login />
          </Route>
          <Route exact path="/rejestracja">
            <Register />
          </Route>
          <Route exact path="/wylogowano">
            <Logout />
          </Route>
        </Switch>
      </>
    </HashRouter>
  );
}

export default App;
