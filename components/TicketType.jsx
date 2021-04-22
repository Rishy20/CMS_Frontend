import React from "react";
import Button from "./Button";

export default function TicketType(props){
    return (
        <div>
            <div className="ticket-title">{props.name}</div>
            <div className="ticket-description">{props.description}</div>
            <div className="ticket-price">Rs.{props.price}</div>
            <Button name="Select" btnStyle={`btn-outline ${props.name==props.isSelected?'selected':''}`} onclick={()=>{props.onClick(props.name)}}/>
        </div>
    )
}