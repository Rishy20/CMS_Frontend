import React from "react";
import img from "url:../../public/images/IMG_0550.jpg"
function SpeakerItem(){

    return(
        <div className="speaker-item">
            <img className="speaker-item-img" src={img} />
            <h3 className="speaker-item-name">Rishard Akram</h3>
            <h4 className="speaker-item-profession">Software Engineer</h4>
            <h4 className="speaker-item-company">WSO2, Sri Lanka</h4>
        </div>
    )
}

export default SpeakerItem