import React from "react";
import { Link } from 'react-router-dom';

export default function LastPost({ lastPost }) {
    const {
        linkPath,
        topic,
        date,
        author
    } = lastPost;

    return (
        
        <div>
            <Link to={linkPath}>{topic.theme}</Link>
            <p>Дата: {date},
                Автор: <Link to={`/profile/${author.id}`}>{author.name}</Link></p>
        </div>
        )
}