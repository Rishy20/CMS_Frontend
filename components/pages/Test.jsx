import React from 'react';
import Title from '../Title';
import Formbox from "../Formbox";


//Inputs stored as an array so they can be mapped to Input component
const inputs=[
    {
        label:"First Name",
        type:"text",
        name:"fname"
    },
    {
        label:"Last Name",
        type:"text",
        name:"lname"
    },
    {
        label:"Email",
        type:"email",
        name:"email"
    },
    {
        label:"Contact",
        type:"tel",
        name:"contact"
    },
    {
        label:"Gender",
        type:"select",
        name:"gender",
        values:["Male","Female","Other"]
    },
    {
        label:"Age",
        type:"text",
        name:"age",
        maxLength:3
    },
    {
        label:"Address",
        type:"text",
        name:"address"
    },
    {
        label:"NIC",
        type:"text",
        name:"nic",
        maxLength: 12
    },
]
function Test(){
    return (
        <div>
            <Title text="Test"/>
            <Formbox title="Test Information" input={inputs}/>
        </div>
    )
}

export default Test;