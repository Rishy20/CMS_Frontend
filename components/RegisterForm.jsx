import React from "react";
import "./styles/RegisterForm.css";
import PageTitle from "./PageTitle";
import Form from "./Form";


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
        label:"City",
        type:"text",
        name:"city"
    },
    {
        label:"Country",
        type:"text",
        name:"country"
    }
]
//Buttons to be displayed in the form
const buttons = [
    {
        name:"Next",
        style:"btn-next",
        type:"Submit"
    }
]
//Input box names used in the form so that they can be sent to useForm hook to maintain the state
const names={
    fname:'',
    lname:'',
    email:'',
    contact:'',
    city:'',
    country:''
}

function RegisterForm({detailsEntered,values}){


    if(Object.keys(values).length > 0){
        Object.keys(values).map(v=>{
            names[v]= values[v];
        })
    }else{
        Object.keys(names).map(n=>{
            names[n]=''
        })
    }

    return(

        <div className="register-form">
            <PageTitle title="REGISTRATION INFORMATION"/>
            <div className="register-body">

                <Form inputs={inputs} names={names} callback={detailsEntered} btns={buttons}/>

            </div>
        </div>
        )


}
export default RegisterForm