import React from "react";

export default function Pass({ messageState = null }) {

    const [messageData, setMessageData] = messageState;

    return (
        <input type="password" name="pass" onChange={
            (e) => setMessageData(
                {
                    ...messageData,
                    account: {
                        ...messageData.account,
                        pass: e.target.value
                    }
                    
                })
        }
        />

    );
}