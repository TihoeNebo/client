import React, { useEffect } from 'react';

export default function PopupList({ data, visibilityState }) {

    const [isVisible, setVisibility] = visibilityState;

    const closeList = () => {
        setVisibility(false);
        window.removeEventListener("click", closeList);
    }

    useEffect(() => {
        if (isVisible) window.addEventListener("click", closeList);
    }, [isVisible]);

    if (!data || !isVisible) return null;

    return (

        <ul>
            {data}
        </ul>
    );
}
