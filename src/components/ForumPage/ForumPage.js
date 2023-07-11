import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ToggleButton from "../Redactor/ToggleButton.js";
import Topic from "./Topic.js";
import InputString from "../Redactor/InputString.js";
import Textarea from "../Redactor/Textarea.js";
import Redactor from "../Redactor/Redactor.js";
import Loading from "../Loading/Loading.js";
import { getForum } from "../../redux/actions/forum.js";
import { createTopic, writeTopicTitle, writeTopicComment } from "../../redux/actions/topic.js";


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
                    <InputString  action={writeTopicTitle} />
                    <Textarea action={writeTopicComment} />
                </Redactor>
            </ToggleButton>
        </div>
        )

}

