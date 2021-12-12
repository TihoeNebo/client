import React from 'react';
import { Link } from "react-router-dom";

export default function Notice(noticeData) {
    const { forum, topic, lastPost, isOpened } = noticeData;
    
    return (

        <li className={isOpened ? "Opened" : "New"}>

            <Link to={`${topic.linkPath}#${lastPost.id}`} ><p>Новое сообщение в теме "{topic.theme} - {topic.comment}"</p></Link>
            <Link to={`/${forum.urn}`}>Форум "{ forum.name }". </Link>
            Дата: {lastPost.date}, автор: <Link to={`/profile/${lastPost.author.id}`} >{lastPost.author.name}</Link>
        </li>
    );
}