﻿import React from "react";
import { Link, useParams } from "react-router-dom";
import postsData from "../psource.js";
import PostList from "../components/PostList.js";
import ConditionButton from "../components/ConditionButton";



export default function ForumPage() {
    const { forumURN, topicId } = useParams();
    const { forum, topic, posts } = getPostList(forumURN, topicId);

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
            <PostList posts={posts} />
            <ConditionButton
                condition="createPostButton"
                title="Написать сообщение"
                callback={() => console.log("Клик post!")}
            />
        </div>
        )

}

function getPostList(forumURN, topicId) {
    return postsData;
    
}