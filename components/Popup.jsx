import React, {useState} from "react";
import "./css/Popup.css"
import success from "url:../public/images/checked.png"
import Button from "./Button";
import {Redirect} from "react-router-dom";
export default function Popup(props){

    const [displayPopup,setDisplayPopup] = useState(true)
    const [redirect,setRedirect] = useState(false);
    function hidePopup(){
        props.redirect && setRedirect(true);
        setDisplayPopup(false);

        // props.callback();
    }
    return(
        <>
            {displayPopup &&
            <div className={"popup"}>

                <div className={"popup-container"}>
                    <div className={"popup-header"}>
                        <img src={success}/>
                        Congratulations!
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