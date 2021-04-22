import React from "react";
import PageTitle from "./PageTitle";
import Grid from "@material-ui/core/Grid";
import Input from "./Input";

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
                <Grid container spacing={2}  justify="center">
                    {
                        //Map input array to input components
                        inputs.map(input=>{

                            return <Grid item xs={12} md={6} key={input.name}>
                                <Input label={input.label} value={values[input.name]} type={input.type}
                                       id={input.name} name={input.name} onChange={handleChange} placeholder={input.placeholder}
                                       error={errors[input.name] ? errors[input.name] : ''} maxLength={input.maxLength}/>
                            </Grid>
                        })
                    }
                </Grid>

            </div>
        </div>
    )
}

export default PaymentForm;