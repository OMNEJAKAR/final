import React from "react";

// Dynamic year in the footer
let date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p>Copyright © {year}</p>
    </div>
  );
}

export default Footer;
