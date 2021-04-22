import React from "react";
import HeaderItem from "./HeaderItem";
import "./Header.css"

const WEBSITE = "ICAF";
function Header(){
    return(
        <div className="header">
            <span className="header-title">{WEBSITE}</span>
            <span className="header-links">
                <HeaderItem text="Home"/>
                <HeaderItem text="Schedule"/>
                <HeaderItem text="Speakers"/>
                <HeaderItem text="Downloads"/>
            </span>
            <span className="login-links">
                <HeaderItem text="Login"/>
                <HeaderItem text="Register"/>
            </span>

        </div>
    )
}
export default Header;