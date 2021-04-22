import React from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css"

function Accordion(){
    return(
        <div className="accordion">
            <AccordionItem text="Event Details"/>
            <AccordionItem text="Schedule"/>
            <AccordionItem text="Presentations"/>
            <AccordionItem text="Workshops"/>
            <AccordionItem text="Speakers"/>
            <AccordionItem text="Tickets"/>
        </div>
    )
}
export default Accordion