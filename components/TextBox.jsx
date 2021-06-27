import React from 'react';
import './styles/Input.css'


//Input box with label
function TextBox(props){

    return(
        <div>
            <label className="form-label" htmlFor={props.name}>{props.label}</label>
            <textarea className={"text-box"}  value={props.value} name={props.name} id={props.name} placeholder={props.placeholder} onChange={props.onChange}>{props.value}</textarea>
            {/*Print Validation errors           */}
            <p className="error">{props.error}</p>
        </div>

    )

}
export default TextBox;