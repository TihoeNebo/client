import React from 'react';
import Forum from './forum.js';

export default function Part({ partId, partName, forums }) {
    const forumList = [];
    for (let i = 0; i < forums.length; i++) {
        forumList.push(Forum(forums[i]));
    }
    return (
        <div className="part" data-partid={partId}>
            <span>{partName}</span>
            <table>

                <tbody>{forumList}</tbody>
            </table>
        </div>
        )
}
