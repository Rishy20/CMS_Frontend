import React from "react";
import {FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import "./Radio.css"
function RadioButton(props){
    return(
        <div>
            <label className="form-label" htmlFor={props.name}>{props.label}</label>
        <RadioGroup row aria-label={props.label} name={props.name} id={props.name} className="radio-group">
            {props.values.map(value=>{
                return <FormControlLabel
                    value= {value}
                    control={<Radio color="primary" />}
                    label= {value}
                    labelPlacement="end"

                />
            })}

        </RadioGroup>
        </div>
    )
}
export default RadioButton