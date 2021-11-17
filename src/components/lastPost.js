import React from "react";
import { Link } from 'react-router-dom';

export default function LastPost({ lastPost }) {
    const {
        postPath,
        theme,
        lastPostDate,
        userId,
        userName
    } = lastPost;

    return (
        
        <div>
            <Link to={postPath}>{theme}</Link>
            <p>Дата: {lastPostDate},
                Автор: <Link to={`/profile/${userId}`}>{userName}</Link></p>
        </div>
        )
}