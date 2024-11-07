import React ,{useEffect, useState} from "react";

function ImageSlider({slides})
{
    const [currentIndex , setCurrentIndex] = useState(0);

    useEffect(()=>
    {
        const intervalId = setInterval(()=>
        {
            setCurrentIndex(prevIndex => (prevIndex+1)%slides.length);
        },2000);

        return ()=>clearInterval(intervalId);
    },[slides.length]);

    const slideStyles = {
        height : "100%",
        position : "relative",
      
    }

    const sliderStyle = {
        width : "100%",
        height : "100%",
        borderRadius : "10px",
        backgroundPosition : 'center',
        backgroundSize : "cover",
        backgroundImage : `url(${slides[currentIndex].url})`,
    
    }


    return (
        <div style={sliderStyle} >
        <div style={slideStyles}></div>
            
        </div>
    )
}

export default ImageSlider;