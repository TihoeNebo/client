import React from "react";

export default function Name({ messageState = null }) {

    const [messageData, setMessageData] = messageState;

    return (
        <input type="text" name="mail" onChange={
            (e) => setMessageData(
                {
                    ...messageData,
                    person: {
                        ...messageData.person,
                        name: e.target.value
                    }

                })
            }
        />

    );
}