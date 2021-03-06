import React from "react";
import "../styles/Workshops.css"
import {useFetch} from "../useFetch";
import PresentationItem from "./PresentationItem";
import SubTitle from "./SubTitle";
import Button from "../Button";
import {Link} from "react-router-dom";

export default function PaperPresentations(){
    const {data} = useFetch("https://api.icaf.site/api/v1/researchers/approved");
    return (
        <div>

            {
                data.length > 0 &&
                    <>
                        <div className={"presentations"}>
                            <SubTitle text="Research Paper Presentations" />
                            <div className="presentation-items">
                                {
                                    data && data.map(researcher=>{
                                        return <PresentationItem
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
                            <Link to={"/authors/presentations"}><Button name="All Presentations" btnStyle = "btn-view-all"/></Link>
                        </div>
                    </>
            }

        </div>
    )
}