import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideRedactor } from "../../../redux/actions.js";


export default function RedactorViewer() {

    const redactor = useSelector(state => state.popup.redactor);
    const dispatch = useDispatch();
    
    if (!redactor) return null;

    return (
        <article>
            <button onClick={() => dispatch(hideRedactor()) }>X</button>
            {redactor}
        </article>
    )
}