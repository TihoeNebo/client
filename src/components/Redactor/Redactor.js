import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideRedactor, clearRedactor } from "../../redux/actions/redactor.js";
import styles from "./redactor.module.scss";

export default function Redactor({ children, action, buttonTitle = "Отправить" }) {
    
    const dispatch = useDispatch();
    const redactorState = useSelector(state => state.redactor)
       
    return (
        <>
            {children}
            <button className={styles.main_button} onClick={ () => {
                    dispatch(action(redactorState));
                    dispatch(clearRedactor());
                    dispatch(hideRedactor());
                }
            }>{buttonTitle}</button>
        </>
        );
}
