import React, {useEffect} from "react";
import usePopupWindow from "../hooks/usePopupWindow.js";
import { useUserContext } from './UserContext';

export default function PopupWindows() {

    const [ForumDeletedWindow, forumDeletedLaunch] = usePopupWindow();
    const [ConfirmChoiceWindow, confirmChoiceLaunch] = usePopupWindow();

    const [userData, setUserData] = useUserContext();

    useEffect(() => {
        setUserData({
            ...userData, launchers: {
                confirmChoiceLaunch, forumDeletedLaunch
            }
        })
    }, [true])

    return (
        <>
            <ConfirmChoiceWindow stayHold={true} />
            <ForumDeletedWindow />
        </>
            
        )
 
}