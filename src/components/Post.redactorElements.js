import React from "react";

export default function PostRedactor({ messageState = null}) {

    const [messageData, setMessageData] = messageState;

    return (
        <section>
            <textarea onChange={
                (e) => setMessageData(
                        {
                            ...messageData,
                            post: {
                                ...messageData.post,
                                content: e.target.value
                            }
                        })
                }
            />
        </section>
    );
}

