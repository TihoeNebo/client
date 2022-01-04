import React from "react";

export default function Mail({ messageState = null }) {

    const [messageData, setMessageData] = messageState;

    return (
        <input type="text" name="mail" onChange={
            (e) => setMessageData(
                {
                    ...messageData,
                    account: {
                        ...messageData.account,
                        mail: e.target.value
                    }

                })
        }
        />

    );
}