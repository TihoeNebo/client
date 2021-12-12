import React, { useEffect, useState } from 'react';
import noticesSource from "../noticessource.js";
import sendersSource from "../senderssource.js";

export default function List({ url, Component, closeList }) {
    const [items, setItems] = useState([]);
    useEffect(async () => setItems(await getItems(url)));
    useEffect(() => {
        window.addEventListener("click", closeList)
    },[url]);

    if (!items.length) return null;

    const itemsList = items.map(itemData => Component(itemData, true) );
    return (

        <ul>
            {itemsList}
        </ul>
    );
}

async function getItems(url) {
    return (url === "/notices") ? noticesSource : sendersSource;
}
