import React from "react";
import "./css/RegisterTimer.css"
export default function RegisterTimer(){

    return (
        <div>
            <h2 className="register-now">Register now! The event starts in</h2>
            <div className="timers">
                <div className="individual-timer">
                    <div className="value">20</div> <div className="unit">days</div>
                </div>
                <div className="individual-timer">
                    <div className="value">10</div> <div className="unit">hours</div>
                </div>
                <div className="individual-timer">
                    <div className="value">50</div> <div className="unit">minutes</div>
                </div>
                <div className="individual-timer">
                    <div className="value">45</div> <div className="unit">seconds</div>
                </div>
            </div>
        </div>
    )

}