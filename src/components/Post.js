import React from 'react';
import { connect } from "react-redux";
import Author from "./Author.js";
import PostMenu from "./PostMenu.js";
import { returnPost } from "../redux/actions.js";

function Post({ post, deletedPosts, returnPost }) {

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
                        <span onClick={() => returnPost(post.forumURN, post.topicId, post.id)}>
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

const mapStateToProps = state => ({
    deletedPosts: state.topic.deletedPosts
})

const mapDispatchToProps = {
    returnPost
};


export default connect(mapStateToProps, mapDispatchToProps)(Post)
