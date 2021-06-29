import React, {useState} from 'react';
import './styles/Input.css'
import {IconButton} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const showPassBtn = {
    float: "right",
    marginBlockStart: "-33px",
    marginInlineEnd: "6px"
}

//Input box with label
const Input = props => {
    const password = props.type === "password";

    const [showPassword, setShowPassword] = useState(false);

    return(
        <div>
            <label className="form-label" htmlFor={props.name}>{props.label}</label>

            {props.type === "textarea" ?
                <textarea
                    className={`input-box ${props.disabled && "disabled"}`}
                    name={props.name}
                    id={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    disabled={props.disabled}
                />
                :
                <input className={`input-box ${props.inline && "input-box-inline"} ${props.disabled && "disabled"}`}
                       type={password && showPassword ? "text" : props.type}
                       name={props.name} id={props.name}
                       value={props.value}
                       placeholder={props.placeholder}
                       maxLength={props.maxLength}
                       onChange={props.onChange}
                       disabled={props.disabled}
                       style={password ? {paddingInlineEnd: "40px"} : {}}
                />
            }

            {/* Show Password button */}
            {password &&
            <IconButton
                size="small"
                onClick={() => setShowPassword(!showPassword)}
                style={showPassBtn}
                disableRipple
            >
                {showPassword ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
            }

            {/* Print Validation errors */}
            <p className="error">{props.error}</p>
        </div>

    )

}
export default Input;