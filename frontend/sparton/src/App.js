import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import {Link, Route, Switch} from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/register">Register</Link></li>
      </ul>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />

    </Switch>

    <Login/>
  </div>

  );
}


export default App;
