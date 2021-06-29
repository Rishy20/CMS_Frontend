import React from "react";
import Header from "../Header";
import PageTitleWrap from "../PageTitleWrap";

import Parser from 'html-react-parser';
import Button from "../Button";
import {Link} from "react-router-dom";
import {useFetch} from "../useFetch";

const style={
    width:1200,
    margin:"50px auto",
    lineHeight:2
}
const btnContainer={
    paddingTop:40,
    textAlign:"center"
}

export default function CallForPapers(){

    const {data} = useFetch("https://api.icaf.site/api/v1/pages/callforpapers")

    return(
        <div>

            <PageTitleWrap title={"Call For Papers"}/>
            <div className={"call-for-paper-body"} style={style}>
                <div className={"call-for-paper-content"}>
                    {data.hasOwnProperty("html") && Parser(data.html)}
                </div>
                <div style={btnContainer}>
                 <Link to = "/authors/register"><Button name="Register Now" btnStyle={"btn-register-call"}/></Link>
                </div>
            </div>
        </div>
    )
}