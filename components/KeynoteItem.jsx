import React from "react";


export default function KeynoteItem(props){

    return(
        <div className={"keynote-item-body"}>
            <div className={"keynote-speaker"}>
                <img className={"keynote-img"} src={`https://icaf.site/api/v1/keynotes/image/${props.img}`}/>
                <div className={"keynote-speaker-name"}>
                    {props.name}
                </div>
                <div className={"keynote-speaker-profession"}>
                    {props.job}, {props.company}
                </div>
            </div>
            <div className={"keynote-speaker-details"}>
                {props.bio}
            </div>
        </div>
    )
}