import React, {useState} from "react";
import {
    IconButton,
    makeStyles,
    Slide,
    Snackbar,
    SnackbarContent,
    Typography
} from "@material-ui/core";
import "./styles/ProfileForm.css";
import {Close} from "@material-ui/icons";
import PersonalInfo from "./PersonalInfo";
import ChangePassword from "./ChangePassword";

const useStyles = makeStyles({
    title: {
        fontSize: "1.3em",
        marginInlineStart: "8px"
    },
    form: {
        paddingInline: "16px",
        paddingBlock: "24px"
    },
    label: {
        fontWeight: "500",
    },
    buttons: {
        position: "absolute",
        top: 130,
        right: 36,
    },
    progress: {
        color: "#E2BC7F",
        float: "left",
        marginBlockStart: "7px",
        marginInlineEnd: "8px"
    },
    success: {
        color: "#4CAF50",
        fontSize: "2.3em",
        float: "left",
        marginBlockStart: "6px",
        marginInlineEnd: "8px"
    },
    showPassBtn: {
        marginInlineStart: "-60px"
    },
    error: {
        backgroundColor: "#F44336"
    }
})

// Slide transition for the error message snackbar
const SlideTransition = props => (<Slide direction="up" {...props} />)

const ProfileForm = props => {
    const styles = useStyles();

    // Destructure props
    const {user, setUser, baseUrl} = props;

    // State for managing the submit error message
    const [submitError, setSubmitError] = useState("");

    return (
        <>
            {/* Form header */}
            <Typography
                variant="body1"
                classes={{body1: styles.title}}
            >
                {props.changePassword ? "Change Password" : "Personal Information"}
            </Typography>
            <hr className="divider" />

            {/* Form body */}
            {props.changePassword ?
                <ChangePassword
                    styles={styles}
                    user={user} setUser={setUser} baseUrl={baseUrl}
                    setSubmitError={setSubmitError}
                />
            :
                <PersonalInfo
                    styles={styles}
                    user={user} setUser={setUser} baseUrl={baseUrl}
                    avatarSrc={props.avatarSrc} avatarTxt={props.avatarTxt}
                    setSubmitError={setSubmitError}
                />
            }

            {/* Display submit error message if there is one */}
            <Snackbar
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                TransitionComponent={SlideTransition}
                open={submitError.length > 0} autoHideDuration={5000}
                onClose={() => setSubmitError("")}
            >
                <SnackbarContent
                    message={submitError}
                    className={styles.error}
                    action={
                        <IconButton size="small" onClick={() => setSubmitError("")} color="inherit">
                            <Close fontSize="small" />
                        </IconButton>
                    }
                />
            </Snackbar>
        </>
    )
}

export default ProfileForm;