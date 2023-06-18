import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hideRedactor } from "../../redux/actions.js";

export default function Redactor({ children, action, buttonTitle = "Отправить", style = null }) {
    
    const dispatch = useDispatch();

    const messageState = useState({ ...action.payload });
    const [messageData] = messageState;
    const addMessageState = (element) => { 
            
            if (!element.type || !element.type.name) return element; 
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
        <div className={style}>
            {redactorElements}
            <button onClick={ () => {
                    action.payload = messageData;
                    dispatch(action);
                    dispatch(hideRedactor());
                }
            }>{buttonTitle}</button>
        </div>
        );
}
