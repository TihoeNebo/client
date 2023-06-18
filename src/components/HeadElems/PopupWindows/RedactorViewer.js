import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideRedactor } from "../../../redux/actions.js";
import styles from "./redactorViewer.module.scss";

export default function RedactorViewer() {

    const redactor = useSelector(state => state.popup.redactor);
    const dispatch = useDispatch();
    
    if (!redactor) return null;

    return (
        <article className={styles.redactor}>
            <button onClick={() => dispatch(hideRedactor()) } className={styles.close}>&#10006;</button>
            {redactor}
        </article>
    )
}