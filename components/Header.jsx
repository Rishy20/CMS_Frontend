import React from "react";
import HeaderItem from "./HeaderItem";
import "./css/Header.css"

const WEBSITE = "ICAF";
function Header(){
    return(
        <div className="header">
            <span className="header-title">{WEBSITE}</span>
            <span className="header-links">
                <HeaderItem text="Home"/>
                <HeaderItem text="Schedule"/>
                <HeaderItem text="Keynotes"/>
                <HeaderItem text="Authors"/>
                <HeaderItem text="Workshops"/>
                <HeaderItem text="Downloads"/>
                <HeaderItem text="Contact Us"/>
            </span>
            <span className="login-links">
                <HeaderItem text="Login"/>
                <HeaderItem text="Register"/>
            </span>

        </div>
    )
}
export default Header;