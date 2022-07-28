import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
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
      <Routes>

        <Route exact path='/' element={<Home /> } />
        <Route exact path='/signup' element={<Signup setUser={setUser} />} />

      </Routes>
    </div>
  );
}

export default App;