import React from "react";
import { Link } from "react-router-dom";
import Author from '../Profile/Author.js';
import styles from "./lastpost.module.scss";

export default function LastPost({ lastPost }) {
    const {
        linkPath,
        topic,
        date,
        author
    } = lastPost;

    return (
        
        <div className={styles.last_post}>
            <p className={styles.topictitle}>Последнее сообщение в теме: <Link to={linkPath}>{topic.theme}</Link></p>
            
            <p>Дата: {date}. </p>
            <p> Автор: <Author author={ author } /></p>
        </div>
        )
}