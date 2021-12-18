import React from 'react';
import AuthenticationMenu from "./components/AuthenticationMenu";
import PopupWindows from "./components/PopupWindows";

export default function HeadElems() {
    return (
        <header>
            <h1>Тихое Небо</h1>
            <AuthenticationMenu />
            <PopupWindows />
        </header>
        )
}
