import React from 'react';
import { Link } from "react-router-dom";
import Author from "./Author.js";

export default function Topic({ topic }) {
    return (
        <div key={topic.id}>
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
        </div>
        )
}