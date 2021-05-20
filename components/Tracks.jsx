import React from "react";
import SubTitle from "./SubTitle";
import "../components/Tracks.css"
import TrackItem from "./TrackItem";
export default function Tracks(){
    return(
        <div className="tracks">
            <SubTitle text="Tracks and Topics" />
            <div className="track-items">
                <TrackItem/>
                <TrackItem/>
                <TrackItem/>
                <TrackItem/>
                <TrackItem/>
                <TrackItem/>
                <TrackItem/>
                <TrackItem/>

            </div>

        </div>
    )
}