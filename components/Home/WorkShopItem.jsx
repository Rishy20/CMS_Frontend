import React from "react";
import img from "url:../../public/images/IMG_0550.jpg"
export default function WorkShopItem(props){
    console.log(props.img)
    return(
        <div className="workshop-item">
            <div className="workshop-item-img">
                <img src={`http://localhost:3000/api/v1/workshops/image/${props.img}`}/>
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