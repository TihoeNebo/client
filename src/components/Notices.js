import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopupList from "./PopupList.js";
import Notice from "./Notice.js";
import { getNotices } from "../redux/actions.js";


export default function Notices( ) {

    const visibilityState = useState(false);
    const [isVisible, setVisibility] = visibilityState;

    const data = useSelector(state => state.data.notices)
    
    const user = useSelector(state => state.data.user.account);
    const dispatch = useDispatch();

    useEffect(() => { if (isVisible) dispatch(getNotices()); }, [isVisible]);

    const elements = data.length ? data.map(notice => <Notice data={notice} />) : null;

    return (
        <li onClick={() => setVisibility(true)}>
            Уведомления <span> {user.newNoticesCount}</span>
            <PopupList data={elements} visibilityState={visibilityState} />
        </li>
    )
}

