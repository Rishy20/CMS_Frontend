import React from "react";
import Header from "../Header";
import PageTitleWrap from "../PageTitleWrap";
import SpeakerItem from "../Home/SpeakerItem";
import WorkShopItem from "../Home/WorkShopItem";
import "../css/Workshops.css"
export default function Workshops(){
    return (
        <div>

            <PageTitleWrap title={"Workshops"}/>
            <div className={"workshops"}>
            <div className="workshop-items">
                <WorkShopItem/>
                <WorkShopItem/>
                <WorkShopItem/>
                <WorkShopItem/>
                <WorkShopItem/>
                <WorkShopItem/>
            </div>
            </div>
        </div>
    )
}