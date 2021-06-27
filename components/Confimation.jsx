import React from "react";
import PageTitle from "./PageTitle";
import "./styles/Confirmation.css"
import Grid from "@material-ui/core/Grid";

import Form from "./Form";
import ConfirmationItem from "./ConfirmationItem";

const inputs=[
    {
        label:"Card holder's name",
        type:"text",
        name:"chname"
    },
    {
        label:"Card Number",
        type:"text",
        name:"cnum",
        maxLength:19
    },
    {
        label:"Expiry Date",
        type:"text",
        name:"expiry",
        placeholder:"mm/yy"
    },
    {
        label:"CVC",
        type:"text",
        name:"cvc",
        maxLength: 3
    }
]


//Details to be displayed in confirmation section
const confirmationItems=[
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
        name:"City",
        value:"city"
    },
    {
        name:"Country",
        value:"country"
    },
    {
        name:"Ticket",
        value:"ticket"
    },
]
//Form Submit Url
const url = "http://localhost:3000/api/v1/attendees";
function Confirmation(props){

    const {details,submitForm,back} = props;
    const names={
        ...details,
        chname:'',
        cnum:'',
        expiry:'',
        cvc:''
    }

    //Buttons to be displayed in the form
    const buttons = [
        {
            name:"Register",
            style:"btn-register",
            type:"Submit"
        },
        {
            name:"Cancel",
            style:"btn-cancel",
            onclick:back
        },
    ]


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

                <div>
                    <PageTitle title="PAYMENT INFORMATION"/>
                    <div className="payment-body">
                        <Form inputs={inputs} names={names} callback={submitForm} btns={buttons} url={url}/>
                    </div>
                </div>

        </div>
    )
}
export default Confirmation;

