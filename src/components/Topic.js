﻿import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Author from "./Author.js";
import TopicRedactorMenu from "./TopicRedactorMenu.js";
import usePopupWindow from "../hooks/usePopupWindow.js";


export default function Topic({ topic, reloadingLauncher }) {

    const [isDeleted, setDeleted] = useState(false);
    const [DeletedTopic, launchDeletedTopic] = usePopupWindow();

    return (
        <div className="topic" key={topic.id}>
            <DeletedTopic stayHold={true} />
            {
                isDeleted ?
                    null :
                <>
                    <div>
                        <Link to={topic.linkPath}>{topic.theme}</Link><br/>
                        <p>{topic.comment}</p>
                    </div>
                    <div>
                        Автор темы: <Author author={topic.author} /><br/>
                        Количество просмотров: {topic.views}<br/>
                        Количество сообщений: {topic.sumPosts}
                    </div>
                    <div>
                        <Link to={`${topic.linkPath}#${topic.lastPost.id}`}>Последнее сообщение</Link>&nbsp;
                        от автора <Author author={topic.lastPost.author} /><br/>
                        опубликовано {topic.lastPost.date}.<br/>
                    </div>
                    <TopicRedactorMenu
                        topic={topic}
                        reloadingLauncher={reloadingLauncher}
                        launchDeletedTopic={launchDeletedTopic}
                        setDeleted={setDeleted}
                    />
                </>
            }
            
        </div>
        )
}
