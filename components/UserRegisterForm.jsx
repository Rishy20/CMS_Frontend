import React, {useState} from "react";
import "./styles/RegisterForm.css";
import PageTitle from "./PageTitle";
import Form from "./Form";


function UserRegisterForm({detailsEntered,inputs,names,btns}){

    return(

        <div className="register-form">
            <PageTitle title="REGISTRATION INFORMATION"/>
            <div className="register-body">
                <Form inputs={inputs} names={names} callback={detailsEntered} btns={btns}/>
            </div>
        </div>
    )


}
export default UserRegisterForm