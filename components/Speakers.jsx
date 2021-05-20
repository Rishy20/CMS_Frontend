import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SpeakerItem from "./SpeakerItem";
import "./Speakers.css"
import Button from "./Button";
function Speakers(){
    return(
        <div>
            <SubTitle text="Speakers" />
            <div className="speaker-items">
                <SpeakerItem/>
                <SpeakerItem/>
                <SpeakerItem/>
                <SpeakerItem/>
                <SpeakerItem/>
                <SpeakerItem/>
                <SpeakerItem/>
                <SpeakerItem/>
                <SpeakerItem/>

            </div>
            <Button name="All Speakers" btnStyle = "btn-view-all"/>
        </div>
    )
}
export default Speakers