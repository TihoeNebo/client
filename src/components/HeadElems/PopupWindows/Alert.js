import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAlert } from "../../../redux/actions/popup.js";


export default function Alert() {

    const alert = useSelector(state => state.popup.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        if (alert) setTimeout(() => dispatch(hideAlert()), 3000);
    }, [alert]);

    if (!alert) return null;

    return (
        <article onClick={() => dispatch(hideAlert()) }>
            {alert}
        </article>
    )
}