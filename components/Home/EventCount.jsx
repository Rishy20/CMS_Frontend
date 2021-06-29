import React from "react";
import EventCountItem from "./EventCountItem";
import "../styles/EventCount.css"
import {useFetch} from "../useFetch";
import moment from "moment";

export default function EventCount({info}){
    const speakers = useFetch("https://api.icaf.site/api/v1/keynotes/count");
    const researchers = useFetch("https://api.icaf.site/api/v1/researchers/count");
    const workshops = useFetch("https://api.icaf.site/api/v1/workshops/count");

    const startDate = info.length > 0 && moment(info[0].startDate, "MM/DD/YYYY");
    const endDate = info.length > 0 && moment(info[0].endDate, "MM/DD/YYYY");
    const difference = info.length > 0 ? moment.duration(endDate.diff(startDate)).asDays() : 0;

    return(
        <div className="event-count">
            <EventCountItem number={difference<10?"0"+difference:difference} text="Days"/>
            <EventCountItem number={speakers.data<10?"0"+speakers.data:speakers.data} text="Speakers"/>
            <EventCountItem number={researchers.data<10?"0"+researchers.data:researchers.data} text="Paper Presentations"/>
            <EventCountItem number={workshops.data<10?"0"+workshops.data:workshops.data} text="Workshops"/>
        </div>
    )
}