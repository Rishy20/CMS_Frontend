import React from "react";

export default function ScheduleItem(){

    return(
        <div className={"schedule-item-container"}>
            <div className={"schedule-time"}>
                10:00
            </div>
            <div className="schedule-item">
                <div className="schedule-heading">Vue Workshop</div>
                <div className="schedule-speaker">Rishard, WSO2</div>
                <div className="schedule-item-tag">Workshop</div>
                <div className="schedule-item-time-tag">30 mins</div>
            </div>
        </div>
    )
}