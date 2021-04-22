import React from "react";

import "./AccordionItem.css"
function AccordionItem(props){

    return(
        <a className="accordion-item">{props.text}</a>
    )

}

export default AccordionItem