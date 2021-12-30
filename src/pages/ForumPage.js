import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ToggleButton from "../components/ToggleButton";
import Topic from "../components/Topic.js";
import TopicRedactor from "../components/Topic.redactorElements.js";
import PostRedactor from "../components/Post.redactorElements.js";
import Redactor from "../components/Redactor.js";
import { getForum } from "../redux/actions.js";


export default function ForumPage() {

    const { forumURN } = useParams();

    const data = useSelector(state => state.forum.forum);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getForum(forumURN));
    }, [true]);

    if (!data) return null;

    const { forum, topics } = data;
    const topicList = topics.map(topic => <Topic topic={topic} />);
    
    return (
        <div>
            <div>
                <strong><Link to="/">список форумов</Link></strong>
            </div>
            <div>
                <h2>Форум {forum.name}</h2>
            </div>
            <div>
                {topicList}
            </div>
            <ToggleButton allowedLevel="2" title="Создать тему">
                <Redactor launchReloading={getForum(forumURN)} data={{
                    type: "CreateTopic",
                    topic: {
                        forumURN: forumURN
                    },
                    post: {
                        forumURN: forumURN
                    }
                }}>
                    <h3>Новая тема:</h3>
                    <TopicRedactor  />
                    <PostRedactor  />
                </Redactor>
            </ToggleButton>
        </div>
        )

}

