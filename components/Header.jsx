import React, {useState} from "react";
import HeaderItem from "./HeaderItem";
import "./css/Header.css"
import {Link} from "react-router-dom";
import Dropdown from "./Dropdown";
const WEBSITE = "ICAF";
import { useLocation } from 'react-router-dom'
const authorMenu=[
    {
        title:"All Authors",
        path:"/authors"
    },
    {
        title:"Call for Papers",
        path:"/authors/callforpaper"
    }
]
const workshopMenu=[
    {
        title:"All Workshops",
        path:"/workshops"
    },
    {
        title:"Call for Proposals",
        path:"/workshops/callforproposal"
    }
]

function Header({loginStatus,logout}){

    const [dropDown,setDropDown] = useState({authors:false,workshops:false});
    const onMouseEnter = (link) => {
        setDropDown({...dropDown,[link]:true})
    };

    const onMouseLeave = (link) => {
        setDropDown({...dropDown,[link]:false})
    };
    const location = useLocation();

    return(
        <div className={`header ${location.pathname==="/"?"transparent":null}`}>
            <Link to="/"><span className="header-title">{WEBSITE}</span></Link>
            <span className="header-links">

                <li><Link to="/"><HeaderItem text="Home"/></Link></li>
                <li><Link to="/schedule"><HeaderItem text="Schedule"/></Link></li>
                <li><Link to="/keynotes"><HeaderItem text="Keynotes"/></Link></li>

                <li onMouseEnter={()=>{onMouseEnter("authors")}} onMouseLeave={()=>{onMouseLeave("authors")}}>
                    <Link to="/authors" >
                        <HeaderItem text="Authors"/>
                        {dropDown.authors && <Dropdown MenuItems={authorMenu}/> }
                    </Link>
                </li>

                 <li onMouseEnter={()=>{onMouseEnter("workshops")}} onMouseLeave={()=>{onMouseLeave("workshops")}}>
                    <Link  to="/workshops" >
                        <HeaderItem text="Workshops"/>
                        {dropDown.workshops && <Dropdown MenuItems={workshopMenu}/> }
                    </Link>
                </li>
                <li><Link to="/downloads"><HeaderItem text="Downloads"/></Link></li>
                <li><Link to="/contact"><HeaderItem text="Contact Us"/></Link></li>

            </span>
            <span className="login-links">
                {loginStatus?(
                    <>
                    <Link to="/login"><HeaderItem text="My Profile"/></Link>
                    <HeaderItem text="Logout" onClick={logout}/>
                    </>
                ):
                    <>
                    <Link to="/login"><HeaderItem text="Login"/></Link>
                    <Link to="/register"><HeaderItem text="Register"/></Link>
                    </>
                }

            </span>

        </div>
    )
}
export default Header;