import React from "react";
import PageTitleWrap from "../PageTitleWrap";
import "../styles/Workshops.css"
import {useFetch} from "../useFetch";
import WorkShopItem from "../Home/WorkShopItem";
export default function ResearchPaperPresentation(){
    const {data} = useFetch("https://api.icaf.site/api/v1/researchers/approved");
    return (
        <div>

            <PageTitleWrap title={"Research Paper Presentations"}/>
            <div className={"presentations"}>
                <div className="presentation-items">
                    {
                        data && data.map(researcher=>{
                            return <WorkShopItem
                                key={researcher._id}
                                presenter={researcher.fname + " " + researcher.lname}
                                name={researcher.researchTitle}
                                job={researcher.jobTitle}
                                company={researcher.company}
                                img={researcher.avatar}
                                type={"researchers"}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}