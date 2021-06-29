import React from "react";
import "./styles/Footer.css"
import {Link} from "react-router-dom";

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
                <Link to={"/"}> <span className={"footer-link"}>Home</span> </Link>
                <Link to={"/schedule"}> <span className={"footer-link"}>Schedule</span> </Link>
                <Link to={"/keynotes"}> <span className={"footer-link"}>Speakers</span> </Link>
                <Link to={"/workshops"}> <span className={"footer-link"}>Workshops</span> </Link>
                <Link to={"/contact"}><span className={"footer-link"}>Contact Us</span> </Link>
            </div>
            <div className={'footer-social-icons'}>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
            </div>

        </div>
    )
}