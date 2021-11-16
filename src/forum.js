import React from "react";
import LastPost from './lastPost.js';

export default function Forum({forum}) {
    const {
        forumURN,
        forumName,
        sumTopics,
        sumPosts,
        lastPost
    } = forum;
    lastPost.postPath = `/${forumURN}/${lastPost.topicId}#${lastPost.lastPostId}`;//изменить первоначальные параметры
    return (
        <tr>
            <td><h3><a href={`/${forumURN}`}>{forumName}</a></h3></td>
            <td>{sumTopics}</td>
            <td>{sumPosts}</td>
            <LastPost lastPost={ lastPost } />
        </tr>
        )
}
