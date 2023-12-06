import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showRedactor } from "../../redux/actions/redactor.js";
import defaultStyle from "./togglebutton.module.scss";


export default function ToggleButton({ 
        allowedLevel = 0, 
        title, 
        buttonStyle = defaultStyle.main_button, 
        children 
    }) {

    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();

    return (
        <>
            {
                user.level >= +allowedLevel ? (
                    <button className={buttonStyle} onClick={() => dispatch( showRedactor(children) ) }>{title}</button>
                ) : null
            }
        </>
    );
}




