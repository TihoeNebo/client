import React from 'react';
import { connect } from "react-redux";
import Author from "./Author.js";
import PostRedactorMenu from "./PostRedactorMenu.js";
import { returnPost } from "../redux/actions.js";

function Post({ post, deletedPosts, returnPost }) {

    const isDeleted = deletedPosts.length ?
        deletedPosts.find(
            deletedPost =>
                post.topicId == deletedPost.topicId &&
                post.forumURN == deletedPost.forumURN &&
                post.id == deletedPost.id
                ) + 1 : false;

    return (
        <>
            {
                isDeleted ?
                    <div>
                        Сообщение удалено.
                        <span onClick={() => returnPost(
                            {
                                id: post.id,
                                forumURN: post.forumURN,
                                topicId: post.topicId
                            }
                        )}>Восстановить.</span>
                    </div> :
                <div key={post.id}>
                    <div>
                        Автор: <Author author={post.author} />.<br />
                        Дата: {post.date}.
                    </div>
                    <div>
                        {post.content}
                    </div>
                    <PostRedactorMenu post={post} />
                </div>
            }
        </>
    )
}

const mapStateToProps = state => ({
    deletedPosts: state.topic.posts
})

const mapDispatchToProps = {
    returnPost
};


export default connect(mapStateToProps, mapDispatchToProps)(Post)
