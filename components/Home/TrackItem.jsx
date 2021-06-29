import React from "react";

export default function TrackItem(props){
    return(
        <div className="track-item">
            <div className="track-logo">
                <img src={`https://api.icaf.site/api/v1/tracks/image/${props.img}`} />
            </div>
            <div className="track-name">
                {props.name}
            </div>
        </div>
    )
}