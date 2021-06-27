import React from "react";
import "./styles/Notification.css"
import moment from "moment";
export default function NotificationItem(props){

    const date = moment();
    let created = new moment(props.time)
    let time;
    let days = date.diff(created,'days');
    let hours = date.diff(created,'hours');
    let minutes = date.diff(created,'minutes');

    if(days != 0){
        time = `${days} ${days==1?"day":"days"} ago`;
    }else if(hours!=0){
        time = `${hours} ${hours==1?"hour":"hours"} ago`;
    }else{
        time = `${minutes} ${minutes==1?"minute":"minutes"} ago`;

    }



    return(
        <div className={"notification-item"}>
            <div className={"notification-img"}>
                <i className="fas fa-envelope"></i>
            </div>
            <div className={"notification-item-body"}>
                <div className={"notification-item-heading"}>
                    {props.title}
                </div>
                <div className={"notification-item-text"}>
                    {/*Congratulations! Your research paper has been accepted. Please click here to make the payment in order to publish your research Paper*/}
                    {props.message}
                </div>
                <div className={'notification-time'}>
                    {time}
                </div>
            </div>
        </div>
    )
}