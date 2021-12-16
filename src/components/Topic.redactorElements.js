﻿import React from "react";

export default function TopicRedactor({ messageState = null}) {
    if (!messageState) return null;
    const [messageData, setMessageData] = messageState;
            
    const textHandler = (e) => setMessageData(
        {
            ...messageData,
            topic: {
                ...messageData.topic,
                [e.target.name]: e.target.value
            }
        }
    );

    return (
        
            <section>
                <input type="text" onChange={textHandler} name="theme" /><br />
                <input type="text" onChange={textHandler} name="comment" /><br />
            </section>
        
    );
}