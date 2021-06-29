import React from "react";
import ScheduleItem from "./ScheduleItem";
import TabPanel from "./TabPanel";
import {useFetch} from "./useFetch";
import moment from "moment";

export function ScheduleDay(props){

    const {data} = useFetch(`http://localhost:3000/api/v1/events/day/${props.day}`)
    return(
        <div>
            <div className={"day-body"}>
                <div className={"date"}><strong>Date : </strong> {props.date}</div>
                <div className={"time"}><strong>Time : </strong> {props.startTime} to {props.endTime}</div>
                <div className={"location"}><strong>Location : </strong>{props.location}</div>
            </div>
            {
                data.length >  0 &&
                <div className={"schedule-items"}>
                    {
                        data.map(item=>{
                            const startTime = moment(item.startTime, 'HH:mm');
                            const endTime = moment(item.endTime, 'HH:mm');
                            const totalMinutes = endTime.diff(startTime, 'minutes');
                            if (item.type==="Workshop"){
                                return <ScheduleItem
                                    startTime={item.startTime}
                                    event={item.name}
                                    speaker={item.workshop[0].presentersName}
                                    company={item.workshop[0].company}
                                    eventType={item.type}
                                    duration={totalMinutes + " mins"}/>
                            }else  if (item.type==="Research Proposal"){
                                return <ScheduleItem
                                    startTime={item.startTime}
                                    event={item.name}
                                    speaker={item.researcher[0].fname + " " + item.researcher[0].lname}
                                    company={item.researcher[0].company}
                                    eventType={item.type}
                                    duration={totalMinutes + " mins"}/>
                            }else  if (item.type=== "Keynote"){
                                return <ScheduleItem
                                    startTime={item.startTime}
                                    event={item.name}
                                    speaker={item.keynote[0].fname + " " + item.keynote[0].lname}
                                    company={item.keynote[0].company}
                                    eventType={item.type}
                                    duration={totalMinutes + " mins"}/>
                            }

                        })
                    }

                </div>
            }

        </div>
    )
}