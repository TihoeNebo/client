import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post.js";
import Redactor from "../Redactor/Redactor.js";
import PostRedactor from "../Redactor/Post.redactorElements.js";
import SubscribeButton from "./SubscribeButton.js";
import Loading from "../Loading/Loading.js";
import { getTopic, createPost } from "../../redux/actions.js";



export default function TopicPage() {

    const { forumURN, topicId } = useParams();

    const user = useSelector(state => state.data.user.account);
    const data = useSelector(state => state.data.topic);
    const isLoaded = useSelector(state => state.loading.topic);
    const dispatch = useDispatch();
    
    useEffect(async () => {
        dispatch(getTopic(forumURN, topicId));
    }, [true]);

    const postList = data && data.posts.length ? data.posts.map(post => <Post post={post} />) : "пусто";

    return (
        <div>
            <Loading isLoaded={isLoaded}>
                {data ? 
                    <>
                        <div>
                            <strong><Link to="/">список форумов</Link></strong>&nbsp;
                            <strong><Link to={`/${data.forum.urn}`}>{data.forum.name}</Link></strong>
                        </div>
                        <div>
                            <h2>{data.topic.theme}</h2>
                            <strong>{data.topic.comment}</strong><br />
                            <SubscribeButton forumURN={data.forum.urn} topicId={data.topic.id} />
                        </div>
                        <div>
                            {postList}
                        </div>
                        {
                            user.level > 1 && !data.topic.params.closed ?
                                <Redactor action={createPost(forumURN, topicId)} >
                                    <strong> Написать сообщение:</strong>
                                    <PostRedactor />
                                </Redactor> : null
                        }
                    </> : null}
            </Loading>
        </div>
        )

}



