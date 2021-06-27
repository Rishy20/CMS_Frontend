import React from "react";
import Title from "../Title";
import SubTitle from "./SubTitle";
import SpeakerItem from "./SpeakerItem";
import "../styles/Speakers.css"
import Button from "../Button";
import {useFetch} from "../useFetch";
import {Link} from "react-router-dom";
function Speakers(){
    const {data} = useFetch("http://localhost:3000/api/v1/keynotes");
    return(
        <div className={"speakers"}>
            <SubTitle text="Speakers" white={true}/>
            <div className="speaker-items">

                {
                    data && data.map(speaker=>{
                        return  <SpeakerItem
                            name={speaker.fname + " " + speaker.lname}
                            job={speaker.jobTitle}
                            company={speaker.company}
                            country={speaker.country}
                            img={`http://localhost:3000/api/v1/keynotes/image/${speaker.img}`}
                        />
                    })
                }


            </div>
            <Link to={"/keynotes"}> <Button name="All Speakers" btnStyle = "btn-view-all"/> </Link>
        </div>
    )
}
export default Speakers