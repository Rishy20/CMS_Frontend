import React from "react";
import "./styles/HeaderItem.css"

function HeaderItem(props){

    return(
        <span className="header-link" onClick={props.onClick}>{props.text}</span>
    )
}

export default HeaderItem;