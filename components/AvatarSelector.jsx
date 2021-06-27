import React, {useEffect, useState} from "react";
import {Avatar, Badge, IconButton, makeStyles} from "@material-ui/core";
import {Close, Edit} from "@material-ui/icons";
import FileUpload from "./FileUpload";

const useStyles = makeStyles({
    avatarPreview: {
        height: "2.3em",
        width: "2.3em",
        fontSize: "3em"
    },
    editIcon: {
        backgroundColor: "white",
        boxShadow: "0em 0em 0.3em",
        padding: "0.4em",
        "&:hover": {
            backgroundColor: "white"
        }
    }
})

// Avatar edit badge icon
const EditIcon = ({avatarEdit}) => {
    const styles = useStyles();

    return (
        <IconButton
            className={styles.editIcon}
        >
            {avatarEdit ? <Close /> : <Edit />}
        </IconButton>
    )
};

const AvatarSelector = ({callback, avatarSrc, avatarTxt, edit}) => {
    const styles = useStyles();

    const [avatarEdit, setAvatarEdit] = useState(false);
    const [src, setSrc] = useState("");

    // Reset avatarEdit state and preview src when the main edit state is toggled
    useEffect(() => {
        edit && setAvatarEdit(false);
        !edit && setSrc(avatarSrc);
    }, [edit]);

    // Update src state when the prop is updated
    useEffect(() => {
        setSrc(avatarSrc);
    }, [avatarSrc]);

    // Set preview callback function passed to FileUpload component
    const setPreview = url => {
        url ? setSrc(url) : setSrc(avatarSrc);
    }

    return (
        <>
            {/* Avatar edit badge */}
            <Badge
                overlap="circle"
                anchorOrigin={{vertical: "top", horizontal: "right"}}
                badgeContent={<EditIcon avatarEdit={avatarEdit} />}
                onClick={() => setAvatarEdit(!avatarEdit)}
                invisible={!edit}
            >
                {/* Avatar preview */}
                <Avatar
                    variant="rounded"
                    src={src}
                    className={styles.avatarPreview}
                    onClick={event => event.stopPropagation()}
                >
                    {avatarTxt}
                </Avatar>
            </Badge>

            <div hidden={!avatarEdit}>
                {edit && <FileUpload callback={callback} setPreview={setPreview} />}
            </div>
        </>
    )
}

export default AvatarSelector;