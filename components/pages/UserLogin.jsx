import React, {useState} from "react";
import "./UserLogin.css"
import PageTitle from "../PageTitle";
import Form from "../Form";

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
    fname:'',
    lname:'',
    gender:'',
    email:'',
    contact:'',
    address:'',
    age:'',
    nic:'',
}

function UserLogin(){
    const[isSubmitted,setIsSubmitted] = useState(false);
    function submitForm(){
        setIsSubmitted(true);
        console.log("Form Submitted")
    }
    return(
        <div className="user-register">
            <div className="register-img">
            </div>
            <div className="user-register-body">
                <PageTitle title="REGISTRATION INFORMATION"/>
                    <Form inputs={inputs} names={names} callback={submitForm} btns={buttons} url={url}/>
            </div>
        </div>
    )
}
export default UserLogin;