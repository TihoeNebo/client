﻿import React, { useState } from "react";


export default function Redactor({ children, closeRedactor = null, launchReloading = null, data = null }) {
    
    const messageState = useState(data);
    const [messageData, setMessageData] = messageState;
    const addMessageState = (element) => { 
            console.log(element)
            if (!element.props) return element; 
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

    const sendMessage = async () => {
        closeRedactor ? closeRedactor() : launchReloading();
        return console.dir(messageData);
    }
    return (
        <div>
            {
                closeRedactor ?
                    <button onClick={() => closeRedactor()}>X</button>
                    : null
            }
            {redactorElements}
            <button onClick={sendMessage}>Отправить</button>
        </div>
        );
}
