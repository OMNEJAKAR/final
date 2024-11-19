import React from "react";
import "./Footer.css";

let date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p id="ad">Contact Us at : mysevahelp@gmail.com</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <p id="an">Copyright © {year}</p>
    </div>
  );
}

export default Footer;
