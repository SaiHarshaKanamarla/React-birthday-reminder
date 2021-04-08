import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Addday from './Addday';
import Home from './Home';
import Details from './Details';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/data/:id'>
            <Details />
        </Route>
        <Route path='/Addday'>
            <Addday />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
