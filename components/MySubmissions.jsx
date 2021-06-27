import React from "react";

import "./styles/Downloads.css"
import DownloadItem from "./DownloadItem";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        fontSize: "1.3em",
        marginInlineStart: "8px"
    }
});
export default function MySubmissions({user,url}){
    const styles = useStyles();
    return(
        <div>
            {/* Form header */}
            <Typography
                variant="body1"
                classes={{body1: styles.title}}
            >
                {"My Submissions"}
            </Typography>
            <hr className="divider" />
            <div className={"submission-items"}>
                <DownloadItem name={user.paper && user.paper.split("-")[1]} url={`${url}paper/${user.paper}`} file={user.paper} status={user.status}/>
            </div>
        </div>
    )
}