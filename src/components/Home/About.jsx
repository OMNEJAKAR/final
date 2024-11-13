import React from "react";
import Slider from "react-slick";
import images from "../images";  // Assuming images.js is in the same directory
import ImageSlider from "../ImageSlider";
import recruiter from "../recruiterarr";  // Assuming recruiterarr.js is in the same directory
import Recruite from "../Recruite";  // Assuming Recruite.js is in the same directory
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";

const imagesliderStyle = {
    width: '90%',
    height: "500px",
    margin: '0 auto',
    marginTop: "10px"
};

const About = () => {
    const settings = {
        dots: true,            // Display navigation dots
        infinite: true,        // Enable infinite loop
        speed: 500,            // Transition speed in ms
        slidesToShow: 3,       // Number of profiles visible at once
        slidesToScroll: 1,     // Number of profiles to scroll per swipe
        autoplay: true,        // Enable automatic sliding
        autoplaySpeed: 2000 ,   // Time in ms before auto-slide
        arrows : false
    };
    const sliderDiv = {
        dots: true,            // Display navigation dots
        infinite: true,        // Enable infinite loop
        speed: 500,            // Transition speed in ms
        slidesToShow: 1,       // Number of profiles visible at once
        slidesToScroll: 1,     // Number of profiles to scroll per swipe
        autoplay: true,        // Enable automatic sliding
        autoplaySpeed: 2000,    // Time in ms before auto-slide
    };

    return (
        <div >
        <div className="About">
            {/* Image Slider */}
            <div style={imagesliderStyle}>
                <Slider {...sliderDiv}>
                    {images.map((obj) => (
                        <ImageSlider key={obj.url} img={obj.url} /> 
                    ))}
                </Slider>
            </div>

            {/* Profile Slider */}
            <Slider {...settings}>
                {recruiter.map((obj) => (
                    <Recruite key={obj.key} image={obj.image} name={obj.name} />
                ))}
            </Slider>

            <div className="content-div">
                <div className="content-div-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="img-div">
                    {<img src={images[0].url} />}
                </div>
                
            </div>
            <div className="content-div">
                <div className="content-div-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="img-div">
                    {<img src={images[0].url} />}
                </div>
                
            </div>
            <div className="content-div">
                <div className="content-div-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="img-div">
                    {<img src={images[0].url} />}
                </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default About;
