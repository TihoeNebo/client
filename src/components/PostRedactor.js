import React from "react";

export default function PostRedactor({ messageState = null, forumURN = null, topicId = null, postId = null }) {
    if (!messageState) return null;
    const [messageData, setMessageData] = messageState;
    const postData = {
        forumURN: forumURN,
        topicId: topicId,
        postId: postId,
        content: null
    };

    return (
        <section>
            <textarea onChange={
                (e) => setMessageData(
                        {
                            ...messageData,
                            post: {
                                ...postData,
                                content: e.target.value
                            }
                        })
                }
            />
        </section>
    );
}

