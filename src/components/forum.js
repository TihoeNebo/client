import React from "react";
import LastPost from './lastPost.js';
import { Link } from 'react-router-dom';

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
        <div>
            <div><h3><Link to={`/${forumURN}`}>{forumName}</Link></h3></div>
            <div>
                Всего тем: {sumTopics}.
                Всего сообщений: {sumPosts}.
            </div>
            <LastPost lastPost={ lastPost } />
        </div>
        )
}
