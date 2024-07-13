import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/team">Team</Link>
      <Link to="/player">Player</Link>
    </div>
  );
};

export default Navbar;
