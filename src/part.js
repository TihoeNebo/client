import React from 'react';
import Forum from './forum.js';

export default function Part({part}) {
    const { partId, partName, forums } = part;
    const forumList = forums.map(forum => <Forum forum={forum} /> );
    return (
        <div className="part" data-partid={partId}>
            <span>{partName}</span>
            <table>

                <tbody>{forumList}</tbody>
            </table>
        </div>
        )
}
