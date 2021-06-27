import React from "react";
import Header from "../Header";
import PageTitleWrap from "../PageTitleWrap";
import "../styles/Downloads.css"
import DownloadItem from "../DownloadItem";
import {useFetch} from "../useFetch";
import TrackItem from "../Home/TrackItem";
export default function Downloads(){

    const url = "http://localhost:3000/api/v1/templates";
    const {data} = useFetch(url);

    return(
        <div>

            <PageTitleWrap title={"Downloads"}/>
            <div className={"download-items"}>
                {
                    data &&
                    data.map(d=>{
                        return <DownloadItem name={d.name} url={`${url}/file/${d.file}`} file={d.file}/>
                    })
                }

            </div>
        </div>
    )
}