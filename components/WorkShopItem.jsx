import React from "react";
import img from "url:../public/images/IMG_0550.jpg"
export default function WorkShopItem(){
    return(
        <div className="workshop-item">
            <div className="workshop-item-img">
                <img src={img}/>
            </div>
            <div className="workshop-item-content">
                <div className="workshop-heading">
                Web Components Workshop:Building Reusable JavaScript Web Components
                </div>
                <div className="presenter-name">
                    Gil Fink, sparXys
                </div>
            </div>
        </div>
    )
}