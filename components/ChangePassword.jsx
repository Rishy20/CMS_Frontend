import React, {useEffect, useState} from "react";
import validate from "./validateInfo";
import Grid from "@material-ui/core/Grid";
import Input from "./Input";
import {CircularProgress, IconButton} from "@material-ui/core";
import {Done, Visibility, VisibilityOff} from "@material-ui/icons";
import Button from "./Button";

const inputs = [
    {label: "Current Password", name: "currentPassword", placeholder: "Your current password"},
    {label: "New Password", name: "password", placeholder: "Enter a new password"},
    {label: "Confirm Password", name: "confirmPassword", placeholder: "Confirm the new password"},
]

// Submit error messages
const ERR_MSG_PWD = "Your current password appears to be incorrect";
const ERR_MSG_SAVE = "Something went wrong. Please try again...";

const ChangePassword = props => {
    // Destructure props
    const {styles, user, baseUrl, setSubmitError} = props;

    // Form states
    const [values, setValues] = useState({currentPassword: "", password: "", confirmPassword: ""});
    const [showPassword, setShowPassword] = useState({currentPassword: false, password: false, confirmPassword: false});
    const [errors, setErrors] = useState({});
    const [authenticated, setAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reset authenticated state
    useEffect(() => setAuthenticated(false), []);

    // Handle password input changes
    const handleChange = event => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    // Handle show password toggle
    const handleShowPassword = name => {
        setShowPassword({...showPassword, [name]: !showPassword[name]});
    }

    // Handle authenticating with current password
    const handleAuthenticate = event => {
        event.preventDefault();
        setSubmitSuccess(false);

        if (authenticated) {
            setAuthenticated(false);
            resetStates();
        } else {
            if (values.currentPassword) {
                setErrors({currentPassword: ""});
                setIsAuthenticating(true);
                authenticate();
            }
            else {
                setErrors({currentPassword: "Please enter a password"});
            }
        }
    }

    // Authenticate password change with current password
    const authenticate = () => {
        const data = {email: user.email, password: values.currentPassword}

        fetch("https://icaf.site/api/v1/login/admin", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                handleAuthResult(data);
                console.log(data)
            })
            .catch(err => {
                setSubmitError(ERR_MSG_SAVE);
                setIsAuthenticating(false);
                console.log(err);
            });
    }

    // Handle authentication result
    const handleAuthResult = data => {
        if (data.auth) {
            setSubmitError("");
            setErrors({});
            setAuthenticated(true);
        } else {
            setSubmitError(ERR_MSG_PWD);
            setErrors({currentPassword: "Incorrect Password"});
        }

        setIsAuthenticating(false);
    }

    // Handle form submit
    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    // Validate and submit form if no errors were found
    useEffect(() => {
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
        // Add password to user data for submitting
        const submitData = {...user, password: values.password}
        // Create a new form data object
        const data = new FormData();
        // Add input values and the avatar
        data.append("values", JSON.stringify(submitData));

        // Send PUT request to update user data and upload the avatar
        fetch(baseUrl + user._id, {
            method: "PUT",
            body: data
        }).then(res => res.json())
            .then(data => {
                handleSubmitResult(data);
                console.log(data)
            })
            .catch(err => {
                setSubmitError(ERR_MSG_SAVE);
                setIsSubmitting(false);
                console.log(err);
            });
    }

    // Check the submit results and set states accordingly
    const handleSubmitResult = data => {
        if (data.status === "Success") {
            setSubmitError("");
            setAuthenticated(false);
            setSubmitSuccess(true);
            resetStates();
        } else if (data.status === "Error") {
            setSubmitError(ERR_MSG_SAVE);
        }

        setIsSubmitting(false);
    }

    // Reset value states
    const resetStates = () => {
        setErrors({});
        setValues({currentPassword: "", password: "", confirmPassword: ""});
        setShowPassword({currentPassword: false, password: false, confirmPassword: false});
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
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
                                    value={values[input.name]} name={input.name}
                                    type={showPassword[input.name] ? "text" : "password"}
                                    id={input.name} placeholder={input.placeholder}
                                    onChange={handleChange} error={errors[input.name]} inline password
                                    disabled={input.name === "currentPassword" ? authenticated : !authenticated}
                                />
                            </Grid>

                            {/* Show password icon */}
                            <IconButton
                                size="small"
                                onClick={() => handleShowPassword(input.name)}
                                className={styles.showPassBtn}
                                style={errors[input.name] ? {marginBlockStart: "-20px"} : {}}
                            >
                                {showPassword[input.name] ? <VisibilityOff /> : <Visibility />}
                            </IconButton>

                            {/* Authenticating progress indicator */}
                            {input.name === "currentPassword" && isAuthenticating &&
                                <CircularProgress
                                    size={"2.2em"}
                                    className={styles.progress}
                                    style={{marginInlineStart: "16px", marginBlockStart: "-2px"}}
                                />
                            }

                            {/* Authenticated status indicator */}
                            {(input.name === "currentPassword" && authenticated) &&
                                <Done
                                    className={styles.success}
                                    style={{marginInlineStart: "16px", marginBlockStart: "-2px"}}
                                />
                            }
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
                {authenticated && <Button
                    btnStyle="btn-save"
                    name="Save Changes"
                    type="submit"
                    disabled={isSubmitting}
                />}
                {/* Edit/Cancel button | This button toggles the edit mode */}
                <Button
                    btnStyle={"btn-cancel"}
                    name={authenticated ? "Cancel" : "Continue"}
                    onclick={handleAuthenticate}
                    disabled={isAuthenticating || isSubmitting}
                />
            </div>
        </form>
    );
}

export default ChangePassword;