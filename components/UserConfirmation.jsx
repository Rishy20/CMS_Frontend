import React from "react";
import PageTitle from "./PageTitle";
import "./styles/Confirmation.css"
import Grid from "@material-ui/core/Grid";
import ConfirmationItem from "./ConfirmationItem";
import Button from "./Button";

//Form Submit Url
const url = "https://api.icaf.site/api/v1/researchers";
function UserConfirmation(props){

    const {details,submitForm} = props;
    const confirmationItems = props.confirmationItems;

    return(
        <div className="confirmation">
            <PageTitle title="CONFIRMATION"/>
            <div className="confirmation-body">
                <Grid container spacing={2}  justify="space-around">
                    {
                        confirmationItems.map(ci=>{
                            return <ConfirmationItem name={ci.name} value={details[ci.value]} key={ci.name}/>
                        })
                    }
                    <Grid item xs={12} md={6} >
                    </Grid>
                </Grid>
            </div>
            <div className="confirmation-btn">
                <Button btnStyle="btn-register" name="Confirm" type={"submit"} onclick={submitForm} />
                <Button btnStyle="btn-cancel" name="Cancel" type={"submit"} />
            </div>
        </div>
    )
}
export default UserConfirmation;