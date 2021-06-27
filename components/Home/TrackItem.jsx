import React from "react";

export default function TrackItem(props){
    return(
        <div className="track-item">
            <div className="track-logo">
                <img src={`http://localhost:3000/api/v1/tracks/image/${props.img}`} />
            </div>
            <div className="track-name">
                {props.name}
            </div>
        </div>
    )
}