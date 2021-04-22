import React from "react";
import './SubHero.css'
import Grid from "@material-ui/core/Grid";
const about = "ICAF is an academic  conference organized by SLIIT, where industry researchers will present their findings and implementations of different programming languages including Java, JavaScript, Python etc."
function SubHero(){
    return(
        <div className="sub-hero-container">
            <Grid container spacing={3} justify="center">

                <Grid item md={4} className="hero-grid">
                    <div className="sub-hero-heading">
                        About the Event
                    </div>
                    <div className="sub-hero-description">
                        {about}
                    </div>
                </Grid>
                <Grid item md={4} className="hero-grid">
                    <div className="sub-hero-heading">
                        WHERE
                    </div>
                    <div className="sub-hero-description">
                        Main Auditorium, <br/>
                        Sri Lanka Institute of Information Technology, <br/>
                        Malabe
                    </div>
                </Grid>
                <Grid item md={4} className="hero-grid">
                    <div className="sub-hero-heading">
                        WHEN
                    </div>
                    <div className="sub-hero-description">
                        Sunday 28th June, <br/>
                        from 8:00 am to 4:00 pm
                    </div>
                </Grid>
            </Grid>
        </div>
        )

}
export default SubHero