import React, { useState } from "react";


export default function Redactor({ children, closeRedactor = null, launchReloading = null, data = null, buttonTitle = "Отправить" }) {
    
    const messageState = useState(data);
    const [messageData, setMessageData] = messageState;
    const addMessageState = (element) => { 
            console.log(element)
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
            <button onClick={sendMessage}>{buttonTitle}</button>
        </div>
        );
}
