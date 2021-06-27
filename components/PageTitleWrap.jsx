import React from "react";
import "./styles/PageTitleWrap.css"
export default function PageTitleWrap(props){
    return(
        <div className={"page-title-wrap"}>
            <div className={"page-heading-container"}>
                <div className={"page-heading"}>{props.title}</div>
                <div className={"breadcrumbs"}>Home / {props.title}</div>
            </div>
        </div>
    )
}