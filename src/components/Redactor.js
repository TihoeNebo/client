import React, { useState } from "react";

export default function Redactor({ messageData, sendMessage }) {
    const [message, setMessage] = messageData;
    //const [content, setContent] = useState("");

    return (
        <div>
            <textarea onChange={(e) => setMessage({ ...message, content: e.target.value })} />
            <button onClick={() => sendMessage(message)}>Отправить</button>
        </div>
    );
}

