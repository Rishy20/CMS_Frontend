import React from "react";

export default function ScheduleItem(props){

    return(
        <div className={"schedule-item-container"}>
            <div className={"schedule-time"}>
                {props.startTime}
            </div>
            <div className="schedule-item">
                <div className="schedule-heading">{props.event}</div>
                <div className="schedule-speaker">{props.speaker}, {props.company}</div>
                <div className="schedule-item-tag">{props.eventType}</div>
                <div className="schedule-item-time-tag">{props.duration}</div>
            </div>
        </div>
    )
}