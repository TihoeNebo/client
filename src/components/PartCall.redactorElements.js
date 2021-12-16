import React from "react";

export default function PartCall({ messageState = null, partId = null }) {

    if (!messageState) return null;
    const [messageData, setMessageData] = messageState;
    
    const textHandler = (e) => {
        setMessageData(
            {
                ...messageData,
                part: {
                    id: partId,
                    name: e.target.value
                }
            }
        );
    }

    return (

        <section>
            Название раздела: <input type="text" onChange={textHandler} name="name" /><br />
        </section>

    );
}

