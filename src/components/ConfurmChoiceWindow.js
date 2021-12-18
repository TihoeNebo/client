import React from "react";

export default function ConfurmChoiceWindow({ data, textQuestion = null, popupWindowLaunch, PopupWindowContent = null, closeRedactor }) {

    if (!textQuestion)  {
        popupWindowLaunch(PopupWindowContent);
        return closeRedactor();
    }

    const confurmHandler = (e) => {
        if (e.target.value) {
            sendMessage(data);
            popupWindowLaunch(PopupWindowContent);
            closeRedactor();
        } else {
            closeRedactor();
        }
    }

    return (
        <div>
            {textQuestion}
            <button onClick={confurmHandler} value={true}>Да</button>
            <button onClick={confurmHandler} value={false}>Нет</button>
        </div>
    );
}

function sendMessage(data) {
    return console.log(data);
}