import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ToggleButton from "../Redactor/ToggleButton.js";
import Topic from "./Topic.js";
import TopicRedactor from "../Redactor/Topic.redactorElements.js";
import PostRedactor from "../Redactor/Post.redactorElements.js";
import Redactor from "../Redactor/Redactor.js";
import Loading from "../Loading/Loading.js";
import { getForum } from "../../redux/actions/forums.js";
import { createTopic } from "../../redux/actions.js";


export default function ForumPage() {

    const { forumURN } = useParams();

    const data = useSelector(state => state.data.forum);
    const isLoaded = useSelector(state => state.loading.forum);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getForum(forumURN));
    }, [true]);

    const topicList = data && data.topics.length ? data.topics.map(topic => <Topic topic={topic} />) : "пусто";
    
    return (
        <div>
            <Loading isLoaded={isLoaded}>
                {
                    data ?
                        <>
                            <div>
                                <strong><Link to="/">список форумов</Link></strong>
                            </div>
                            <div>
                                <h2>Форум {data.forum.name}</h2>
                            </div>
                            <div>
                                {topicList}
                            </div>
                        </>
                        : null
                }
            </Loading>
            <ToggleButton allowedLevel={2} title="Создать тему">
                <Redactor action={ createTopic(forumURN) } >
                    <h3>Новая тема:</h3>
                    <TopicRedactor  />
                    <PostRedactor  />
                </Redactor>
            </ToggleButton>
        </div>
        )

}

