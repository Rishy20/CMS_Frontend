import React from "react"

function EventCountItem(props){
    return (
        <div className="event-count-item">
            <div className="number">{props.number}</div>
            <div className="values">{props.text}</div>
        </div>
    )
}
export default EventCountItem;