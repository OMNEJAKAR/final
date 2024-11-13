import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Header.css";

function Header()
{
  return (
    <div className="navbar">
      <div className="title">
        <h1>Seva</h1>
      </div>
        <div className="buttons">
        <nav>
          <Link  to="/">Home</Link>
          <Link to="/aboutus">About</Link>
          <Link  to="/">Events</Link>
          <Link to="/aboutus">Profile</Link>
          <Link to="/aboutus">Contact</Link>
          <Link to="/aboutus">Wallet</Link>
          
        </nav>

        </div>
        <Link to="/login" ><h1 className="title">Login</h1></Link>
        {/* <Login /> */}
    </div>  
  
);
}

export default Header;