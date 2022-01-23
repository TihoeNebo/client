import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PartSelect({ messageState, partId = null }) {

    const [messageData, setMessageData] = messageState;

    const partsData = useSelector(state => state.data.parts);

    useEffect(() => {
        setMessageData(
            {
                ...messageData,
                partId: partId
            }
        );
    }, [true]);

    const parts = partsData.map(
        (part) => {
            return (
                <option value={part.partId}>
                    {part.partName}
                </option>
            )
        }
    );

    
    const selectorHandler = (e) => {
         setMessageData(
            {
                ...messageData,
                partId: e.target.value
            }
        );
    }

    return (
        <section>
            Выбрать раздел:
            <select onChange={selectorHandler} name="id" defaultValue={partId}>
                {parts}
            </select>
        </section>
    );
}


