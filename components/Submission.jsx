import React, {useState} from "react";
import PageTitle from "./PageTitle";
import "./styles/Submission.css"
import FileUpload from "./FileUpload";
import Button from "./Button";
import {Link} from "react-router-dom";
function Submission({callback,usertype}){

    const [file,setFile] = useState(null);
    const [error,setError] = useState('');

    function selectFile(file){
        setFile(file);
        setError("");
    }

    function submitForm(){
        callback(file);

    }

    return(
        <div className="submission-form">
            <PageTitle title="SUBMISSION"/>
            <div className="submission-body">
                <div className="submission-text">
                    Please attach your {usertype==="Researcher"?"Research Paper":"Workshop Proposal"} below. Please read the guidelines from {usertype==="Researcher"?<Link to={"/authors/callforpaper"}>here</Link> : <Link to={"/workshops/callforproposal"}>here</Link>}, before submitting your paper.
                </div>
                <FileUpload callback={selectFile} type={"file"}/>
            </div>
            <div className="submission-btn">
                <p className="error">{error}</p>
                <Button btnStyle="btn-next" name="Next" onclick={submitForm} />
                <Button btnStyle="btn-cancel" name="Cancel" />
            </div>


        </div>
    )
}

export default Submission