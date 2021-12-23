import React, {useEffect} from "react";
import usePopupWindow from "../hooks/usePopupWindow.js";
import { useUserContext } from './UserContext';

export default function PopupWindows() {

    const [ChoiceConfirmedWindow, choiceConfirmedLaunch] = usePopupWindow();
    const [ProfileWindow, profileWindowLaunch] = usePopupWindow();
    const [RedactorWindow, redactorWindowLaunch] = usePopupWindow();

    const [userData, setUserData] = useUserContext();
    console.log("PopupWindows")
    useEffect(() => {
        setUserData({
            ...userData, launchers: {
                profileWindowLaunch,
                choiceConfirmedLaunch,
                redactorWindowLaunch
            }
        })
    }, [true])

    return (
        <>
            <ProfileWindow stayHold={true} />
            <ChoiceConfirmedWindow />
            <RedactorWindow stayHold={true} />
            
        </>
            
        )
 
}