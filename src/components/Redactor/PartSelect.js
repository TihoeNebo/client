import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PartSelect({ action, partId = null }) {

    const partsData = useSelector(state => state.data.parts);
    const dispatch = useDispatch();

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
         dispatch(action(e.target.value));
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


