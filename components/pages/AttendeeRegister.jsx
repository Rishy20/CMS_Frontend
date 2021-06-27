import React from 'react';
import Header from "../Header";
import Hero from "../Home/Hero"
import Accordion from "../Accordion";
import RegisterForm from "../RegisterForm";
import {useState} from "react";
import Progress from "../Progress";
import Tickets from "../Tickets";
import Confirmation from "../Confimation";
import PageTitleWrap from "../PageTitleWrap";
import Popup from "../Popup";

//Attendee Register Page
function AttendeeRegister(){

    const[isSubmitted,setIsSubmitted] = useState(false);
    const[isDetailEntered, setIsDetailEntered] = useState(false);
    const [isTicketSelected, setIsTicketSelected] = useState(false);
    const[values,setValues] = useState({});

    //method to display error message
    const [message,setMessage] = useState(null);
    const [isOpen,setIsOpen] = useState(false);

    function submitForm(data){
        if(data.status==="Fail"){

            setIsSubmitted(false);
            togglePopup();
        }else{
            setIsSubmitted(true);
            setMessage(false);
            setValues({});
            togglePopup()
        }
    }
    function detailsEntered(val){
        setIsDetailEntered(true);
        setValues(val);
    }

    function setTicket(ticket){
        setValues({...values,ticket});
        setIsTicketSelected(true);
    }

    function togglePopup(){
        setIsOpen(!isOpen);
    }
    function backToRegister(){
        setIsDetailEntered(false)
    }
    function backToTicket(){
        setIsTicketSelected(false)
    }
    return (
        <div>
            <PageTitleWrap title={"Register"}/>
            {(isSubmitted && isOpen)  && <Popup message={"You have successfully registered to the conference. You will receive a confirmation email soon."} redirect={true} to={"/"} toggle={togglePopup}/>}
            {(message && isOpen) && <Popup message={message} error={true} toggle={togglePopup}/>}
            {
                (() => {
                    if(!isDetailEntered){
                        return <>
                            <Progress labels={["Registration", "Tickets", "Confirmation"]} selected={1} />
                            <RegisterForm detailsEntered={detailsEntered} values={values}  />
                        </>
                    }else if(isDetailEntered && !isTicketSelected){
                        return <>
                            <Progress labels={["Registration", "Tickets", "Confirmation"]} selected={2} />
                            <Tickets setTicket={setTicket} back={backToRegister} ticket={values.hasOwnProperty("ticket")&&values.ticket}/>
                        </>
                    }else if(isDetailEntered && isTicketSelected){
                        return <>
                            <Progress labels={["Registration", "Tickets", "Confirmation"]} selected={3} />
                            <Confirmation details={values} submitForm={submitForm} back={backToTicket} />
                        </>
                    }

                })()
            }


        </div>
    )
}

export default AttendeeRegister;