import React from "react";
import Header from "../Header";
import PageTitleWrap from "../PageTitleWrap";
import SpeakerItem from "../Home/SpeakerItem";
import PresentationItem from "../Home/PresentationItem";
import "../styles/Workshops.css"
import {useFetch} from "../useFetch";
export default function Workshops(){

    const {data} = useFetch("https://api.icaf.site/api/v1/workshops/approved");

    return (
        <div>

            <PageTitleWrap title={"Workshops"}/>
            <div className={"workshops"}>
            <div className="workshop-items" data-testid={"workshop-items"}>
                {
                    data.map(workshop=>{
                        return <PresentationItem
                            name={workshop.workshopName}
                            presenter={workshop.presentersName}
                            job={workshop.jobTitle}
                            company={workshop.company}
                            img={workshop.avatar}
                            key={workshop._id}
                            type={"workshops"}
                        />
                    })
                }

            </div>
            </div>
        </div>
    )
}