import React from "react";

function AccordionItem(props){

    return(
        <a className={`accordion-item ${props.isSelected?"selected":""}`}>{props.text}</a>
    )

}

export default AccordionItem