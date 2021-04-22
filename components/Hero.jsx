import React from "react";
import './Hero.css'
import Button from "./Button";
import SubHero from "./SubHero"

const heading = "INTERNATIONAL CONFERENCE ON APPLICATION FRAMEWORKS"
const subheading = "28th June, Sri Lanka Institute of Information Technology, Malabe"
function Hero(){
    return(
        <div className="hero-container">
            <h1>{heading}</h1>
            <h3 className="sub-heading">{subheading}</h3>
            <Button name="Register Now" btnStyle="btn-hero" />
            <SubHero/>
        </div>
    )
}
export default Hero;