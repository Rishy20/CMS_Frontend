import React from "react";
import PageTitle from "./PageTitle";
import "./Confirmation.css"
import Grid from "@material-ui/core/Grid";
import PaymentForm from "./PaymentForm";
import Button from "./Button";
import useForm from "./useForm";
import validate from "./validateInfo";

const inputs=[
    {
        label:"Card holder's name",
        type:"text",
        name:"chname"
    },
    {
        label:"Card Number",
        type:"text",
        name:"cnum"
    },
    {
        label:"Expiry Date",
        type:"text",
        name:"expiry"
    },
    {
        label:"CVC",
        type:"text",
        name:"cvc"
    }
]
function Confirmation(props){

    const {details,submitForm} = props;
    const val={
        ...details,
        chname:'',
        cnum:'',
        expiry:'',
        cvc:''
    }
    //Import methods from useForm hook
    const {handleChange, handleSubmit, values, errors } = useForm(submitForm,validate,val,'',true);
    return(
        <div className="confirmation">
            <PageTitle title="CONFIRMATION"/>
            <div className="confirmation-body">
                <Grid container spacing={2}  justify="space-around">
                    <Grid item xs={12} md={6} >
                        <span className="detail">First Name</span>  : <span className="value">{props.details.fname}</span>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <span className="detail">Last Name</span>  : <span className="value">{props.details.lname}</span>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <span className="detail">Email</span>  : <span className="value">{props.details.email}</span>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <span className="detail">Contact</span>  : <span className="value">{props.details.contact}</span>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <span className="detail">Age</span>  : <span className="value">{props.details.age}</span>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <span className="detail">Gender</span>  : <span className="value">{props.details.gender}</span>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <span className="detail">NIC</span>  : <span className="value">{props.details.nic}</span>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <span className="detail">Address</span>  : <span className="value">{props.details.address}</span>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <span className="detail">Ticket</span>  : <span className="value">{props.details.ticket}</span>
                    </Grid>
                    <Grid item xs={12} md={6} >
                    </Grid>
                </Grid>

            </div>
            <form onSubmit={handleSubmit} noValidate>
               <PaymentForm handleChange={handleChange} errors={errors} values={values}/>

            {/*Register Button*/}
            <div className="confirmation-btn">
                <Button btnStyle="btn-save" name="Register" type="submit" />
                <Button btnStyle="btn-cancel" name="Cancel"/>
            </div>
            </form>

        </div>
    )
}
export default Confirmation;

