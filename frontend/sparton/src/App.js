import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      
    <BrowserRouter>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">login</Link></li>
      </ul>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

    </Routes>
    </BrowserRouter>
  </div>

  );
}


export default App;
