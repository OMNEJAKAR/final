import React from "react";

function Recruite(props)
{
    return (
        <div>
            <div className="profile-div" >
                <div className="Profile">
                    <div className="image">
                        <img src={props.image} />
                    </div>
                    <div className="content">
                        <h1>{props.name}</h1>
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Recruite;