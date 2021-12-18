import React, { useState, useEffect } from "react";

export default function usePopupWindow() {

    const [isWindowOpened, setWindowOpened] = useState(false);
    const [PopupWindowContent, setPopupWindowContent] = useState(null);

    const PopupWindow = ({ children, stayHold = false, closeTime = 4000 })=> {

        useEffect(() => {
            if (isWindowOpened && !stayHold) {
                setTimeout(() => setWindowOpened(false), closeTime);
            }
        }, [isWindowOpened]);

        return (
            <>
                {
                    isWindowOpened ?
                        PopupWindowContent : null
                }
            </>
            
        )
    }

    const launchPopupWindow = (Content=null) => {
        setPopupWindowContent(Content);
        return setWindowOpened(true);
    }

    return [PopupWindow, launchPopupWindow];
}