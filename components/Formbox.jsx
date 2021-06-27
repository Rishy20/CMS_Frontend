import React from "react";
import './styles/Formbox.css'
import Button from "./Button";
import Input from './Input'
import Grid from '@material-ui/core/Grid'
import Form from "./Form";

//Formbox in admin menu
function Formbox(props){
    const inputs= props.input;
    const names = props.names;
    const callback = props.callback;
    const buttons = props.buttons;
    const url = props.url;
    return(
        <div className='formbox'>
            <div className="form-top">
                <h3 className="form-title">{props.title}</h3>
                <span className="top-btn">
                    <Button btnStyle="btn-save" name="Save Changes" />
                    <Button name="Cancel" btnStyle="btn-cancel"/>
                </span>
            </div>

            <div className="form-body">

                <Form inputs={inputs} names={names} callback={callback} btns={buttons} url={url}/>


            </div>
        </div>
    )
}
export default Formbox;