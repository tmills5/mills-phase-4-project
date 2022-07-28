import React from "react";
import { Link } from "react-router-dom";
import Login from './Login';


function Home() {


  return(
    <>
      <h1>HOMEPAGE</h1>
      <Login />
      <h1><Link to='/signup'>Sign Up</Link></h1>
    </>
    
  )
}

export default Home;