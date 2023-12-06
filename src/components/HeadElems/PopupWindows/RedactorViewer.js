import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideRedactor, clearRedactor } from "../../../redux/actions/redactor.js";
import styles from "./redactorViewer.module.scss";

export default function RedactorViewer() {

    const redactor = useSelector(state => state.popup.redactor);
    const dispatch = useDispatch();
    const closeWindow = ({target, currentTarget}) => {
        if (target !== currentTarget) return;
        dispatch(clearRedactor());
        dispatch(hideRedactor());
    }
    
    if (!redactor) return null;

    return (
        <div onClick={ closeWindow } className={styles.overlay}>
            <article className={styles.content}>
                    <button onClick={ closeWindow } className={styles.close}>&#10006;</button>
                    {redactor}   
            </article>
        </div>
    )
}