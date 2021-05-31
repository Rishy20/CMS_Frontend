import React from 'react';
import Header from "../Header";
import Hero from "./Hero";
import "../css/Home.css"
import AttendeeRegister from "../pages/AttendeeRegister";
import ResearcherRegister from "../pages/ResearcherRegister";
import Accordion from "../Accordion";
import RegisterTimer from "../RegisterTimer";
import EventCount from "./EventCount";
import {Speaker} from "@material-ui/icons";
import Speakers from "./Speakers";
import Workshops from "./Workshops";
import Tracks from "./Tracks";
import Sponsor from "./Sponsor";

//Home Page
function Home(){


    return (
        <div className={"home"}>
            <Hero/>
            <div className="home-body">
                <div className={"limit-width"}>
                <h2 className="container-heading">The biggest Application Framework Conference in Sri Lanka</h2>
                <div className="intro-body">
                    At the new hybrid training events for JavaScript, Angular, React, HTML & CSS, a selection of first-class experts will give you in-depth information on how to optimally plan and successfully implement JavaScript and HTML-based applications, what strengths and weaknesses the various technologies have or how you do when choosing a suitable architecture. The 4-in-1 package allows you to book one event and attend four at the same time.
                    For the first time, you can take part in the video workshops either on site or digitally . You have the choice! Are you new to JavaScript or HTML? Then our Fundamentals Day on October 4th offers you three full-day workshops on fundamental topics that you as a developer encounter when working with JavaScript or HTML - the ideal preparation for the following workshop days!
                </div>
                <EventCount/>
                <RegisterTimer/>
                </div>
                <Speakers/>
                <div className={"limit-width"}>
                <Workshops/>
                <Tracks/>
                <Sponsor/>
                </div>

            </div>
        </div>
    )
}

export default Home;