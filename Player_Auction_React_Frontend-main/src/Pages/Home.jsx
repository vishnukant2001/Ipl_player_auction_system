import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar"

const Home = () => {
  return (
    <div>
      <Navbar />
      <p className="welcome-msg" style={{ textAlign: 'center', margin: '0', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bolder', fontSize: "40px" ,color:'white'}}>IPL Player Auction System</p>
    </div>
  )
}

export default Home