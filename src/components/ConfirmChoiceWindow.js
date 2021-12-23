import React from "react";
import { useUserContext } from './UserContext';

export function ConfirmChoiceWindow({ children, data, closeRedactor, closePrevious }) {

    const [{ launchers }] = useUserContext();
    const choiceConfirmedLaunch = launchers.choiceConfirmedLaunch;

    const QuestionContent = (children.find(child => child.type.name === "QuestionContent")).props.children;
    const PopupWindowContent = (children.find(child => child.type.name === "PopupWindowContent")).props.children;

    const confirmHandler = (isConfurmed) => {
        
        if (isConfurmed) {
            sendMessage(data);
            closeRedactor();
            choiceConfirmedLaunch(PopupWindowContent);
            closePrevious();
        } else {
            closeRedactor();
        }
    }

    return (
        <div>
            {QuestionContent}
            <button onClick={()=> confirmHandler(true)}>Да</button>
            <button onClick={() => confirmHandler(false)}>Нет</button>
        </div>
    );  
}

export function QuestionContent() {
    return (<></>);
}

export function PopupWindowContent() {
    return (<></>);
}

function sendMessage(data) {
    return console.log(data);
}