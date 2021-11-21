import React from 'react';
import { Link } from "react-router-dom";

export default function Post({ post }) {
    return (
        <div key={post.id}>
            <div>
                Автор: <strong><Link to={`/profile/${post.author.id}`}>{post.author.name}</Link></strong>.<br />
                Дата: {post.date}.
            </div>
            <div>
                {post.content}
            </div>
        </div>
    )
}
