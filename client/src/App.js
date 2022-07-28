import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [parks, setParks] = useState([])
  // const [errors, setErrors] = useState(false)

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState(null);

  useEffect(() => {
    // fetch('/users')
    // .then(res => res.json())
    // .then(setTrails)
  },[]);

  return (
    <div className="App">
      <Navigation />
      <Routes>

        <Route exact path='/' element={<Home /> } />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;