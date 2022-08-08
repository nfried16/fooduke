import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Calculator from "./components/Calculator";
import "./App.scss";
const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Calculator />
          </Route>
          <Route path="*">
            <div>not found</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
