import React from "react";
import EventCountItem from "./EventCountItem";
import "../styles/EventCount.css"

export default function EventCount(){
    return(
        <div className="event-count">
            <EventCountItem number="03" text="Days"/>
            <EventCountItem number="50" text="Speakers"/>
            <EventCountItem number="10" text="Paper Presentations"/>
            <EventCountItem number="15" text="Workshops"/>
        </div>
    )
}