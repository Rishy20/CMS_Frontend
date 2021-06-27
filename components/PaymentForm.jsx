import React from "react";
import PageTitle from "./PageTitle";
import Grid from "@material-ui/core/Grid";
import Input from "./Input";
import Form from "./Form";

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

const style={
    body:{
        width:1200,
        margin:"50px auto"
    },
    form:{
        marginTop:20
    },
    total: {
        fontWeight:600,
        marginTop: 20,
        fontSize:20
    }

}
function PaymentForm(props){

    const names={
        chname:'',
        cnum:'',
        expiry:'',
        cvc:'',
        total:props.total
    }
    //Buttons to be displayed in the form
    const buttons = [
        {
            name:"Pay",
            style:"btn-register",
            type:"Submit"
        },
        {
            name:"Cancel",
            style:"btn-cancel",

        },
    ]


    return(
        <div>

            <div style={style.body}>
                <PageTitle title="PAYMENT INFORMATION"/>

                <div style={style.total}>
                   Total : Rs.{props.total.toFixed(2)}
                </div>
                <div style={style.form}>
                    <Form inputs={inputs} names={names} callback={props.callback} btns={buttons}/>
                </div>
                {props.error?<div className="login-error">{props.error}</div>:null}
            </div>
        </div>
    )
}

export default PaymentForm;