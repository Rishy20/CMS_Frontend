import React from "react";
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

export default function CallForProposals(){
    const {data} = useFetch("https://api.icaf.site/api/v1/pages/callforproposals")
    return(
        <div>

            <PageTitleWrap title={"Call For Proposals"}/>
            <div className={"call-for-proposal-body"} style={style}>
                <div className={"call-for-proposal-content"}>
                    {data.hasOwnProperty("html") && Parser(data.html)}
                </div>
                <div style={btnContainer}>
                    <Link to = "/workshops/register"><Button name="Register Now" btnStyle={"btn-register-call"}/></Link>
                </div>
            </div>
        </div>
    )
}