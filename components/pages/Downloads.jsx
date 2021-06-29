import React from "react";
import PageTitleWrap from "../PageTitleWrap";
import "../styles/Downloads.css"
import DownloadItem from "../DownloadItem";
import {useFetch} from "../useFetch";

export default function Downloads(){

    const url = "https://api.icaf.site/api/v1/templates";
    const {data} = useFetch(url);

    return(
        <div>
            <PageTitleWrap title={"Downloads"}/>
            <div className={"download-items"}>
                {
                    data &&
                    data.map(d=>{
                        return <DownloadItem
                            key={d._id}
                            name={d.name}
                            url={`${url}/file/${d.file}`}
                            file={d.file}
                        />
                    })
                }
            </div>
        </div>
    )
}