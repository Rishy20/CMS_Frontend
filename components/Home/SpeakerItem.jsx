import React from "react";

function SpeakerItem(props){

    return(
        <div className="speaker-item" >
            <img className="speaker-item-img" src={props.img} />
            <h3 className="speaker-item-name">{props.name}</h3>
            <h4 className="speaker-item-profession">{props.job}</h4>
            <h4 className="speaker-item-company">{props.company}, {props.country}</h4>
        </div>
    )
}

export default SpeakerItem