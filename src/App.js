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
          <Route exact path="/giveaway">
            <Form />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </>
    </HashRouter>
  );
}

export default App;
