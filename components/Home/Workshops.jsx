import React from "react";
import "../styles/Workshops.css"
import SubTitle from "./SubTitle";
import PresentationItem from "./PresentationItem";
import Button from "../Button";
import {useFetch} from "../useFetch";
import {Link} from "react-router-dom";

export default function Workshops(){
    const {data} = useFetch("https://api.icaf.site/api/v1/workshops/approved");

    return(
        <div className="workshops">
            {
                data.length > 0 &&
                    <>
                        <SubTitle text="Workshops" />
                        <div className="workshop-items" >
                            {
                                data && data.map(workshop=>{
                                    return <PresentationItem
                                        name={workshop.workshopName}
                                        presenter={workshop.presentersName}
                                        job={workshop.jobTitle}
                                        company={workshop.company}
                                        img={workshop.avatar}
                                        type={"workshops"}
                                    />
                                })
                            }
                        </div>
                        <Link to={"/workshops"}><Button name="All Workshops" btnStyle = "btn-view-all"/></Link>
                    </>
            }
        </div>
    )
}