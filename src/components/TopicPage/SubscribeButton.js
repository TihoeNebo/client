import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubscribes, deleteSubscribe, createSubscribe } from "../../redux/actions/subscribe.js";


export default function SubscribeButton ({ forumURN, topicId }) {

    const subscribes = useSelector(state => state.data.messager.subscribes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubscribes())
    }, [true]);

    const isSubscribed = subscribes.length ? (subscribes.find(topic => topic.forumURN === forumURN && topic.id === topicId )) : false;

    return (
        <>
            {
             isSubscribed ?
                <button onClick={() => dispatch(deleteSubscribe(forumURN, topicId))}>
                    Отписаться
                </button> :
                    <button onClick={() => dispatch(createSubscribe(forumURN, topicId))}>
                    Подписаться
                </button>
            }
        </>
        )
}