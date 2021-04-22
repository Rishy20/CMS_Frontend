import React from "react";
import "./HeaderItem.css"

function HeaderItem(props){

    return(
        <a className="header-link" href="#">{props.text}</a>
    )
}

export default HeaderItem;