import React from 'react';
import Forum from './Forum.js';
import PartRedactorMenu from "./PartRedactorMenu.js";

export default function Part({ part, reloadingLauncher }) {

    const { partId, partName, forums } = part;
    const forumList = forums.map(forum => <Forum forum={forum} />);

    return (
        <section className="part" key={partId} >
            <span>{partName}</span>
            <PartRedactorMenu reloadingLauncher={reloadingLauncher} part={{ id: partId, name: partName }} />
            {forumList}
        </section>
        )
}
