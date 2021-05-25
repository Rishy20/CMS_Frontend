import React from "react";
import AccordionItem from "./AccordionItem";
import "./css/Accordion.css"

function Accordion(props){
    return(
        <div className="accordion">
            {
                props.items.map((item,index)=>{
                    return  <AccordionItem text={item} isSelected={props.selected==index+1} />
                })
            }
        </div>
    )
}
export default Accordion