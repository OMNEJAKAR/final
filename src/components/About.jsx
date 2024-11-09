import React from "react";
import Slider from "react-slick";
import images from "./images";  // Assuming images.js is in the same directory
import ImageSlider from "./ImageSlider";
import recruiter from "./recruiterarr";  // Assuming recruiterarr.js is in the same directory
import Recruite from "./Recruite";  // Assuming Recruite.js is in the same directory
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        autoplaySpeed: 2000    // Time in ms before auto-slide
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
        <div>
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
        </div>

    );
};

export default About;
