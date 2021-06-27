import React, {useState} from "react";
import "./styles/Popup.css"
import success from "url:../public/images/checked.png"
import error from "url:../public/images/cancel.png"
import Button from "./Button";
import {Redirect} from "react-router-dom";
export default function Popup(props){

    const [displayPopup,setDisplayPopup] = useState(true)
    const [redirect,setRedirect] = useState(false);
    function hidePopup(){
        props.redirect && setRedirect(true);
        setDisplayPopup(false);
        if (!props.redirect){
            props.toggle();
        }
    }

    return(
        <>
            {displayPopup &&
            <div className={"popup"}>

                <div className={"popup-container"}>
                    <div className={"popup-header"}>
                        <img src={props.error?error:success}/>
                        {
                            props.error?"Error":"Congratulations!"
                        }
                    </div>
                    <div className={"popup-body"}>
                        {props.message}
                    </div>
                    <div className={"popup-buttons"}>
                        <Button name={"Ok"} btnStyle={"btn-save"} onclick={() => {
                           hidePopup();
                        }}/>
                        <Button name={"Cancel"} btnStyle={"btn-cancel"} onclick={() => {
                            hidePopup()
                        }}/>
                    </div>
                </div>

            </div>
            }
            }
            {redirect&& <Redirect to={props.to}/>}
        </>
    )
}