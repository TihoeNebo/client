import React from 'react';
import Post from "../components/Post.js";

export default function PostList({ posts }) {
    
    const postList = posts.map(post => <Post post={post} />);
    return (
        <div>
            {postList}
        </div>
    )
}
