import React, { useState } from 'react';
import Profile from "./Profile.js";

export default function Author({ author }) {
    const authorState = useState(null);
    const [authorId, setAuthorId] = authorState;
    return (
        <>
            <span onClick={() => setAuthorId(author.id)}>{author.name}</span>
            <Profile authorState={authorState} />
        </>
        )
}

