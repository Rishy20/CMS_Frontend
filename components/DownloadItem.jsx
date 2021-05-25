import React from "react";
import Button from "./Button";
import ppt from 'url:../public/images/powerpoint.png';
export default function DownloadItem(){
    return(
        <div className={"download-item"}>
            <div className={"file-icon"}>
                <img src={ppt}/>
            </div>
            <div className={"file-detail-container"}>
                <div className={"file-name"}>
                    Research Paper Template
                </div>
                <div className={"download-button"}>
                    <Button name={"Download"} btnStyle={"btn-download"}/>
                </div>
            </div>
        </div>
    )
}
