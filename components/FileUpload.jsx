import React from "react"
import {useState, useRef} from "react";
import "./styles/FileUpload.css";
const DEFAULT_MAX_FILE_SIZE = 8388608;

import pdf from 'url:../public/images/pdf.png';
import doc from 'url:../public/images/word.png';
import ppt from 'url:../public/images/powerpoint.png';

const allowedFileTypes = ["pdf","vnd.openxmlformats-officedocument.wordprocessingml.document","msword","vnd.ms-powerpoint","vnd.openxmlformats-officedocument.presentationml.presentation"];

function FileUpload({
    callback,setPreview,
    maxFileSize = DEFAULT_MAX_FILE_SIZE,
    type,
    label,
    ...props
                    })
{
    const [files,setFiles] = useState({});
    const fileInputField = useRef(null);
    const [error,setError] = useState(null);
    let fileType;
    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };

    const handleNewFileUpload = (e) => {

        const { files: newFiles } = e.target;
        if (newFiles.length) {
            let updatedFiles = addNewFiles(newFiles);
            setFiles(updatedFiles);
            callUpdateFiles(updatedFiles);
            setPreview && setPreview(URL.createObjectURL(updatedFiles.file));

        }
    };

    const addNewFiles = (newFiles) => {
        for (let file of newFiles) {
            if (file.size <= maxFileSize) {
                fileType = file.type.split("/")[1];
                if(type === "file") {
                    if (allowedFileTypes.includes(fileType)) {

                        if (!props.multiple) {
                            return {file};
                        }
                        files[file.name] = file;
                        setError("");
                    } else {
                        setError("Only .pdf, .docx or .pptx files can be uploaded");
                    }
                }else if(type === "image"){
                    if(file.type.split("/")[0]==="image"){
                        if (!props.multiple) {
                            return {file};
                        }
                        files[file.name] = file;
                        setError("");
                    }else{
                        setError("Only image files can be uploaded");
                    }
                }

            }else{
                setError("Please make sure your file size is less than 10mb");
            }
        }
        return { ...files };
    };

    const convertToArray = (nestedObj) =>
        Object.keys(nestedObj).map((key) => nestedObj[key]);

    const callUpdateFiles = (files) => {
        // const filesAsArray = convertToArray(files);
        callback(files);
    };

    const removeFile = (fileName) => {
        delete files[fileName];
        setFiles({ ...files });
        callUpdateFiles({ ...files });
        setPreview && setPreview("");

    };

    return (
        <div className={"file-upload"}>
            <label className="form-label" >{label}</label>
            <div className="file-upload-container">
            <div className="upload-icon"><i className="fas fa-cloud-upload-alt"></i></div>
            <p className="drag-drop-text">Drag and drop to upload your {type}</p>
                <p className="drag-drop-text">or</p>
            <button type="button" className="upload-file-btn" onClick={handleUploadBtnClick}>
                <span> Browse {props.multiple ? "files" : "file"}</span>
            </button>
                <p className="error">{error}</p>

            <input
                className="form-field"
                type="file"
                ref={fileInputField}
                onChange={handleNewFileUpload}
                title=""
                value=""
                {...props}
            />


            <div className="file-icon-container">
                    {Object.keys(files).map((fileName, index) => {
                        let file = files[fileName];
                        let isImageFile = file.type.split("/")[0] === "image";
                        let isPdfFile = file.type.split("/")[1] === "pdf";
                        let isDocFile = file.type.split("/")[1] === "vnd.openxmlformats-officedocument.wordprocessingml.document" || file.type.split("/")[1] === "msword";
                        let isPptFile = file.type.split("/")[1] === "vnd.openxmlformats-officedocument.presentationml.presentation" || file.type.split("/")[1] === "vnd.ms-powerpoint";


                        return (
                            <div key={fileName} className="single-file-icon">
                                <div>

                                    {isImageFile && (
                                        <img className={"upload-file-img-square"}
                                            src={URL.createObjectURL(file)}
                                            alt={`file preview ${index}`}
                                        />
                                    )}
                                    {isPdfFile && (
                                        <img className={"upload-file-img"}
                                            src={pdf} alt="pdf-icon"
                                        />
                                    )}
                                    {isDocFile && (
                                        <img className={"upload-file-img"}
                                             src={doc} alt="doc-icon"
                                        />
                                    )}
                                    {isPptFile && (
                                        <img className={"upload-file-img"}
                                             src={ppt} alt="ppt-icon"
                                        />
                                    )}

                                    <div>
                                        <span className="file-name">{isPdfFile?file.name.slice(0,-4):file.name}</span>
                                        <i className="fas fa-trash-alt remove-file" onClick={()=>removeFile(fileName)} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            </div>
</div>
    )
}
export default FileUpload;