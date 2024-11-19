import React from "react";
import Slider from "react-slick";
import images from "../images";  
import ImageSlider from "../ImageSlider";
import recruiter from "../recruiterarr";  
import Recruite from "../Recruite";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./About.css";

const imagesliderStyle = {
    width: '90%',
    height: "500px",
    margin: '0 auto',
    marginTop: "10px"
};

const About = () => {
    const settings = {
        dots: true,             
        infinite: true,         
        speed: 500,             
        slidesToShow: 3,        
        slidesToScroll: 1,      
        autoplay: true,         
        autoplaySpeed: 2000 ,    
        arrows : false,
    };
    const sliderDiv = {
        dots: true,             
        infinite: true,         
        speed: 500,             
        slidesToShow: 1,        
        slidesToScroll: 1,      
        autoplay: true,         
        autoplaySpeed: 2000,     
        
    };

    return (
        <div >
        <div className="content-heading">
        <div className="wrapper">
            <div className="static-txt">Welcome </div>
            <ul className="dynamic-txt">
            <li>
             <span>To Seva...</span> 
            </li></ul>
        </div>
        
        </div>
        <div className="About">
            <div style={imagesliderStyle}>
                <Slider {...sliderDiv}>
                    {images.map((obj) => (
                        <ImageSlider key={obj.url} img={obj.url} /> 
                    ))}
                </Slider>
            </div>

            <Slider {...settings}>
                {recruiter.map((obj) => (
                    <Recruite key={obj.key} image={obj.image} name={obj.name} content={obj.content} />
                ))}
            </Slider>

            <div className="about-head">
                <h1 style={{color : "white"}}>Upcoming Events: Join the Fun</h1>
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
