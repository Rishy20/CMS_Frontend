import React, {useState} from "react";
import Header from "../Header";
import PageTitleWrap from "../PageTitleWrap";
import useForm from "../useForm";
import PageTitle from "../PageTitle";
import Input from "../Input";
import Button from "../Button";
import "../styles/Login.css"
import validate from "../validateInfo";
import Cookies from "js-cookie";
import checkLogin from "../CheckLogin";

const names={
    email:'',
    password:''
}
//Login url
const url = "https://api.icaf.site/api/v1/login"
export default function Login({setLogin}){
    //Import methods from useForm hook
    const {handleChange, handleSubmit, values, errors } = useForm(submitForm,validate,names,url);
    //Method to handle Submission State
    const[isSubmitted,setIsSubmitted] = useState(false);
    //method to display error message
    const [message,setMessage] = useState(null);
    //Variable to store user type
    let userType;
    function submitForm(data){

        //Check if login is successful
        if(data.auth){
            Cookies.set("token",data.token,{ expires: 1 });
            setLogin(checkLogin());
            setIsSubmitted(true);
        }else{
            setMessage(data.message)
        }
    }
    return(
            <div>
                <PageTitleWrap title={"Login"}/>
                <div className={"login-body-container"}>
                    <div className="user-login-body">
                        <PageTitle title="LOGIN"/>
                        <div className="login-form">
                            <form onSubmit={handleSubmit}>
                                <Input type="email" name="email" label="Email" onChange={handleChange} value={values["email"]} error={errors["email"] ? errors["email"] : ''} />
                                <Input type="password" name="password" label="Password" onChange={handleChange} value={values["password"]} error={errors["password"] ? errors["password"] : ''}  />
                                {message?<div className="login-error">{message}</div>:null}
                                <Button btnStyle="btn-login" type="submit" name="SIGN IN"/>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

    )
}