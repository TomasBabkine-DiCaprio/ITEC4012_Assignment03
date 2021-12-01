import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import pages
import { HomePage } from './components/pages/Home-Page';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
