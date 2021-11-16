import React from "react";

export default function LastPost(
    { props }
) {
    const {
        postPath,
        theme,
        lastPostDate,
        userId,
        userName
    } = props;

    return (
        
        <td>
            <a href={postPath}>{theme}</a>
            <p>Дата: {lastPostDate},
                Автор: <a href={`/profile/${userId}`}>{userName}</a></p>
        </td>
        )
}