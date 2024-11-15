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
          <Link  to="/" className="border-hover">Home</Link>
          <Link to="/aboutus" className="border-hover">About</Link>
          <Link  to="/" className="border-hover">Events</Link>
          <Link to="/aboutus" className="border-hover">Profile</Link>
          <Link to="/aboutus" className="border-hover">Contact</Link>
          <Link to="/aboutus" className="border-hover">Wallet</Link>
          
        </nav>

        </div>
        <span className="Login"><Link to="/login" ><h1>Login</h1></Link></span>
        {/* <Login /> */}
    </div>  

);
}

export default Header;