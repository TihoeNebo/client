import React from 'react';
import AuthenticationMenu from "./AuthenticationMenu";
import PopupWindows from "./PopupWindows/PopupWindows.js";

export default function HeadElems() {
    return (
        <header>
            <h1>Тихое Небо</h1>
            <AuthenticationMenu />
            <PopupWindows />
        </header>
        )
}
