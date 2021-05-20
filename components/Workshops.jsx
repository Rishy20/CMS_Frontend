import React from "react";
import "../components/Workshops.css"
import SubTitle from "./SubTitle";
import WorkShopItem from "./WorkShopItem";
import Button from "./Button";

export default function Workshops(){
    return(
        <div className="workshops">
            <SubTitle text="Workshops" />
            <div className="workshop-items">
                <WorkShopItem/>
                <WorkShopItem/>
                <WorkShopItem/>
            </div>
            <Button name="All Workshops" btnStyle = "btn-view-all"/>
        </div>
    )
}