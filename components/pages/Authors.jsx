import React from "react";
import Header from "../Header";
import "../styles/Schedule.css"
import PageTitleWrap from "../PageTitleWrap";
import SpeakerItem from "../Home/SpeakerItem";
import "../styles/Speakers.css"
import {useFetch} from "../useFetch";
export default function Authors() {
    const {data} = useFetch("https://icaf.site/api/v1/researchers/approved");
    return (
        <div className={"authors"}>

            <PageTitleWrap title={"Authors"}/>

            <div className="speaker-items">

                {
                   data && data.map(researcher=>{
                        return  <SpeakerItem
                            key={researcher._id}
                            name={researcher.fname + " " + researcher.lname}
                            job={researcher.jobTitle} company={researcher.company}
                            country={researcher.country}
                            img={`https://icaf.site/api/v1/researchers/image/${researcher.avatar}`}
                        />
                    })
                }

            </div>
        </div>
    )
}