import React, {useEffect, useState} from "react";
import validate from "./validateInfo";
import Grid from "@material-ui/core/Grid";
import AvatarSelector from "./AvatarSelector";
import Input from "./Input";
import {CircularProgress} from "@material-ui/core";
import {Done} from "@material-ui/icons";
import Button from "./Button";
import { useLocation } from 'react-router-dom';

let inputs = [
    {label: "First Name", name: "fname"},
    {label: "Last Name", name: "lname"},
    {label: "Phone", name: "contact"},
    {label: "Email", name: "email"},
]

// Submit error message
const ERR_MSG = "Failed to save changes. Please try again...";

const PersonalInfo = props => {
    // Destructure props
    const {styles, user, setUser, baseUrl, avatarSrc, avatarTxt, setSubmitError} = props;

    const location = useLocation();

    if(user.role==="researcher"){
        inputs = [
            {label: "First Name", name: "fname"},
            {label: "Last Name", name: "lname"},
            {label: "Phone", name: "contact"},
            {label: "Email", name: "email"},
            {label: "Profession", name: "jobTitle"},
            {label: "Company", name: "company"},
        ]
    }else{
        inputs = [
            {label: "Workshop Name", name: "workshopName"},
            {label: "Presenter", name: "presentersName"},
            {label: "Phone", name: "contact"},
            {label: "Email", name: "email"},
            {label: "Profession", name: "jobTitle"},
            {label: "Company", name: "company"},
        ]
    }

    // Form states
    const [values, setValues] = useState({...user});
    const [avatar, setAvatar] = useState(null);
    const [errors, setErrors] = useState({});
    const [edit, setEdit] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);



    // Reset submit success state
    useEffect(() => setSubmitSuccess(false), []);

    // Handle user data autofill
    useEffect(() => {
        setValues({...user});
    }, [user])

    // Handle form input changes
    const handleChange = event => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    // Handle adding an image
    const handleAddImg = img => {
        if (img.file) {
            const {file} = img;
            console.log(file);
            setAvatar(file);
            // Generate file name and set it to values state
            // const filename = `${user._id}_${Date.now()}.${file.name.split(".").pop()}`;
            // setValues({...values, avatar: filename});
        } else {
            // setValues({...values, avatar: user.avatar});
            setAvatar(null);
        }
    }

    // Handle form submit
    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    // Validate and submit form if no errors were found
    useEffect(() => {
        console.log(errors);
            if(Object.keys(errors).length === 0 && isSubmitting ) {
                if (baseUrl) {
                    submitForm();
                }
            } else {
                setIsSubmitting(false);
            }
        },[isSubmitting]
    );

    // Submit form and handle the results
    const submitForm = () => {

        // Create a new form data object
        const data = new FormData();
        // Add input values and the avatar
        data.append("values", JSON.stringify(values));
        data.append("img", avatar);

        // Send PUT request to update user data and upload the avatar
        fetch(`https://api.icaf.site/api/v1/${user.role}s/${user._id}`, {
            method: "PUT",
            body: data
        }).then(res => res.json())
            .then(data => {
                handleSubmitResult(data);
                console.log(data)
            })
            .catch(err => {
                setSubmitError(ERR_MSG);
                setIsSubmitting(false);
                console.log(err);
            });
    }

    // Check the submit results and set states accordingly
    const handleSubmitResult = data => {
        if (data.status === "Success") {
            setSubmitError("");
            setSubmitSuccess(true);
            setEdit(false);
            setUser(values);
        } else if (data.status === "Error") {
            setSubmitError(ERR_MSG);
        }

        setIsSubmitting(false);
    }

    // Handle setting the edit mode
    const handleSetEdit = event => {
        event.preventDefault();
        setEdit(!edit);
        setSubmitSuccess(false);
        setValues({...user});
        setErrors({});
        setAvatar(null);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {/* Avatar selector */}
            <Grid container spacing={6}>
                <Grid item xs={4}>
                    <label
                        htmlFor="avatar"
                        className={styles.label}
                    >
                        Avatar
                    </label>
                </Grid>
                <Grid item xs={7}>
                    <AvatarSelector
                        callback={handleAddImg}
                        avatarSrc={avatarSrc}
                        avatarTxt={avatarTxt}
                        edit={edit} />
                </Grid>
            </Grid>

            {/* Form inputs */}
            {
                inputs.map(input => (
                        <Grid container alignItems="center" spacing={6} key={input.name}>
                            {/* Input label */}
                            <Grid item xs={4}>
                                <label
                                    htmlFor={input.name}
                                    className={styles.label}
                                >
                                    {input.label}
                                </label>
                            </Grid>
                            {/* Input element */}
                            <Grid item xs={7}>
                                <Input
                                    value={values[input.name]} type="text" id={input.name} name={input.name}
                                    onChange={handleChange} error={errors[input.name]} inline
                                    disabled={!edit}
                                />
                            </Grid>
                        </Grid>
                    )
                )}

            {/* Buttons */}
            <div className={styles.buttons}>
                {/* Submitting progress indicator */}
                {isSubmitting && <CircularProgress size={"2.2em"} className={styles.progress} />}
                {/* Submit success indicator */}
                {submitSuccess && <Done className={styles.success} />}

                {/* Save button */}
                {edit && <Button
                    btnStyle="btn-save"
                    name="Save Changes"
                    type="submit"
                    disabled={isSubmitting}
                />}
                {/* Edit/Cancel button | This button toggles the edit mode */}
                <Button
                    btnStyle={"btn-cancel"}
                    name={edit ? "Cancel" : "Edit"}
                    onclick={handleSetEdit}
                    disabled={isSubmitting}
                />
            </div>
        </form>
    );
}

export default PersonalInfo;