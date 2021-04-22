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
    marginTop:50
}
function PaymentForm(props){

    const {handleChange,errors,values} = props;
    return(
        <div>
            <PageTitle title="PAYMENT INFORMATION"/>
            <div style={style}>
                <Form inputs={inputs} names={values} callback={detailsEntered} btns={buttons}/>

            </div>
        </div>
    )
}

export default PaymentForm;