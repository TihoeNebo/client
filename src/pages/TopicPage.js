import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post.js";
import Redactor from "../components/Redactor.js";
import PostRedactor from "../components/Post.redactorElements.js";
import { getTopic } from "../redux/actions.js";



export default function TopicPage() {

    const { forumURN, topicId } = useParams();

    const user = useSelector(state => state.user.account);
    const data = useSelector(state => state.topic.topic);
    const dispatch = useDispatch();
    
    useEffect(async () => {
        dispatch(getTopic(forumURN, topicId));
    }, [true])

    if (!Object.keys(data).length) return null;

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
                user.level > 1 ?
                    <Redactor launchReloading={getTopic(forumURN, topicId)} data={
                        {
                            type: "CreatePost",
                            post: {
                                forumURN: forumURN,
                                topicId: topicId
                            }
                        }
                    }>
                        <strong> Написать сообщение:</strong>
                        <PostRedactor />
                    </Redactor> : null
            }
            
        </div>
        )

}



