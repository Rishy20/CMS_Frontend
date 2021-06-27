import React from "react";
import './SubHero.css'
import Grid from "@material-ui/core/Grid";
const about = "ICAF is an academic  conference organized by SLIIT, where industry researchers will present their findings and implementations of different programming languages including Java, JavaScript, Python etc."
function SubHero({data,date}){
    const location = data.location ? data.location.split(","):[];
    return(
        <div className="sub-hero-container">
            <Grid container spacing={3} justify="center">

                <Grid item md={4} className="hero-grid">
                    <div className="sub-hero-heading">
                        About the Event
                    </div>
                    <div className="sub-hero-description">
                        {data.shortDescription}
                    </div>
                </Grid>
                <Grid item md={4} className="hero-grid">
                    <div className="sub-hero-heading">
                        WHERE
                    </div>
                    <div className="sub-hero-description">

                        {location[0]}, <br/>
                        {location[1]}, <br/>
                        {location[2]}
                    </div>
                </Grid>
                <Grid item md={4} className="hero-grid">
                    <div className="sub-hero-heading">
                        WHEN
                    </div>
                    <div className="sub-hero-description">
                        {date}, <br/>
                        from {data.startTime} to {data.endTime}
                    </div>
                </Grid>
            </Grid>
        </div>
        )

}
export default SubHero