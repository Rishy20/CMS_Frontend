import React from "react";
import Header from "../Header";
import "../css/Schedule.css"
import PageTitleWrap from "../PageTitleWrap";
import Accordion from "../Accordion";
import ScheduleItem from "../ScheduleItem";
export default function Schedule(){
    return(
        <div className={"schedule"}>

            <PageTitleWrap title={"Schedule"}/>
            <div className={"schedule-body"}>
                <Accordion items={["Day 1", "Day 2", "Day 3"]} selected={1}/>

                <div className={"day-body"}>
                    <div className={"date"}><strong>Date : </strong> November 1, 2021</div>
                    <div className={"time"}><strong>Time : </strong> 10:00 AM to 7:00 PM</div>
                    <div className={"location"}><strong>Location : </strong> Auditorium</div>
                </div>
                <div className={"schedule-items"}>
                    <ScheduleItem/>
                    <ScheduleItem/>
                    <ScheduleItem/>
                </div>


            </div>
        </div>
    )
}