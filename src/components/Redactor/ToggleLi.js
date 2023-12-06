import React from "react";
import { useDispatch } from "react-redux";
import { showRedactor } from "../../redux/actions/redactor.js";


export default function ToggleLi({ 
        title, 
        liStyle = null, 
        children 
    }) {

    const dispatch = useDispatch();

    return (
        <li className={liStyle} onClick={() => dispatch( showRedactor(children) ) }><span>{title}</span></li>
    );
}




