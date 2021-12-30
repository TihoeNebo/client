import React from 'react';
import Forum from './Forum.js';
import PartRedactorMenu from "./PartRedactorMenu.js";

export default function Part({ part }) {

    const { partId, partName, forums } = part;
    const forumList = forums.map(forum => <Forum forum={forum} partId={partId} key={forum.urn}/>);

    return (
        <section className="part" key={partId} >
            <span>{partName}</span>
            <PartRedactorMenu part={{ id: partId, name: partName }} />
            {forumList}
        </section>
        )
}
