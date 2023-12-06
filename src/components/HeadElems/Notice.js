import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from "./notice.module.scss";

export default function Notice({ data }) {
    const { forum, topic, lastPost, isOpened } = data;

    const navigate = useNavigate();

    const goToTopic = () => navigate(`${topic.linkPath}#${lastPost.id}`);
    
    return (

        <li className={isOpened ? "Opened" : "New"} onClick={goToTopic}>
            <span><p className={styles.notice}>Новое сообщение в теме 
            <Link to={`${topic.linkPath}#${lastPost.id}`} className={styles.title}>{topic.theme}</Link></p> 
            <p className={styles.string}>Автор: <Link to={`/profile/${lastPost.author.id}`}>{lastPost.author.name}</Link>.</p>
            <p className={styles.string}>Форум: <Link to={`/${forum.urn}`}>{ forum.name }</Link>.</p>
            Дата: {lastPost.date}.
            </span>
        </li>
    );
}