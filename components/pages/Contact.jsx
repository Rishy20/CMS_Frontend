import React from "react";
import PageTitleWrap from "../PageTitleWrap";
import "../styles/Contact.css"
export default function Contact(){

    return(
        <div>
            <PageTitleWrap title={"Contact Us"}/>
            <div className={"contact-body"}>
                <div className={"contact-item"}>
                    <div className={"contact-item-heading"}>
                        Address
                    </div>
                    <div className={"contact-item-body"}>
                        SLIIT, New Kandy Road, Malabe, Sri Lanka
                    </div>
                </div>
                <div className={"contact-item"}>
                    <div className={"contact-item-heading"}>
                        Contact Number
                    </div>
                    <div className={"contact-item-body"}>
                        +94 11 7544806
                    </div>
                </div>
                <div className={"contact-item"}>
                    <div className={"contact-item-heading"}>
                        Email
                    </div>
                    <div className={"contact-item-body"}>
                        info@icaf.site
                    </div>
                </div>
            </div>
        </div>
    )
}