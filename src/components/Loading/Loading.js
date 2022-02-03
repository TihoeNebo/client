import React from "react";


export default function Loading({ children, isLoaded }) {

    if (isLoaded) return children;

    return (
        <p>Загрузка...</p>
    );
}