import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProgressBar from "./components/ProgressBar";
import NavBar from "./components/NavBar";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Calculator />
          </Route>
					<Route path="*">
						<div>
							not found
						</div>
					</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;