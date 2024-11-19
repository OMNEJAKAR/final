import React from "react";
import {Link} from "react-router-dom";
import App from "./App";

function Button(props)
{
    return (
        <div>
            <a href={props.path}>{props.name}</a>
        </div>
    );
}
export default Button;