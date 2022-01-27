import React from "react";

export default function Mail({ messageState, mail="" }) {

    const [messageData, setMessageData] = messageState;

    return (
        <input type="text" name="mail" defaultValue={ mail } onChange={
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