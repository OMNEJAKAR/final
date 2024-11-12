import React from "react";
import "../assets/styles/about_us.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUser, faLeaf } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <header>
        <div className="header-content">
          <h1>ALL ABOUT US</h1>
          <div className="icons">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>
      </header>

      <section className="profiles"
      >
        <div className="profile">
        <img src={`${process.env.PUBLIC_URL}/coder.jpg`} alt="Coder" />
          <h2>CODER</h2>
          <div className="quote-box">
            <p className="quote">“vak-vak”</p>
            <FontAwesomeIcon icon={faLeaf} className="leaf-icon" />
          </div>
        </div>

        <div className="profile">
          <img src={`${process.env.PUBLIC_URL}/designer.jpg`} alt="Designer" />
          <h2>DESIGNER</h2>
          <div className="quote-box">
            <p className="quote">“blood”</p>
            <FontAwesomeIcon icon={faLeaf} className="leaf-icon" />
          </div>
        </div>

        <div className="profile">
          <img src={`${process.env.PUBLIC_URL}/Unknown.jpg`} alt="Unknown" />
          <h2>UNKNOWN</h2>
          <div className="quote-box">
            <p className="quote">“knock-knock”</p>
            <FontAwesomeIcon icon={faLeaf} className="leaf-icon" />
          </div>
        </div>

        <div className="profile">
          <img src={`${process.env.PUBLIC_URL}/place_verifier.jpg`} alt="Place Verifier" />
          <h2>PLACE VERIFIER</h2>
          <div className="quote-box">
            <p className="quote">“Gn8”</p>
            <FontAwesomeIcon icon={faLeaf} className="leaf-icon" />
          </div>
        </div>
      </section>

      <footer>
        <p>
          Github Link: <a href="#">Currently unavailable</a>
        </p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
        <p>Contact us:</p>
      </footer>
    </div>
  );
};

export default AboutUs;
