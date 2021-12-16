import React from "react";

export default function ForumRedactor({ messageState = null, forumURN = null }) {
    if (!messageState) return null;
    const [messageData, setMessageData] = messageState;
    const forumData = {
        urn: forumURN
        
    };

    const textHandler = (e) => setMessageData(
        {
            ...messageData,
            forum: {
                ...messageData.forum,
                ...forumData,
                [e.target.name]: e.target.value
            }
        }
    );

    return (

        <section>
            Имя форума: <input type="text" onChange={textHandler} name="forumName" /><br />
            URN форума: <input type="text" onChange={textHandler} name="newUrn" /><br />
        </section>

    );
}
