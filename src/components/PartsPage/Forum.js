import React from "react";
import { Link } from 'react-router-dom';
import LastPost from './LastPost.js';
import ForumMenu from "./ForumMenu.js";
import styles from "./forum.module.scss";

export default function Forum({ forum, partId, isFirst = 0 }) {

    const { urn, name, postsCount, topicsCount, lastPost } = forum;

    return (
        <div className={`${isFirst&&styles.forum_first} ${styles.forum}`} >
            <Link to={`/${urn}`} className={styles.forum_title}>{name}</Link>
            <p className={styles.description}>Описание форума. Про что он? Темы, затрагиваемые им. Можно кратко, можно длинно. как придется. Опишите как угодно, это все равно не влезет полностью в таблицу.</p>
            
                <p>Всего тем: {topicsCount}.</p>
                <p>Всего сообщений: {postsCount}.</p>
            
            <LastPost lastPost={lastPost} />
            <ForumMenu forum={{ urn, name }} partId={partId} /> 
            
        </div>
        )
}
