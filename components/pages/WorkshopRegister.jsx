import React from 'react';
import {useState} from "react";
import Progress from "../Progress";
import Confirmation from "../Confirmation";
import UserRegisterForm from "../UserRegisterForm";
import Submission from "../Submission";
import axios from 'axios';
import UserConfirmation from "../UserConfirmation";
import PageTitleWrap from "../PageTitleWrap";
import Popup from "../Popup";

const url = "https://api.icaf.site/api/v1/workshops";


//Inputs stored as an array so they can be mapped to Input component
const inputs=[
    {
        label:"Name of the Workshop",
        type:"text",
        name:"workshopName"
    },
    {
        label:"Name of the Presenter",
        type:"text",
        name:"presentersName"
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
    workshopName:'',
    presentersName:'',
    email:'',
    contact:'',
    password:'',
    confirmPassword:'',
    country:'',
    jobTitle:'',
    company:'',
    img:'',
}
//Details to be displayed in confirmation section
const confirmationItems=[
    {
        name:"Workshop name",
        value:"workshopName"
    },
    {
        name:"Presenter's Name",
        value:"presentersName"
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
function WorkshopRegister(){

    const[isSubmitted,setIsSubmitted] = useState(false);
    const[isDetailEntered, setIsDetailEntered] = useState(false);
    const[isFileSelected, setIsFileSelected] = useState(false);
    const [userType, setUserType] = useState(false);
    const[values,setValues] = useState();

    function submitForm(){

        //Create a FormData object and append the data
        const data = new FormData();
        console.log(values);
        data.append('value',JSON.stringify(values))
        data.append('img',values.img);
        data.append('proposal',values.document);
        //Make a post request
        axios.post(url, data, { // receive two parameter endpoint url ,form data
        }).then(res => { // then print response status
            setIsSubmitted(true);
        })
    }
    function detailsEntered(val){
        setIsDetailEntered(true);
        setValues(val);
        setUserType(val.usertype);
    }
    function setFile({file}){
        setIsFileSelected(true);
        setValues({...values,document:file,documentName:file.name})

    }
    return (
        <div>

            <PageTitleWrap title={"Register"}/>
            {isSubmitted && <Popup message={"You have successfully submitted your workshop proposal. You will receive a notification once the proposal is reviewed."} redirect={true} to={"/"}/>}

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
                            <Submission callback={setFile} usertype={"workshop"}/>
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

export default WorkshopRegister;