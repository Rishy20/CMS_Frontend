import React from "react";
import Header from "../Header";
import "../css/Schedule.css"
import PageTitleWrap from "../PageTitleWrap";
import SpeakerItem from "../Home/SpeakerItem";
import "../css/Speakers.css"
export default function Authors() {
    return (
        <div className={"authors"}>

            <PageTitleWrap title={"Authors"}/>
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
        </div>
    )
}