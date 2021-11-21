import React from 'react';
import { Link } from "react-router-dom";

export default function Topic({ topic }) {
    return (
        <div key={topic.id} dataEssential={topic.params.essential} dataClosed={topic.params.closed}>
            <div>
                <Link to={topic.linkPath}>{topic.theme}</Link><br/>
                <p>{topic.comment}</p>
            </div>
            <div>
                    Автор темы: <Link to={`/profile/${topic.author.id}`}>{topic.author.name}</Link><br/>
                        Количество просмотров: {topic.views}<br/>
                Количество сообщений: {topic.sumPosts}
            </div>
            <div>
                <Link to={`${topic.linkPath}#${topic.lastPost.id}`}>Последнее сообщение</Link>&nbsp;
                            от автора <Link to={`/profile/${topic.lastPost.author.id}`}>{topic.lastPost.author.name}</Link><br/>
                опубликовано {topic.lastPost.date}.<br/>
            </div>
        </div>
        )
}