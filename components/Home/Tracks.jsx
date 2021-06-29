import React from "react";
import SubTitle from "./SubTitle";
import "../styles/Tracks.css"
import TrackItem from "./TrackItem";
import {useFetch} from "../useFetch";
export default function Tracks(){

    const {data} = useFetch("https://api.icaf.site/api/v1/tracks");
    return(
        <div className="tracks">
            <SubTitle text="Tracks and Topics" />
            <div className="track-items">
                {
                    data &&
                        data.map(d=>{
                            return <TrackItem
                                name={d.name}
                                img={d.image}
                                key={d._id}
                            />
                        })
                }


            </div>

        </div>
    )
}