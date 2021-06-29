import React, {useEffect, useState} from 'react';
import Hero from "./Hero";
import "../styles/Home.css"
import RegisterTimer from "../RegisterTimer";
import EventCount from "./EventCount";
import {Speaker} from "@material-ui/icons";
import Speakers from "./Speakers";
import Workshops from "./Workshops";
import Tracks from "./Tracks";
import Sponsor from "./Sponsor";
import PaperPresentations from "./PaperPresentations"


//Home Page
function Home({info}){

    return (
        <div className={"home"}>
            <Hero data={info}/>
            <div className="home-body">
                <div className={"limit-width"}>
                <h2 className="container-heading">The biggest Application Framework Conference in Sri Lanka</h2>
                <div className="intro-body">
                    {info.length>0 && info[0].description}
                </div>
                <EventCount info={info}/>
                <RegisterTimer start={info.length>0 && info[0].startDate}/>
                </div>
                <Speakers/>
                <div className={"limit-width"}>
                    <PaperPresentations/>
                    <Tracks data={info}/>
                    <Workshops/>
                    <Sponsor/>
                </div>

            </div>
        </div>
    )
}

export default Home;