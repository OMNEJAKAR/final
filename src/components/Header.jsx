import React from "react";
import Login from "./Login";
import Button from "./buttons";

function Header()
{
  return (
    <div className="navbar">
    <div className="title">
      <h1>Seva</h1>
    </div>
        <div className="buttons">
           <Button name="Home" />
           <Button name="contact" />
           <Button name="Wallet" />

        </div>
        <Login />
    </div>
    
  );
}

export default Header;