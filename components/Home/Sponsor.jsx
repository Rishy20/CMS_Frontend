import React from "react";
import SubTitle from "./SubTitle";
import img from "url:../../public/images/wso2-logo.png";
import "../css/Sponsors.css"

export default function Sponsor(){
    return(
        <div className="sponsors">
                <SubTitle text="Powered By" />
                <div className="sponsor-items">
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                </div>

        </div>

    )
}