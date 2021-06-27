import {useState,useEffect} from "react";

//This custom hook handles fetches
export const useFetch = (url) =>{

    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);

    const getData = async () =>{
        //Fetches the data from the db
        const response = await fetch(url).catch(err=>console.log(err));
        const d = await response.json();
        //Set the data state
        setData(d)
        setLoading(false);
    };
    useEffect(()=>{
        getData();
        console.log(data)
    },[url]);

    return {loading,data};
}