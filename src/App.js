import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer } from "./components";
import { Home, Admin } from "./views";

import './App.css';

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
