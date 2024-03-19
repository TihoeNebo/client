import React, { useEffect } from 'react';
import styles from "./popuplist.module.scss";

export default function PopupList({ data, visibilityState }) {

    
    const [isVisible, setVisibility] = visibilityState;
    

    useEffect(() => {
        
        const closeList = () => {
            setVisibility(false);
            window.removeEventListener("click", closeList);
        }
        if (isVisible) window.addEventListener("click", closeList);
    }, [isVisible, setVisibility]);

    if (!data || !isVisible) return null;

    return (
        
        <ul className={styles.submenu}>
            {data}
        </ul>
    );
}
