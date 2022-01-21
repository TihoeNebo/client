import React from "react";

export default function PartSetTitle({ messageState = null, thisTitle = ""}) {

    if (!messageState) return null;
    const [messageData, setMessageData] = messageState;

    const textHandler = (e) => {
        setMessageData(
            {
                ...messageData,
                part: {
                    ...messageData.part,
                    name: e.target.value
                }
            }
        );
    }

    return (

        <section>
            Название раздела: <input type="text" onChange={textHandler} name="name" defaultValue={thisTitle} /><br />
        </section>

    );
}

