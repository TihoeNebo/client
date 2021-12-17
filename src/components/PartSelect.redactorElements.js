import React, { useState, useEffect } from "react";

export default function PartSelect({ messageState, partId = null }) {

    const [partsData, setPartsData] = useState([]);

    const [messageData, setMessageData] = messageState;

    useEffect(async () => setPartsData(await getPartsData()), [true]);
    useEffect(() => {
        setMessageData(
            {
                ...messageData,
                part: {
                    id: partId
                }
            }
        );
    }, [true]);

    const partsOptions = partsData.length ? partsData.map((part) => {
               
        return (
            <option value={part.id}>
                {part.name}
            </option>
        )
    }) : null;

    
    const selectorHandler = (e) => {
         setMessageData(
            {
                ...messageData,
                part: {
                    id: e.target.value
                }
            }
        );
    }

    return (
        <section>
            Выбрать раздел:
            <select onChange={selectorHandler} name="id" defaultValue={partId}>
                {partsOptions}
            </select>
        </section>

    );
}

async function getPartsData() {
    return [
        {
            id: 2,
            name: "First"
        }, {
            id: 3,
            name: "Принципы ритуальной магии"
        }, {
            id: 4,
            name: "Астрология"
        },
    ];
}
