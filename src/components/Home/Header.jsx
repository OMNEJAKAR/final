import React from "react";
import Login from "../Login";
import Button from "../buttons";

function Header()
{
  return (
    <div className="navbar">
      <div className="title">
        <h1>Seva</h1>
      </div>
        <div className="buttons">
           <Button name="Home" path="https://www.google.com/" />
           <Button name="contact" path="https://www.google.com/" /> 
           <Button name="Wallet" path="https://www.google.com/"/>
        </div>
        <Login />
    </div>
  
);
}

export default Header;