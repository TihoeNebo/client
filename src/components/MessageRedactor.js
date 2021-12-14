import React from "react";

export default function MessageRedactor({ messageState = null, recipientId = null }) {
    if (!messageState) return null;
    const [messageData, setMessageData] = messageState;
    

    return (
        <section>
            <textarea onChange={
                (e) => setMessageData(
                    {
                        ...messageData,
                        to: recipientId,
                        content: e.target.value
                    }
                )
            }
            />
        </section>
    );
}
