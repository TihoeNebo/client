import React from 'react';
import Author from "./Author.js";

export default function Post({ post }) {
    return (
        <div key={post.id}>
            <div>
                Автор: <strong><Author author={post.author} /></strong>.<br />
                Дата: {post.date}.
            </div>
            <div>
                {post.content}
            </div>
        </div>
    )
}
