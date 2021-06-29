import React, {useEffect, useState} from "react";
import NotificationItem from "./NotificationItem";
import "./styles/Notification.css"
import {Badge, IconButton, makeStyles} from "@material-ui/core";
import {Notifications} from "@material-ui/icons";
import useVisible from "./useVisible";
import {Link} from "react-router-dom";
// Styles for Material UI components
const useStyles = makeStyles({
    iconButton: {
        padding: "8px",
        marginInline: "4px",
        color:"white",
    },
    badge:{
        backgroundColor:"#E2BC7F"
    }
})
export default function Notification({userId}){

    const styles = useStyles();

    const [count,setCount] = useState(0);
    const [notifications,setNotifications] = useState([]);
    const { ref, isVisible, setIsVisible } = useVisible(false);

    async function getData(){

        if(userId) {
            //Fetch Notifications
            await fetch(`https://api.icaf.site/api/v1/notification/${userId}`)
                .then(res => res.json())
                .then(data => setNotifications(data.notifications.reverse()))
                .catch(err => console.log(err));

            //Fetch Notification Count
            await fetch(`https://api.icaf.site/api/v1/notification/count/${userId}`)
                .then(res => res.json())
                .then(data => setCount(data))
                .catch(err => console.log(err));
        }
    }

        useEffect(()=>{
            getData()
           const interval = setInterval(()=>{
               getData()
           },5000);
            return ()=>clearInterval(interval);
        },[])


    const handleClick=()=>{
        setIsVisible(!isVisible)

        if(count!=0 && !isVisible){

            fetch("https://api.icaf.site/api/v1/notification",{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method:"PUT",
                body:JSON.stringify({
                        userId:`${userId}`
                    }
                )
            }).then(res => res.json())
                .then(res=> {
                    console.log(res)
                    if (res.status === "Success") {
                         setCount(0);
                    }
                })
                .catch(err=>console.log(err))
        }
    }


    return(
        <div className={"notification-inline"}>
            <IconButton className={styles.iconButton} onClick={handleClick} >
                <Badge
                    badgeContent={count}
                    classes={{badge:styles.badge}}
                >
                    <Notifications/>
                    {
                        isVisible && <div style={{ position: 'absolute' }} ref={ref}>
                        <div className={"notification"}>
                            <div className={"notification-heading-container"}>
                                <span className={"notification-heading"}>
                                    Notifications
                                </span>
                                <span className={"notification-count"}>
                                    {count}
                                </span>
                            </div>

                            <div className={"notification-body"}>
                                {
                                  notifications && notifications.map(notification=>{
                                      if (notification.needPayment) {
                                         return <Link to={"/author/payment"}>
                                              <NotificationItem title={notification.title}
                                                                message={notification.message}
                                                                time={notification.createdAt}
                                                                key={notification.title}/>
                                          </Link>
                                      }else
                                          return <NotificationItem title={notification.title} message={notification.message} time={notification.createdAt} key={notification.title} />

                                  })
                                }

                            </div>

                        </div>
                        </div>
                    }
                </Badge>
            </IconButton>
        </div>

    )

}