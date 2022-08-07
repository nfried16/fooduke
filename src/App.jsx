import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <Router>
      <div>
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