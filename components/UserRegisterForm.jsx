import React, {useState} from "react";
import "./css/RegisterForm.css";
import PageTitle from "./PageTitle";
import Form from "./Form";
import FileUpload from "./FileUpload";


//Form Submit Url
const url = "http://localhost:3000/api/v1/researchers";

//Inputs stored as an array so they can be mapped to Input component
const inputs=[
    {
        label:"Are you a ? ",
        type:"radio-full",
        name:"usertype",
        values:["Researcher","Workshop Presenter"]
    },
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
        label:"Password",
        type:"password",
        name:"password"
    },
    {
        label:"Confirm Password",
        type:"password",
        name:"confirmPassword"
    },
    {
        label:"Gender",
        type:"select",
        name:"gender",
        values:["Male","Female","Other"]
    },
    {
        label:"Country",
        type:"text",
        name:"country",
    },
    {
        label:"Job Title",
        type:"text",
        name:"jobTitle"
    },
    {
        label:"Company",
        type:"text",
        name:"company",
    },
    {
        label:"Upload your Profile Image",
        type: "image",
        name: "img"
    }
]
//Buttons to be displayed in the form
const buttons = [
    {
        name:"Next",
        style:"btn-next",
        type:"Submit"
    },
    {
        name:"Cancel",
        style:"btn-cancel",
    },
]
//Input box names used in the form so that they can be sent to useForm hook to maintain the state
const names={
    usertype:'',
    fname:'',
    lname:'',
    gender:'',
    email:'',
    contact:'',
    password:'',
    confirmPassword:'',
    country:'',
    jobTitle:'',
    company:'',
    img:'',
}

function UserRegisterForm({detailsEntered}){

    return(

        <div className="register-form">
            <PageTitle title="REGISTRATION INFORMATION"/>
            <div className="register-body">
                <Form inputs={inputs} names={names} callback={detailsEntered} btns={buttons}/>
            </div>
        </div>
    )


}
export default UserRegisterForm