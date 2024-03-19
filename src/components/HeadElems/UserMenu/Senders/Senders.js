import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopupList from "../PopupList.js";
import Sender from "./Sender.js";
import { getSenders } from "../../../../redux/actions/messager.js";
import styles from "./senders.module.scss";


export default function Senders( ) {

    const visibilityState = useState(false);
    const [isVisible, setVisibility] = visibilityState;

    const data = useSelector(state => state.data.messager.senders);
    const newMessagesCount = useSelector(state => state.data.user.statistic.newMessagesCount);
    const dispatch = useDispatch();
    console.log(data)
    useEffect(() => { if (isVisible) dispatch(getSenders()); }, [isVisible, dispatch]);
    

    const elements = data.length ? data.map((sender, index) => <Sender senderData={sender} key={"sender"+index}/>) : null;

    return (
        <li >
            <span 
                className={styles.menu_item} 
                data-name="senders" 
                onClick={() => setVisibility(true)}>Сообщения {newMessagesCount}</span>
            <div className={styles.wrap}><PopupList data={elements} visibilityState={visibilityState} /></div>
        </li>
    )
}

