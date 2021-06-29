import React from "react";
import PageTitle from "./PageTitle";
import "./styles/Confirmation.css"
import Grid from "@material-ui/core/Grid";

import Form from "./Form";
import ConfirmationItem from "./ConfirmationItem";
import PaymentForm from "./PaymentForm";

const style = {
    total: {
        fontWeight: 600,
        marginTop: 20,
        fontSize: 20,
        paddingBottom:15
    }
}
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
const url = "https://icaf.site/api/v1/attendees";
function Confirmation(props){

    const {details,submitForm,back} = props;
    console.log(details);
    const names={
        ...details,
        chname:'',
        cnum:'',
        expiry:'',
        cvc:''
    }
    function submit(data){
        submitForm(data);
    }

    //Buttons to be displayed in the form
    const buttons = [
        {
            name:"Register",
            style:"btn-register",
            type:"Submit"
        },
        {
            name:"Back",
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
                        <div style={style.total}>
                            Total : Rs.{parseInt(details.price).toFixed(2)}
                        </div>
                        <Form inputs={inputs} names={names} callback={submit} btns={buttons} />

                    </div>
                </div>

        </div>
    )
}
export default Confirmation;

