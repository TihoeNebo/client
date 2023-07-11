import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Author from "../Profile/Author.js";
import PostMenu from "./PostMenu.js";
import { returnPost } from "../../redux/actions/post.js";

export default function Post({ post }) {

    const deletedPosts = useSelector(state => state.topic.deletedPosts);
    const dispatch = useDispatch();

    const isDeleted = deletedPosts.find(
            deletedPost =>
                post.topicId == deletedPost.topicId &&
                post.forumURN == deletedPost.forumURN &&
                post.id == deletedPost.id
        );

    return (
        <>
            {
                isDeleted ?
                    <div>
                        Сообщение удалено.
                        <span onClick={() => dispatch(returnPost(post.forumURN, post.topicId, post.id)) }>
                            Восстановить.
                        </span>
                    </div> :
                <div key={post.id}>
                    <div>
                        Автор: <Author author={post.author} />.<br />
                        Дата: {post.date}.
                    </div>
                    <div>
                        {post.content}
                    </div>
                    <PostMenu post={post} />
                </div>
            }
        </>
    )
}
