import React, { useState, useEffect } from 'react';
import Profile from "./Profile.js";
import { useUserContext } from './UserContext';

export default function Author({ author }) {
    const authorState = useState(null);
    const [authorId, setAuthorId] = authorState;

    const [{ launchers }] = useUserContext();

    useEffect(() => {
            launchers.profileWindowLaunch(
                authorId ? <Profile authorState={authorState} /> : null
            ) 
    }, [authorId]);

    return (
            <span onClick={() => setAuthorId(author.id)}>{author.name}</span>
        )
}

