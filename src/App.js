import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import pages
import { HomePage } from './components/pages/Home-Page';
import { GroceryDetailPage } from './components/pages/GroceryDetailPage';

// import NavBar
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/item/:id">
            <GroceryDetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
