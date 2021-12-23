import React, {useEffect} from "react";
import usePopupWindow from "../hooks/usePopupWindow.js";
import { useUserContext } from './UserContext';

export default function PopupWindows() {

    const [ChoiceConfirmedWindow, choiceConfirmedLaunch] = usePopupWindow();
    
    const [RedactorWindow, redactorWindowLaunch] = usePopupWindow();

    const [userData, setUserData] = useUserContext();

    useEffect(() => {
        setUserData({
            ...userData, launchers: {
                choiceConfirmedLaunch, redactorWindowLaunch
            }
        })
    }, [true])

    return (
        <>
            <ChoiceConfirmedWindow />
            <RedactorWindow stayHold={true} />
        </>
            
        )
 
}