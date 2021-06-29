import React from "react";

export default function WorkShopItem(props){
    return(
        <div className="workshop-item">
            <div className="workshop-item-img">
                <img src={`https://api.icaf.site/api/v1/workshops/image/${props.img}`}/>
            </div>
            <div className="workshop-item-content">
                <div className="workshop-heading">
                    {props.name}
                </div>
                <div className="presenter-name">
                    {props.presenter}, {props.job}, {props.company}
                </div>
            </div>
        </div>
    )
}