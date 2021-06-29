import React from "react";
import Header from "../Header";
import PageTitleWrap from "../PageTitleWrap";
import SpeakerItem from "../Home/SpeakerItem";
import WorkShopItem from "../Home/WorkShopItem";
import "../styles/Workshops.css"
import {useFetch} from "../useFetch";
export default function Workshops(){

    const {data} = useFetch("https://icaf.site/api/v1/workshops/approved");

    return (
        <div>

            <PageTitleWrap title={"Workshops"}/>
            <div className={"workshops"}>
            <div className="workshop-items">
                {
                    data.map(workshop=>{
                        return <WorkShopItem
                            name={workshop.workshopName}
                            presenter={workshop.presentersName}
                            job={workshop.jobTitle}
                            company={workshop.company}
                            img={workshop.avatar}
                            key={workshop._id}
                        />
                    })
                }

            </div>
            </div>
        </div>
    )
}