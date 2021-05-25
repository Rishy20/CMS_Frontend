import React, {useState} from "react";
import PageTitle from "./PageTitle";
import "./css/Submission.css"
import FileUpload from "./FileUpload";
import Button from "./Button";
function Submission({callback,usertype}){

    const [file,setFile] = useState(null);
    const [error,setError] = useState('');

    function selectFile(file){
        setFile(file);
        setError("");
    }

    function submitForm(){
        callback(file);
        // if(file.length){
        //     callback(file);
        // }else{
        //     setError("Please Select a file");
        // }
    }

    return(
        <div className="submission-form">
            <PageTitle title="SUBMISSION"/>
            <div className="submission-body">
                <div className="submission-text">
                    Please attach your {usertype==="Researcher"?"Research Presentation":"Workshop Proposal"} below. Please read the guidelines from here, before submitting your paper.
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