import React from "react";
import Grid from "@material-ui/core/Grid";

export default function ConfirmationItem(props){
    return(

        <Grid item xs={12} md={6} >
            <span className="detail">{props.name} : </span>{props.name!=="Image"?<span className="value">{props.value}</span>:<img className={"confirmation-img"} src={URL.createObjectURL(props.value)}/>}
        </Grid>
    )
}