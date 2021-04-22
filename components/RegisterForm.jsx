import React from "react";
import "./RegisterForm.css"
import Grid from "@material-ui/core/Grid";
import Input from "./Input";
import Button from "./Button";
import useForm from "./useForm";
import validate from "./validateInfo";
import Radio from "./Radio";
import Select from "./Select"
import PageTitle from "./PageTitle";


//Form Submit Url
const url = "http://localhost:3000/api/v1/researchers";

//Inputs stored as an array so they can be mapped to Input component
const inputs=[
    {
        label:"First Name",
        type:"text",
        name:"fname"
    },
    {
        label:"Last Name",
        type:"text",
        name:"lname"
    },
    {
        label:"Email",
        type:"email",
        name:"email"
    },
    {
        label:"Contact",
        type:"tel",
        name:"contact"
    },
    {
        label:"Gender",
        type:"select",
        name:"gender",
        values:["Male","Female","Other"]
    },
    {
        label:"Age",
        type:"text",
        name:"age",
        maxLength:3
    },
    {
        label:"Address",
        type:"text",
        name:"address"
    },
    {
        label:"NIC",
        type:"text",
        name:"nic",
        maxLength: 12
    },
]

function RegisterForm({detailsEntered}){

    //Input box names used in the form so that they can be sent to useForm hook to maintain the state
    const val={
        fname:'',
        lname:'',
        gender:'',
        email:'',
        contact:'',
        address:'',
        age:'',
        nic:'',
    }

    //Import methods from useForm hook
    const {handleChange, handleSubmit, values, errors } = useForm(detailsEntered,validate,val);


    return(

        <div className="register-form">
            <PageTitle title="REGISTRATION INFORMATION"/>
            <div className="register-body">

                <form onSubmit={handleSubmit} >
                    <Grid container spacing={2}  justify="center">
                        {
                            //Map input array to input components
                            inputs.map(input=>{
                                if(input.type==="select"){
                                    return <Grid item xs={12} md={6} key={input.name}>
                                        <Select name={input.name} label={input.label} values={input.values} value={values[input.name]} onChange={handleChange}
                                                error={errors[input.name] ? errors[input.name] : ''} />
                                    </Grid>
                                }else {
                                    return <Grid item xs={12} md={6} key={input.name}>
                                        <Input label={input.label} value={values[input.name]} type={input.type}
                                               id={input.name} name={input.name} onChange={handleChange}
                                               error={errors[input.name] ? errors[input.name] : ''} maxLength={input.maxLength}/>
                                    </Grid>
                                }
                            })
                        }
                    </Grid>
                    {/*Register Button*/}
                    <div className="register-submit">
                        <Button btnStyle="btn-next" name="Next" type="submit" />
                        <Button btnStyle="btn-cancel" name="Cancel"/>
                    </div>

                </form>
            </div>
        </div>
        )


}
export default RegisterForm