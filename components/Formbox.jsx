import React from "react";
import './Formbox.css'
import Button from "./Button";
import Input from './Input'
import Grid from '@material-ui/core/Grid'

//Formbox in admin menu
function Formbox(props){
    const inputs= props.input;
    return(
        <div className='formbox'>
            <div className="form-top">
                <h3 className="form-title">{props.title}</h3>
                <span className="top-btn">
                    <Button name={"Save Changes"} type={"save"}/>
                    <Button name={"Cancel"} type={"cancel"}/>
                </span>
            </div>

            <div className="form-body">

                <Grid container spacing={2} justify="center">
                    {   //Map input array to input components
                        inputs.map(input=>{
                            return <Grid item xs={12} md={6} >
                                <Input label= {input.label} type={input.text} placeholder={input.placeholder}  id={input.id} key={input.id}/>
                            </Grid>
                        })
                    }
                </Grid>


            </div>
        </div>
    )
}
export default Formbox;