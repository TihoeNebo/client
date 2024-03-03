import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from "./notice.module.scss";

export default function Notice({ data }) {
    const { forum, topic, lastPost, isOpened} = data;
    const navigate = useNavigate();
    //<p className={styles.string}>Форум: <Link to={`/${forum.urn}`}>{ forum.name }</Link>.</p> 

    const goToTopic = () => navigate(`${topic.linkPath}#${lastPost.id}`);
    
    return (

        <li onClick={goToTopic}>
            
            <span className={`${styles.notice} ${isOpened ? styles.opened : styles.new}`}>
                <span className={styles.date}>{lastPost.date}</span>
                <p className={styles.string}>Новое сообщение <br />в теме <Link to={`${topic.linkPath}#${lastPost.id}`}>{topic.theme}</Link>:
                </p>
                <quote className={styles.description}>{lastPost.content}</quote>
                <p className={styles.string}>Автор: <Link to={`/profile/${lastPost.author.id}`}>{lastPost.author.name}</Link>.</p>
                
            
            </span>
        </li>
    );
}