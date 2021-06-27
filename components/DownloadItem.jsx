import React from "react";
import Button from "./Button";
import ppt from 'url:../public/images/powerpoint.png';
import pdf from 'url:../public/images/pdf.png';
import word from 'url:../public/images/word.png';
export default function DownloadItem(props){
    const downloadFile = ()=>{
        window.open(props.url, '_blank');
    }
    const fType = props.file && props.file.split(".")[1];

    let img;
    if(fType==="pdf"){
        img =  pdf
    }else if (["pptx","ppt"].includes(fType)){
        img =  ppt
    }else if (["doc","docx"].includes(fType)){
        img = word
    }

    return(
        <div className={"download-item"}>
            <div className={"file-icon"}>
                <img src={img} className={img===pdf?"pdf":""}/>
            </div>
            <div className={"file-detail-container"}>
                <div className={"file-name"}>
                    {props.name}
                </div>
                {
                    props.hasOwnProperty("status") &&
                        <div className={`approval-status ${props.status}`}>
                            Status : {props.status}
                        </div>
                }
                <div className={"download-button"}>
                    <Button name={"Download"} btnStyle={"btn-download"} onclick={downloadFile} />
                </div>
            </div>
        </div>
    )
}
