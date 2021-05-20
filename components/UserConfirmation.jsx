import React from "react";
import PageTitle from "./PageTitle";
import "./Confirmation.css"
import Grid from "@material-ui/core/Grid";

import Form from "./Form";
import ConfirmationItem from "./ConfirmationItem";
import Button from "./Button";



//Buttons to be displayed in the form
const buttons = [
    {
        name:"Confirm",
        style:"btn-register",
        type:"Submit"
    },
    {
        name:"Cancel",
        style:"btn-cancel",
    },
]

//Form Submit Url
const url = "http://localhost:3000/api/v1/researchers";
function UserConfirmation(props){

    const {details,submitForm} = props;


    //Details to be displayed in confirmation section
    const confirmationItems=[
        {
            name:"User Type",
            value:"usertype"
        },
        {
            name: "Image",
            value: "img"
        },
        {
            name:"First name",
            value:"fname"
        },
        {
            name:"Last name",
            value:"lname"
        },
        {
            name:"Email",
            value:"email"
        },
        {
            name:"Contact",
            value:"contact"
        },
        {
            name:"Gender",
            value:"gender"
        },
        {
            name:"Country",
            value:"country"
        },
        {
            name:"Job Title",
            value:"jobTitle"
        },
        {
            name:"Company",
            value:"company"
        },
        {
            name: "File Name",
            value: "documentName"
        }
    ]
    console.log(details)
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

