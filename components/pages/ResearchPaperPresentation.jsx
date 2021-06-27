import React from "react";
import Header from "../Header";
import PageTitleWrap from "../PageTitleWrap";
import SpeakerItem from "../Home/SpeakerItem";
import researcherItem from "../Home/WorkShopItem";
import "../styles/Workshops.css"
import {useFetch} from "../useFetch";
import WorkShopItem from "../Home/WorkShopItem";
export default function ResearchPaperPresentation(){
    const {data} = useFetch("http://localhost:3000/api/v1/researchers/approved");
    return (
        <div>

            <PageTitleWrap title={"Research Paper Presentations"}/>
            <div className={"presentations"}>
                <div className="presentation-items">
                    {
                        data && data.map(researcher=>{
                            return <WorkShopItem presenter={researcher.fname + " " + researcher.lname} name={researcher.researchTitle} job={researcher.jobTitle} company={researcher.company} img={researcher.avatar}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}