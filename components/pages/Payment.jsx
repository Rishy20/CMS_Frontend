import React, {useState} from "react";
import PageTitleWrap from "../PageTitleWrap";
import PaymentForm from "../PaymentForm";
import Popup from "../Popup";

export default function Payment({total,user,setUser}){

    const submitForm = (values) => {
        fetch("http://localhost:3001/api/v1/payment",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'ffd22t7434bf39xh@jhjk#$JKb45&*nkdldcvv'
            },
            method:"POST",
            body: JSON.stringify(values)
        }).then(res => res.json())
            .then(data=>{
                if(data.status==="Success"){
                    fetch("http://localhost:3000/api/v1/payments",{
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        method:"POST",
                        body: JSON.stringify({
                            paymentId:data.paymentId,
                            userId:user._id,
                            reason:"Paper Submission",
                            amount:parseInt(total)
                        })
                    }).then(res => res.json())
                        .then(data=>{
                            if(data.status==="Success"){
                                setIsSubmitted(true);
                                setUser({...user,paymentId:true});
                                togglePopup()
                            }else {
                                setMessage(data.message);
                            }
                        })
                }else {
                    setMessage(data.message);
                }
            })
            .catch(err=>console.log(err));
    }
    const[isSubmitted,setIsSubmitted] = useState(false);
    //method to display error message
    const [message,setMessage] = useState(null);
    const [isOpen,setIsOpen] = useState(false);
    function togglePopup(){
        setIsOpen(!isOpen);
    }
    return(
        <div>
            {(isSubmitted && isOpen)  && <Popup message={"You have successfully made the payment."} redirect={true} to={"/"} toggle={togglePopup}/>}
            <PageTitleWrap title={"Payment"}/>
            <PaymentForm total={parseInt(total)} callback={submitForm} error={message}/>
        </div>
    )
}