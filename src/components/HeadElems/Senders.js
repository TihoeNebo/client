import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopupList from "./PopupList.js";
import Sender from "./Sender.js";
import { getSenders } from "../../redux/actions/messager.js";


export default function Senders( ) {

    const visibilityState = useState(false);
    const [isVisible, setVisibility] = visibilityState;

    const data = useSelector(state => state.data.messager.senders);
    const newMessagesCount = useSelector(state => state.data.user.statistic.newMessagesCount);
    const dispatch = useDispatch();

    useEffect(() => { if (isVisible) dispatch(getSenders()); }, [isVisible, dispatch]);
    const elements = data.length ? data.map(sender => <Sender senderData={sender} />) : null;

    return (
        <li data-name="senders" onClick={() => setVisibility(true)}>
            <span>Сообщения {newMessagesCount}</span>
            <PopupList data={elements} visibilityState={visibilityState} />
        </li>
    )
}

