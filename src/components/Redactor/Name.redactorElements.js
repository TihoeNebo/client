import React from "react";

export default function Name({ messageState, name = "" }) {

    const [messageData, setMessageData] = messageState;

    return (
        <input type="text" name="mail" defaultValue={ name } onChange={
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