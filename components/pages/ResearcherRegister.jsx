import React from 'react';

import RegisterForm from "../RegisterForm";
import {useState} from "react";
import Progress from "../Progress";
import Confirmation from "../Confimation";
import UserRegisterForm from "../UserRegisterForm";
import Submission from "../Submission";
import axios from 'axios';
import UserConfirmation from "../UserConfirmation";
import Header from "../Header";
import PageTitleWrap from "../PageTitleWrap";
import Popup from "../Popup";

const url = "https://icaf.site/api/v1/researchers";


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
        label:"Country",
        type:"text",
        name:"country",
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
    fname:'',
    lname:'',
    email:'',
    contact:'',
    password:'',
    confirmPassword:'',
    country:'',
    jobTitle:'',
    company:'',
    bio:'',
    img:'',
}
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
        name: "Image",
        value: "img"
    },
    {
        name:"Contact",
        value:"contact"
    },
    {
        name:"Job Title",
        value:"jobTitle"
    },
    {
        name:"Company",
        value:"company"
    },
    {
        name:"Country",
        value:"country"
    },
    {
        name: "File Name",
        value: "documentName"
    }
]

//Attendee Register Page
function ResearcherRegister(){

    const[isSubmitted,setIsSubmitted] = useState(false);
    const[isDetailEntered, setIsDetailEntered] = useState(false);
    const[isFileSelected, setIsFileSelected] = useState(false);
    const[values,setValues] = useState();

    function submitForm(){

        // Create a FormData object and append the data
        const data = new FormData();
        data.append('value',JSON.stringify(values))
        data.append('img',values.img);
        data.append('paper',values.document);
        //Make a post request
        axios.post(url, data, { // receive two parameter endpoint url ,form data
        }).then(res => { // then print response status
            setIsSubmitted(true);
        })
    }
    function detailsEntered(val){
        setIsDetailEntered(true);
        setValues(val);
    }
    function setFile({file}){
        setIsFileSelected(true);
        setValues({...values,document:file,documentName:file.name})


    }
    return (
        <div>

            <PageTitleWrap title={"Register"}/>
            {isSubmitted && <Popup message={"You have successfully submitted your research paper. You will receive a notification once the research paper is reviewed."} redirect={true} to={"/"}/>}

            {
                (() => {
                    if(!isDetailEntered){
                        return <>
                            <Progress labels={["Registration", "Submission", "Confirmation"]} selected={1} />
                            <UserRegisterForm detailsEntered={detailsEntered} inputs={inputs} names={names} btns={buttons}/>
                        </>
                    }else if(!isFileSelected){
                        return <>
                            <Progress labels={["Registration", "Submission", "Confirmation"]} selected={2} />
                            <Submission callback={setFile} usertype={"Researcher"}/>
                        </>
                    }else if(isFileSelected){
                        return <>
                            <Progress labels={["Registration", "Submission", "Confirmation"]} selected={3} />
                            <UserConfirmation details={values} submitForm={submitForm} confirmationItems={confirmationItems}/>
                        </>
                    }

                })()
            }
        </div>
    )
}

export default ResearcherRegister;