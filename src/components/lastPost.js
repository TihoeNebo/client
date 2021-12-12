import React from "react";
import { Link } from "react-router-dom";
import Author from './Author.js';

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
                Автор: <Author author={ author } /></p>
        </div>
        )
}