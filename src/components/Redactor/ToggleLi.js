import React from "react";
import { useDispatch } from "react-redux";
import { showRedactor } from "../../redux/actions/redactor.js";
import styles from "./toggleli.module.scss";


export default function ToggleLi({ 
        title, 
        liStyle = null, 
        children 
    }) {

    const dispatch = useDispatch();

    return (
        <li className={liStyle} onClick={() => dispatch( showRedactor(children) ) }>
            <span className={styles.menu_item}>{title}</span>
        </li>
    );
}




