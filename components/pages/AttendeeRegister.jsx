import React from 'react';
import RegisterForm from "../RegisterForm";
import {useState} from "react";
import Progress from "../Progress";
import Tickets from "../Tickets";
import Confirmation from "../Confirmation";
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
    let paymentId;
    function detailsEntered(val){
        setIsDetailEntered(true);
        setValues(val);
    }

    function setTicket(ticket){
        setValues({...values,ticket:ticket.name,price:ticket.price});
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

    function submitForm(attendee){
        console.log(attendee)
        fetch("https://payment.icaf.site/api/v1/payment",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'ffd22t7434bf39xh@jhjk#$JKb45&*nkdldcvv'
            },
            method:"POST",
            body: JSON.stringify({
                chname:attendee.chname,
                cvc:attendee.cvc,
                cnum:attendee.cnum,
                total:attendee.price,
                expiry:attendee.expiry
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.status === "Success") {
                    paymentId = data.paymentId
                    fetch("https://api.icaf.site/api/v1/attendees", {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        method: "POST",
                        body: JSON.stringify(attendee)
                    }).then(res => res.json())
                        .then(data => {
                            console.log(data)

                            if (data.status === "Success") {

                                fetch("https://api.icaf.site/api/v1/payments", {
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    method: "POST",
                                    body: JSON.stringify({
                                        paymentId: paymentId,
                                        userId: data.id,
                                        reason: "Registration",
                                        amount: parseInt(attendee.price)
                                    })
                                }).then(res => res.json())
                                    .then(data => {
                                        console.log(data)

                                        if (data.status === "Success") {
                                            setIsSubmitted(true);
                                            togglePopup()
                                        } else {
                                            setMessage(data.msg);
                                            setIsSubmitted(false);
                                            togglePopup();
                                        }
                                    })
                            }else{
                                setMessage(data.msg);
                                setIsSubmitted(false);
                                togglePopup();
                            }
                        })
                }else{
                    setMessage(data.message);
                    setIsSubmitted(false);
                    togglePopup();
                }
            })

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