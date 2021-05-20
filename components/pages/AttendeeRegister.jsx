import React from 'react';
import Header from "../Header";
import Hero from "../Hero"
import Accordion from "../Accordion";
import RegisterForm from "../RegisterForm";
import {useState} from "react";
import Progress from "../Progress";
import Tickets from "../Tickets";
import Confirmation from "../Confimation";
import UserConfirmation from "../UserConfirmation";

//Attendee Register Page
function AttendeeRegister(){

    const[isSubmitted,setIsSubmitted] = useState(false);
    const[isDetailEntered, setIsDetailEntered] = useState(false);
    const [isTicketSelected, setIsTicketSelected] = useState(false);
    const[values,setValues] = useState();
    function submitForm(){
        setIsSubmitted(true);
        console.log("Form Submitted")
    }
    function detailsEntered(val){
        setIsDetailEntered(true);


        setValues(val);
    }

    function setTicket(ticket){
        setValues({...values,ticket});
        setIsTicketSelected(true);
    }
    return (
        <div>

            {
                (() => {
                    if(!isDetailEntered){
                        return <>
                            <Progress labels={["Registration", "Tickets", "Confirmation"]} selected={1} />
                            <RegisterForm detailsEntered={detailsEntered}   />
                        </>
                    }else if(isDetailEntered && !isTicketSelected){
                        return <>
                            <Progress labels={["Registration", "Tickets", "Confirmation"]} selected={2} />
                            <Tickets setTicket={setTicket}/>
                        </>
                    }else if(isDetailEntered && isTicketSelected){
                        return <>
                            <Progress labels={["Registration", "Tickets", "Confirmation"]} selected={3} />
                            <UserConfirmation details={values} submitForm={submitForm}/>
                        </>
                    }

                })()
            }


        </div>
    )
}

export default AttendeeRegister;