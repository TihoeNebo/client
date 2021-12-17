import React, { useState, useEffect } from "react";

export default function ConfurmChoiceWindow({ data, textQuestion, textConfurm, closeRedactor }) {
    const [isMenuClosed, setMenuClosed] = useState(false);
    const confurmHandler = (e) => {
        if (e.target.value) {
            sendMessage(data);
            setMenuClosed(true);
        } else {
            closeRedactor();
        }
    }

    useEffect(() => {
        if (isMenuClosed) {
            setTimeout(() => closeRedactor(), 4000);
        }
    }, [isMenuClosed])

    return (
        <>
            {
                isMenuClosed ? 
                    <div>{textConfurm}</div> :
                    <div>
                        {textQuestion}
                        <button onClick={confurmHandler} value={true}>Да</button>
                        <button onClick={confurmHandler} value={false}>Нет</button>
                    </div>
             }
        </>
        
    )
}

function sendMessage(data) {
    return console.log(data);
}