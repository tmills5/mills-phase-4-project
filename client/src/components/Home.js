import React from "react";
import { Link } from "react-router-dom";
// import Login from './Login';


function Home( {parks} ) {
  console.log(parks.data)
  const parksData = parks.data

  return(

    <>
      <h1>HOMEPAGE</h1>
<<<<<<< HEAD
=======
      <Login />
      <h1><Link to='/signup'>Sign Up</Link></h1>
      <div key="index">
        {parksData.map(park => (
          <>
          <h3>{park.fullName}</h3>
          </>
        ))}
      </div>
>>>>>>> 317b133a4ed9281f490ea2805246b8cfd466f4f6
    </>
    
  )
}

export default Home;