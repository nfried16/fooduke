import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import Calculator from "./components/Calculator";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
        <Footer/>
      </div>
    </Router>
  );
}

export default App;