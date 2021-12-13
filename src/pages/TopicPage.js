import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import postsData from "../psource.js";
import Post from "../components/Post.js";
import Redactor from "../components/Redactor.js";
import { useUserContext } from "../components/UserContext.js"


export default function ForumPage() {
    const { forumURN, topicId } = useParams();
    const [data, setData] = useState({ forum: {}, topic: {}, posts: [] });
    const messageData = useState(
        {
            type: "post",
            forumURN: forumURN,
            topicId: topicId,
            date: null,
            content: ""
        }
    );
    const [userData] = useUserContext();
    useEffect(() => {
        setData( getPostList(forumURN, topicId) );
    })

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
                userData.level > 1 ?
                    <>
                        <strong> Написать сообщение:</strong>
                        <Redactor messageData={messageData} sendMessage={sendMessage} />
                    </> : null
            }
            
        </div>
        )

}

function getPostList(forumURN, topicId) {
    return postsData;
    
}

async function sendMessage(messageData) {
    return;
}
