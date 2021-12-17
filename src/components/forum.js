import React from "react";
import LastPost from './LastPost.js';
import { Link } from 'react-router-dom';
import ForumRedactorMenu from "./ForumRedactorMenu.js";

export default function Forum({ forum, reloadingLauncher, partId }) {
    const { urn, name, postsCount, topicsCount, lastPost } = forum;

    return (
        <div className="forum" key={urn}>
            <div><h3><Link to={`/${urn}`}>{name}</Link></h3></div>
            <div>
                Всего тем: {topicsCount}.
                Всего сообщений: {postsCount}.
            </div>
            <LastPost lastPost={lastPost} />
            <ForumRedactorMenu forum={{ urn, name }} reloadingLauncher={reloadingLauncher} partId={partId} />
        </div>
        )
}
