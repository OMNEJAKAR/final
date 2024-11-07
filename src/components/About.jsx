import React from "react";
import Images from "./images";
import ImageSlider from "./ImageSlider";

const imageslider = {
    width : '90%',
    height : "500px",
    margin : '0 auto',
    marginTop : "10px"
}
function About()
{
    return (
        <div>
            <div style={imageslider}>
                <ImageSlider slides={Images} />
            </div>
            
        </div>
    );
}

export default About;