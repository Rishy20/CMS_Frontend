import React from "react";
import '../styles/Hero.css'
import Button from "../Button";
import SubHero from "../SubHero"
import {Link} from "react-router-dom";

const subheading = "28th June, Sri Lanka Institute of Information Technology, Malabe"
function Hero({data}){
    const item = data.length>0?data[0]:{}
    const startDate = item.hasOwnProperty("startDate")&&item.startDate.split("/")
    let date = new Date(startDate[2], startDate[0]-1, startDate[1]);
    let startMonth = date.toLocaleString('default', { month: 'long' });
    const endDate = item.hasOwnProperty("endDate")&&item.endDate.split("/")
    date = new Date(endDate[2], endDate[0]-1, endDate[1]);
    let endMonth = date.toLocaleString('default', { month: 'long' });
    const nth = function(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }
    const eventDate = `${startDate[1]}${nth(startDate[1])} ${startMonth} - ${endDate[1]}${nth(endDate[1])} ${endMonth}`;
    return(
        <div className="hero-container">
            <h1>{item.conferenceName}</h1>
            <h3 className="sub-heading">{`${eventDate}, Sri Lanka Institute of Information Technology, Malabe`}</h3>
            <Link to={"/register"}> <Button name="Register Now" btnStyle="btn-hero" /> </Link>
            <SubHero data={item} date={eventDate}/>
        </div>
    )
}
export default Hero;