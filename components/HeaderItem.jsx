import React from "react";
import "./css/HeaderItem.css"

function HeaderItem(props){

    return(
        <span className="header-link" onClick={props.onClick}>{props.text}</span>
    )
}

export default HeaderItem;