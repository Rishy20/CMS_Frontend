import React, {useEffect, useState} from "react";
import "./styles/RegisterTimer.css"
import moment from "moment";
export default function RegisterTimer({start}){



    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(start) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;

    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });
    return (
        <div>
            <h2 className="register-now">Register now! The event starts in</h2>
            <div className="timers">
                <div className="individual-timer">
                    <div className="value">{timeLeft.days}</div> <div className="unit">days</div>
                </div>
                <div className="individual-timer">
                    <div className="value">{timeLeft.hours}</div> <div className="unit">hours</div>
                </div>
                <div className="individual-timer">
                    <div className="value">{timeLeft.minutes}</div> <div className="unit">minutes</div>
                </div>
                <div className="individual-timer">
                    <div className="value">{timeLeft.seconds}</div> <div className="unit">seconds</div>
                </div>
            </div>
        </div>
    )

}