import React from "react";
import "../styles/Workshops.css"
import {useFetch} from "../useFetch";
import WorkShopItem from "../Home/WorkShopItem";
import SubTitle from "./SubTitle";
import Button from "../Button";

export default function PaperPresentations(){
    const {data} = useFetch("https://icaf.site/api/v1/researchers/approved");
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
                                        return <WorkShopItem
                                            key={researcher._id}
                                            presenter={researcher.fname + " " + researcher.lname}
                                            name={researcher.researchTitle}
                                            job={researcher.jobTitle}
                                            company={researcher.company}
                                            img={researcher.avatar}
                                        />
                                    })
                                }
                            </div>
                            <Button name="All Presentations" btnStyle = "btn-view-all"/>
                        </div>
                    </>
            }

        </div>
    )
}