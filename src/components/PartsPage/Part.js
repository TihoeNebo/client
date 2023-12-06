import React from 'react';
import Forum from './Forum.js';
import PartMenu from "./PartMenu.js";
import styles from "./part.module.scss";

export default function Part({ part }) {

    const { partId, partName, forums } = part;
    const forumList = forums.map((forum, index) => <Forum forum={forum} partId={partId} key={forum.urn} isFirst={!index} />);

    return (
        <section className={styles.part} key={partId} >
            <div className={styles.part_header}>
                <h3 className={styles.part_title}><span>{partName[0]}</span>{partName.slice(1)}</h3>
                <PartMenu part={{ id: partId, name: partName }} />
            </div>
            {forumList}
        </section>
        )
}
