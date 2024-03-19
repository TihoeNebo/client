import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopupList from "../PopupList.js";
import Notice from "./Notice.js";
import { getNotices } from "../../../../redux/actions/settings.js";
import styles from "./notices.module.scss";

export default function Notices(  ) {

    
    const visibilityState = useState(false);
    const [isVisible, setVisibility] = visibilityState;

    const data = useSelector(state => state.data.messager.notices)
    console.log(data)
    const newNoticesCount = useSelector(state => state.data.user.statistic.newNoticesCount);
    const dispatch = useDispatch();

    useEffect(() => { if (isVisible) dispatch(getNotices()); }, [isVisible, dispatch]);

    const elements = data.length ? data.map(notice => <Notice data={notice} />) : null;

    return (
        <li  onClick={() => { setVisibility(true)}}>
            <span  className={styles.menu_item} data-name="notices">Уведомления  {newNoticesCount}</span>
            <div className={styles.wrap}><PopupList data={elements} visibilityState={visibilityState} /></div>
        </li>
    )
}

