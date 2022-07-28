import React from "react";
import { Link } from "react-router-dom";
import Login from './Login';


function Home( {parks} ) {
  console.log(parks.data)
  const parksData = parks.data

  return(

    <>
      <h1>HOMEPAGE</h1>
      <Login />
      <h1><Link to='/signup'>Sign Up</Link></h1>
      <div key="index">
        {parksData.map(park => (
          <>
          <h3>{park.fullName}</h3>
          </>
        ))}
      </div>
    </>
    
  )
}

export default Home;