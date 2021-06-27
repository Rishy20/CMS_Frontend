import React, {useState} from "react";
import HeaderItem from "./HeaderItem";
import "./styles/Header.css"
import {Link} from "react-router-dom";
import Dropdown from "./Dropdown";
const WEBSITE = "ICAF";
import { useLocation } from 'react-router-dom'
import {Badge, IconButton, makeStyles} from "@material-ui/core";
import {Notifications} from "@material-ui/icons";
import Notification from "./Notifications";
const authorMenu=[
    {
        title:"All Authors",
        path:"/authors"
    },
    {
        title:"Call for Papers",
        path:"/authors/callforpaper"
    },
    {
        title:"Research Paper Presentations",
        path:"/authors/presentations"
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
// Styles for Material UI components
const useStyles = makeStyles({
    iconButton: {
        padding: "8px",
        marginInline: "4px",
        color:"white"
    }
})
function Header({loginStatus,logout,...props}){

    const styles = useStyles();
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
                        <Notification/>

                    <Link to="/profile"><HeaderItem text="My Profile"/></Link>
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