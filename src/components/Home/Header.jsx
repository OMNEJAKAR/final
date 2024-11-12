import React from "react";
import Login from "../Login";
import Button from "../buttons";
import AboutUs from "../AboutUs";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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
        <Login />
    </div>  
  
);
}

export default Header;