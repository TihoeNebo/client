import React from "react";

export default function ConfirmPass({ messageState = null }) {

    const [messageData, setMessageData] = messageState;

    return (
        <input type="password" name="repeatPass" onChange={
                (e) => setMessageData(
                    {
                        ...messageData,
                        account: {
                            ...messageData.account,
                            isPassConfirmed: (messageData.account.pass === e.target.value)
                        }
                    })
            }
            />
        
    );
}