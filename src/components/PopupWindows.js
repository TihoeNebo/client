import React from "react";
import Prompt from "./Prompt.js";
import Alert from "./Alert.js";
import RedactorViewer from "./RedactorViewer.js";
import Profile from "./Profile.js";

export default function PopupWindows() {

    return (
        <>
            <Prompt />
            <Alert />
            <RedactorViewer />
            <Profile />
        </>
            
        )
 
}



