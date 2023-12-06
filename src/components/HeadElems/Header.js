import React from 'react';
import AuthenticationMenu from "./AuthenticationMenu";
import MainTitle from "./MainTitle";
import PopupWindows from "./PopupWindows/PopupWindows.js";
import styles from "./header.module.scss";

export default function HeadElems() {
    return (
        <header className={styles.header}>
            <MainTitle />
            <div className={styles.header_loginmenu}>
                <AuthenticationMenu />
                
            </div>
            <PopupWindows />
        </header>
        )
}
