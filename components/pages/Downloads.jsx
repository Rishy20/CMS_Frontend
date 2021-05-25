import React from "react";
import Header from "../Header";
import PageTitleWrap from "../PageTitleWrap";
import "../css/Downloads.css"
import DownloadItem from "../DownloadItem";
export default function Downloads(){
    return(
        <div>
            <Header/>
            <PageTitleWrap title={"Downloads"}/>
            <div className={"download-items"}>
                <DownloadItem/>
                <DownloadItem/>
                <DownloadItem/>
            </div>
        </div>
    )
}