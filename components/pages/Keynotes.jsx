import React from "react";

import "../styles/Keynotes.css"
import PageTitleWrap from "../PageTitleWrap";
import KeynoteItem from "../KeynoteItem";
import {useFetch} from "../useFetch";

export default function Keynotes(props){
    const {data} = useFetch("https://api.icaf.site/api/v1/keynotes");
    return(
        <div>
            <PageTitleWrap title={"Keynotes"}/>
        <div className={"keynote"}>
            {
                data.length > 0 && data.map(keynote=>{
                    return <KeynoteItem
                        key={keynote._id}
                        name = {keynote.fname + " " + keynote.lname}
                        job={keynote.jobTitle}
                        company={keynote.company}
                        bio={keynote.bio}
                        img={keynote.img}
                    />
                })
            }
        </div>
        </div>
    )
}