import React,{useState} from "react";
import Header from "../Header";
import "../styles/Schedule.css"
import PageTitleWrap from "../PageTitleWrap";
import Accordion from "../Accordion";
import ScheduleItem from "../ScheduleItem";
import {useFetch} from "../useFetch";
import {makeStyles, Tab, Tabs} from "@material-ui/core";
import TabPanel from "../TabPanel";
import {ScheduleDay} from "../ScheduleDay";
import moment from "moment";

const useStyles = makeStyles({

    tabSelected: {
        color: "var(--blue)",
    },
    tabIndicator: {
        backgroundColor: "#E2BC7F",
        width: "8px"
    },

})
const classes={
    styleTab:{
        backgroundColor:"var(--lightGrey)",
        padding:"20px 60px",

    },
    tabLabel:{
        fontWeight:600,
        fontSize:17
    }
}
export default function Schedule({info}){
    const styles = useStyles();
    const [tab, setTab] = useState(0);

    // Handle changing tab
    const changeTab = (event, tab) => setTab(tab);

    if(info.length > 0) {
        const startTime = info.length > 0 && info[0].startTime;
        const endTime = info.length > 0 && info[0].endTime;
        const startDate = info.length > 0 && moment(info[0].startDate, "MM/DD/YYYY");
        const endDate = info.length > 0 && moment(info[0].endDate, "MM/DD/YYYY");
        const location = info.length > 0 && info[0].location;
        const difference = info.length > 0 ? moment.duration(endDate.diff(startDate)).asDays() : 0;
        let days = [];
        let dates = [startDate.format("DD/MM/YYYY")];
        for (let i = 1; i <= difference; i++) {
            days.push(i);
            if (i != difference) {
                dates.push(moment(startDate, "MM/DD/YYYY").add('d', i).format("DD/MM/YYYY"))
            }
        }


        return (
            <div className={"schedule"}>

                <PageTitleWrap title={"Schedule"}/>
                <div className={"schedule-body"}>

                    {/* Tabs */}
                    <Tabs
                        value={tab}
                        onChange={changeTab}
                        orientation="Horizontal"
                        classes={{indicator: styles.tabIndicator}}
                        style={{marginRight: 30}}
                        centered
                        fullWidth={false}
                    >
                        {
                            days.length > 0 &&
                            days.map(day => {
                                return <Tab
                                    label={<span style={classes.tabLabel}>Day {day}</span>}
                                    classes={{selected: styles.tabSelected}}
                                    style={classes.styleTab}
                                    disableRipple
                                />
                            })
                        }

                    </Tabs>
                    {
                        days.length > 0 &&
                        days.map((day, key) => {
                            return <TabPanel value={tab} index={day - 1}>
                                <ScheduleDay
                                    day={day}
                                    date={dates[key]}
                                    startTime={startTime}
                                    endTime={endTime}
                                    location={location}/>
                            </TabPanel>
                        })
                    }


                </div>
            </div>
        )
    }else{
        return(
            <>
                <PageTitleWrap title={"Schedule"}/>
            </>
        );
    }
}