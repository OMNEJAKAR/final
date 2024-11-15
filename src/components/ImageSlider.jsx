
import React from "react";


function  ImageSlider(props)
{
    const profileDiv = {
        display : "flex",
        width : "100%",
        height : "400px",
        justifyContent : "center",
        
    }
    const profilepic = {
        width : "90%",
        height : "400px",
       

    }
    const imagediv = {
        height: "100%",
        width: "100%",
        objectFit: "contain", // or "cover" depending on your requirement
        borderRadius: "20px",  // Rounded corners
        
    };   
     const imageStyle = {
        borderRadius: "20px",  // Apply borderRadius directly to the image
        width: "100%",
        height: "100%",
        
    };
    
    return (
        <div className="sliderDiv">
            <div style={profileDiv} >
                <div style={profilepic}>
                    <div style={imagediv}>
                        <img  src={props.img} style={imageStyle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  ImageSlider;