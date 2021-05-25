import React from "react";
import img from "url:../../public/images/NodeJS.png";

export default function TrackItem(){
    return(
        <div className="track-item">
            <div className="track-logo">
                <img src={img} />
            </div>
            <div className="track-name">
                Node Js
            </div>
        </div>
    )
}