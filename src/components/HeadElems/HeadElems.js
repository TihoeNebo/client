import React from 'react';
import AuthenticationMenu from "./AuthenticationMenu";
import PopupWindows from "./PopupWindows/PopupWindows.js";
import styles from "./header.module.scss";

export default function HeadElems() {
    return (
        <header className={styles.header}>
            <h1 className={styles.header_maintitle}>
                <span className={styles.header_T}>Т</span>
                <span className={styles.header_firstword}>ихое</span>
                <span className={styles.header_H}>Н</span>
                <span className={styles.header_secondword}>ебо</span>
            </h1>
            <div className={styles.header_loginmenu}>
                <AuthenticationMenu />
                
            </div>
            <PopupWindows />
        </header>
        )
}
