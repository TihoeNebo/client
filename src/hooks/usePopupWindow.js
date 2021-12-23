import React, { useState, useEffect } from "react"; 

export default function usePopupWindow() {

    
    const [PopupWindowContent, setPopupWindowContent] = useState(null);

    const PopupWindow = ({ stayHold = false, closingTime = 4000 })=> {

        useEffect(() => {
            if (PopupWindowContent && !stayHold) {
                setTimeout(() => setPopupWindowContent(null), closingTime);
            }
        }, [ PopupWindowContent]);

        return (
            <>
                {PopupWindowContent}
            </>
            
        )
    }

    const launchPopupWindow = (Content=null) => {

        return setPopupWindowContent(Content);
    }

    return [PopupWindow, launchPopupWindow];
}