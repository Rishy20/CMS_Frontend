import React from "react";
import Grid from "@material-ui/core/Grid";

export default function ConfirmationItem(props){
    return(
        <Grid item xs={12} md={6} >
            <span className="detail">{props.name}</span>  : <span className="value">{props.value}</span>
        </Grid>
    )
}