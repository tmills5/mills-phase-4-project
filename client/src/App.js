import './App.css';
import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [trails, setTrails] = useState([])
  const [errors, setErrors] = useState(false)

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(setTrails)
  },[]);

  return (
    <div className="App">
      <Login setUser={setUser} setIsAuthenticated = {setIsAuthenticated} user={user}/>
      <Signup setUser={setUser} />
    </div>
  );
}

export default App;