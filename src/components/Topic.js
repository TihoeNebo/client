import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Author from "./Author.js";
import TopicMenu from "./TopicMenu.js";
import { returnTopic } from "../redux/actions.js";


function Topic({ topic, deletedTopics, returnTopic }) {

    const isDeleted = deletedTopics.length ?
        deletedTopics.find(deletedTopic => topic.id == deletedTopic.id && topic.forumURN == deletedTopic.forumURN) + 1 : false;

    return (
        <div className="topic" key={topic.id}>
            {
                isDeleted ?
                    <p>
                        Тема была удалена. <br />
                        <span onClick={() => returnTopic(topic.forumURN, topic.id)}>
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

const mapStateToProps = state => ({
    deletedTopics: state.forum.deletedTopics
})

const mapDispatchToProps = {
    returnTopic
};


export default connect(mapStateToProps, mapDispatchToProps)(Topic)