import React from "react";

export default function Pass({ messageState = null, newPass = false }) {

    const name = newPass ? "newPass" : "pass";

    const [messageData, setMessageData] = messageState;

    return (
        <input type="password" name={ name } onChange={
            (e) => setMessageData(
                {
                    ...messageData,
                    account: {
                        ...messageData.account,
                        [e.target.name]: e.target.value
                    }
                    
                })
        }
        />

    );
}