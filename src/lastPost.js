﻿import React from "react";

export default function LastPost({ lastPost }) {
    const {
        postPath,
        theme,
        lastPostDate,
        userId,
        userName
    } = lastPost;

    return (
        
        <td>
            <a href={postPath}>{theme}</a>
            <p>Дата: {lastPostDate},
                Автор: <a href={`/profile/${userId}`}>{userName}</a></p>
        </td>
        )
}