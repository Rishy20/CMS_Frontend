import React from "react";
import Grid from "@material-ui/core/Grid";
import Select from "./Select";
import Input from "./Input";

function Form(){
    return(
        <div>
            <form onSubmit={handleSubmit} >
                <Grid container spacing={2}  justify="center">
                    {
                        //Map input array to input components
                        inputs.map(input=>{
                            if(input.type==="select"){
                                return <Grid item xs={12} md={6} key={input.name}>
                                    <Select name={input.name} label={input.label} values={input.values} value={values[input.name]} onChange={handleChange}
                                            error={errors[input.name] ? errors[input.name] : ''} />
                                </Grid>
                            }else {
                                return <Grid item xs={12} md={6} key={input.name}>
                                    <Input label={input.label} value={values[input.name]} type={input.type}
                                           id={input.name} name={input.name} onChange={handleChange}
                                           error={errors[input.name] ? errors[input.name] : ''} maxLength={input.maxLength}/>
                                </Grid>
                            }
                        })
                    }
                </Grid>
            </form>
        </div>
    )
}