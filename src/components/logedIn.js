import React from "react";
import { AuthContext } from "./authContext";


const LoggedIn=()=>{
    const {token} = React.useContext(AuthContext);
    return (
        <>
        <h1>Login Succesfull</h1>
        <h1>Your token is : {token}</h1>
        </>
    )
}

export default LoggedIn;