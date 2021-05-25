import React from "react";
import "./css/Footer.css"

export default function Footer(){

    return(
        <div className="footer">
            <div className={"footer-heading-container"}>
                <div className={"footer-heading"}>ICAF</div>
                <div className={"footer-sub-heading"}>
                    International Conference on<br/> Application Frameworks
                </div>
            </div>
            <div className={"footer-link-container"}>
                <span className={"footer-link"}>Home</span>
                <span className={"footer-link"}>Schedule</span>
                <span className={"footer-link"}>Speakers</span>
                <span className={"footer-link"}>Workshops</span>
                <span className={"footer-link"}>Contact Us</span>
            </div>
            <div className={'footer-social-icons'}>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
            </div>

        </div>
    )
}