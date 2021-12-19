import React, { useEffect } from "react";
import { useUserContext } from './UserContext';

export function ConfirmChoiceWindow({ children, data, popupWindowLaunch, closeRedactor }) {

    
    const [{ launchers }] = useUserContext();
    const confirmChoiceWindowLaunch = launchers.confirmChoiceLaunch;

    const QuestionContent = (children.find(child => child.type.name === "QuestionContent")).props.children;
    const PopupWindowContent = (children.find(child => child.type.name === "PopupWindowContent")).props.children;

    

    const ChoiceWindow = () => {
        const confirmHandler = (isConfurmed) => {
            if (isConfurmed) {
                sendMessage(data);
                closeRedactor();
                confirmChoiceWindowLaunch(null);
                popupWindowLaunch(PopupWindowContent);
            } else {
                
                closeRedactor();
                confirmChoiceWindowLaunch(null);

            }
        }
        return (
            <div>
                {QuestionContent}
                <button onClick={()=> confirmHandler(true)} value={true}>Да</button>
                <button onClick={() => confirmHandler(false)} value={false}>Нет</button>
            </div>
        );
    }

    useEffect(()=> confirmChoiceWindowLaunch(ChoiceWindow), [true]);

    return null;
    
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