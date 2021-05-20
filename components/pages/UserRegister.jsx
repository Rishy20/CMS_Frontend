import React from 'react';

import RegisterForm from "../RegisterForm";
import {useState} from "react";
import Progress from "../Progress";
import Confirmation from "../Confimation";
import UserRegisterForm from "../UserRegisterForm";
import Submission from "../Submission";
import axios from 'axios';
import UserConfirmation from "../UserConfirmation";

const url = "http://localhost:3000/api/v1/researchers";

//Attendee Register Page
function UserRegister(){

    const[isSubmitted,setIsSubmitted] = useState(false);
    const[isDetailEntered, setIsDetailEntered] = useState(false);
    const[isFileSelected, setIsFileSelected] = useState(false);
    const [userType, setUserType] = useState(false);
    const[values,setValues] = useState();

    function submitForm(){
        setIsSubmitted(true);
        console.log("Form Submitted")

        const data = new FormData();
        data.append('value',JSON.stringify(values))
        data.append('img',values.img);
        if(values.usertype==="Researcher"){
            data.append('paper',values.document);
        }else{
            data.append('proposal',values.document);
        }

        axios.post(url, data, { // receive two parameter endpoint url ,form data
        }).then(res => { // then print response status
                console.log(res.status)
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

        // const data = new FormData();
        // data.append('value',JSON.stringify(values))
        // data.append('img',values.img);
        // data.append('file',values.document);
        // axios.post(url, data, { // receive two parameter endpoint url ,form data
        // })
        //     .then(res => { // then print response status
        //         console.log(res.status)
        //     })

        // const data = new FormData();
        // data.append('value',JSON.stringify(values))
        // data.append('file',file);
        //
        //
        // axios.post(url, data, { // receive two parameter endpoint url ,form data
        // })
        //     .then(res => { // then print response status
        //         console.log(res.status)
        //     })
    }
    return (
        <div>
            {
                (() => {
                    if(!isDetailEntered){
                        return <>
                            <Progress labels={["Registration", "Submission", "Confirmation"]} selected={1} />
                            <UserRegisterForm detailsEntered={detailsEntered}   />
                        </>
                    }else if(!isFileSelected){
                        return <>
                            <Progress labels={["Registration", "Submission", "Confirmation"]} selected={2} />
                            <Submission callback={setFile} usertype={userType}/>
                        </>
                    }else if(isFileSelected){
                        return <>
                            <Progress labels={["Registration", "Submission", "Confirmation"]} selected={3} />
                            <UserConfirmation details={values} submitForm={submitForm}/>
                        </>
                    }

                })()
            }
        </div>
    )
}

export default UserRegister;