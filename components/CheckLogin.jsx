import React from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

//Component to check if the user has logged in
const checkLogin = () => {
    const check = () => {
        const isAuth = !!Cookies.get("token");

        if (isAuth) {
            let decoded = jwt_decode(Cookies.get("token"));
            return decoded.userType;
        } else {
            return false;
        }
    };
    return check;
};

export default checkLogin;