import React from "react";
import "../styles/Workshops.css"
import SubTitle from "./SubTitle";
import WorkShopItem from "./WorkShopItem";
import Button from "../Button";
import {useFetch} from "../useFetch";

export default function Workshops(){
    const {data} = useFetch("https://icaf.site/api/v1/workshops/approved");

    return(
        <div className="workshops">
            {
                data.length > 0 &&
                    <>
                        <SubTitle text="Workshops" />
                        <div className="workshop-items">
                            {
                                data && data.map(workshop=>{
                                    return <WorkShopItem name={workshop.workshopName} presenter={workshop.presentersName} job={workshop.jobTitle} company={workshop.company} img={workshop.avatar}/>
                                })
                            }
                        </div>
                        <Button name="All Workshops" btnStyle = "btn-view-all"/>
                    </>
            }
        </div>
    )
}