import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Author from "../Profile/Author.js";
import TopicMenu from "./TopicMenu.js";
import { returnTopic } from "../../redux/actions/topic.js";


export default function Topic({ topic }) {

    const deletedTopics = useSelector(state => state.forum.deletedTopics);
    const dispatch = useDispatch();

    const isDeleted = deletedTopics.length ?
        deletedTopics.find(deletedTopic => topic.id == deletedTopic.id && topic.forumURN == deletedTopic.forumURN) + 1 : false;

    return (
        <div className="topic" key={topic.id}>
            {
                isDeleted ?
                    <p>
                        Тема была удалена. <br />
                        <span onClick={() => dispatch( returnTopic(topic.forumURN, topic.id) ) }>
                            Восстановить
                        </span>
                    </p> :
                <>
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
                    <TopicMenu topic={topic} />
                </>
            }
            
        </div>
        )
}
