import React from "react";
import LastPost from './LastPost.js';
import { Link } from 'react-router-dom';
import ForumMenu from "./ForumMenu.js";

export default function Forum({ forum, partId }) {
    const { urn, name, postsCount, topicsCount, lastPost } = forum;

    return (
        <div className="forum" >
            <div><h3><Link to={`/${urn}`}>{name}</Link></h3></div>
            <div>
                Всего тем: {topicsCount}.
                Всего сообщений: {postsCount}.
            </div>
            <LastPost lastPost={lastPost} />
            <ForumMenu forum={{ urn, name }} partId={partId} />
        </div>
        )
}
