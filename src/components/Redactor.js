import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../redux/actions.js";

export default function Redactor({ children, launchReloading = null, data = null, buttonTitle = "Отправить" }) {
    
    const dispatch = useDispatch();

    const messageState = useState(data);
    const [messageData] = messageState;
    const addMessageState = (element) => { 
            
            if (!element.type.name) return element; 
            const redactorElement = {
                ...element, 
                props:  {
                    ...element.props, 
                    messageState: messageState
                }
            };
            
            return redactorElement;    
        }

    const redactorElements = children.length ? children.map(addMessageState) : addMessageState(children);
        
    return (
        <div>
            {redactorElements}
            <button onClick={ async () => {
                await dispatch(sendMessage(messageData));
                if (launchReloading) dispatch(launchReloading);
            }}>{buttonTitle}</button>
        </div>
        );
}
