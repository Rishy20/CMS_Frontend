import React from "react";
import "./styles/PageTitle.css"
function PageTitle(props){
    return(
        <div>
            <h2 className="page-title">{props.title}</h2>
            <hr className="title-rule"/>
        </div>
    )
}
export default PageTitle