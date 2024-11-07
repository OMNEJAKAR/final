import React from "react";
import Login from "./Login";

function Header()
{
  return (
    <div className="navbar">
    <div className="title">
      <h1>Seva</h1>
    </div>
        <div className="buttons">
            <a href="#">home</a>
            <a href="#">Contact</a>
            <a href="#">Wallet</a>
        </div>
        <Login />
    </div>
    
  );
}

export default Header;