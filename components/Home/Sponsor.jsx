import React from "react";
import SubTitle from "./SubTitle";

import "../styles/Sponsors.css"
import {useFetch} from "../useFetch";
import TrackItem from "./TrackItem";

export default function Sponsor(){
    const {data} = useFetch("http://localhost:3000/api/v1/sponsors");
    return(
        <div className="sponsors">
                <SubTitle text="Powered By" />
                <div className="sponsor-items">

                    {
                        data &&
                        data.map(d=>{
                            return <img src={`http://localhost:3000/api/v1/sponsors/image/${d.image}`} />
                        })
                    }
                </div>

        </div>

    )
}