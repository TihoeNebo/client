import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post.js";
import Redactor from "../Redactor/Redactor.js";
import PostRedactor from "../Redactor/Post.redactorElements.js";
import { getTopic, createPost } from "../../redux/actions.js";



export default function TopicPage() {

    const { forumURN, topicId } = useParams();

    const user = useSelector(state => state.data.user.account);
    const data = useSelector(state => state.data.topic);
    const dispatch = useDispatch();
    
    useEffect(async () => {
        dispatch(getTopic(forumURN, topicId));
    }, [true])

    if (!data) return null;

    const { forum, topic, posts } = data;
    const postList = posts.map(post => <Post post={post} />);

    return (
        <div>
            <div>
                <strong><Link to="/">список форумов</Link></strong>&nbsp;
                <strong><Link to={`/${forum.urn}`}>{ forum.name }</Link></strong>
            </div>
            <div>
                <h2>{topic.theme}</h2>
                <strong>{topic.comment}</strong>
            </div>
            <div>
                {postList}
            </div>
            {
                user.level > 1 && !topic.params.closed ?
                    <Redactor action={createPost(forumURN, topicId)} >
                        <strong> Написать сообщение:</strong>
                        <PostRedactor />
                    </Redactor> : null
            }
            
        </div>
        )

}



