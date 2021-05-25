import React from "react";
import Title from "../Title";
import SubTitle from "./SubTitle";
import SpeakerItem from "./SpeakerItem";
import "../css/Speakers.css"
import Button from "../Button";
function Speakers(){
    return(
        <div className={"speakers"}>
            <SubTitle text="Speakers" white={true}/>
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