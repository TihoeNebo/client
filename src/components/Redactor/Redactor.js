import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideRedactor, clearRedactor } from "../../redux/actions/redactor.js";

export default function Redactor({ children, action, buttonTitle = "Отправить", style = null }) {
    
    const dispatch = useDispatch();
    const redactorState = useSelector(state => state.redactor)
    console.log(children);
       
    return (
        <>
            {children}
            <button onClick={ () => {
                    dispatch((console.log("FGHFGHFGHGHG"),console.log(redactorState), action(redactorState)));
                    dispatch(clearRedactor());
                    dispatch(hideRedactor());
                }
            }>{buttonTitle}</button>
        </>
        );
}
