import React from "react";

// Dynamic year in the footer
let date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © {year}</p>
    </footer>
  );
}

export default Footer;
