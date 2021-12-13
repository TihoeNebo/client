import React from 'react';
import Forum from './Forum.js';

export default function Part({part}) {
    const { partId, partName, forums } = part;
    const forumList = forums.map(forum => <Forum forum={forum} /> );
    return (
        <section className="part" key={partId}>
            <span>{partName}</span>
            {forumList}
        </section>
        )
}
