import React from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </HashRouter>
  );
}

export default App;
